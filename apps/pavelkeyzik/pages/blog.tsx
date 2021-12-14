import { Card } from '@pavelkeyzik/design-system';
import { formatDate } from '@pavelkeyzik/date-format';
import Container from '../components/container/container';
import Header from '../components/header/header';
import { getAllPosts } from '../lib/api';
import AllPosts from '../components/all-posts/all-posts';

function Blog({ allPosts }) {
  return (
    <Container>
      <Header />
      <main>
        <AllPosts allPosts={allPosts} />
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
