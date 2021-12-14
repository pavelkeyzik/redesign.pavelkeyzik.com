import { Card } from '@pavelkeyzik/design-system';
import { formatDate } from '@pavelkeyzik/date-format';
import Container from '../components/container/container';
import Header from '../components/header/header';
import { getAllPosts } from '../lib/api';

function Blog({ allPosts }) {
  return (
    <Container>
      <Header />
      <main>
        <div
          style={{
            display: 'grid',
            gridGap: 16,
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}
        >
          {allPosts.map((post) => (
            <Card key={post.slug} href={`/blog/${post.slug}`}>
              <Card.Image
                src={post.coverImage.src}
                alt={`Cover image for ${post.title}`}
                width={700}
                height={500}
              />
              <Card.Title>{post.title}</Card.Title>
              <time>{formatDate(post.date)}</time>
              <Card.Content>{post.excerpt}</Card.Content>
            </Card>
          ))}
        </div>
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
