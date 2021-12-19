import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import Header from '../../components/header/header';
import Container from '../../components/container/container';
import { Post } from '../../components/post';
import { getAllPosts, getPostBySlug } from '../../lib/api';

function PostPage({ post, preview, prevPost, nextPost }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Header />
      {router.isFallback ? <div>Loading…</div> : <Post data={post} />}
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getAllPosts(['slug', 'date', 'title', 'coverImage']);
  const sortedPosts = posts.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  );
  const currentPostIndex = sortedPosts.findIndex(
    (post) => post.slug === params.slug
  );

  const prevPost = sortedPosts[currentPostIndex + 1]
    ? sortedPosts[currentPostIndex + 1]
    : null;
  const nextPost = sortedPosts[currentPostIndex - 1]
    ? sortedPosts[currentPostIndex - 1]
    : null;

  const post = await getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'tags',
    'author',
    'content',
    'coverImage',
    'readTime',
    'excerpt',
  ]);

  return {
    props: {
      post,
      nextPost,
      prevPost,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default PostPage;
