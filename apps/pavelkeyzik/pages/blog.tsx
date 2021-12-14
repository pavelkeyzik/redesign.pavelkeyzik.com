import Container from '../components/container/container';
import Header from '../components/header/header';
import { getAllPosts } from '../lib/api';
import AllPosts from '../components/all-posts/all-posts';
import Section from '../components/section/section';

function Blog({ allPosts }) {
  return (
    <Container>
      <Header />
      <main>
        <Section
          config={{
            title: 'All Posts',
          }}
        >
          <AllPosts allPosts={allPosts} />
        </Section>
      </main>
    </Container>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'readTime',
  ]);

  return {
    props: { allPosts },
  };
}

export default Blog;
