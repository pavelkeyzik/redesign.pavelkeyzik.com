import { formatDate } from '@pavelkeyzik/date-format';
import { Card } from '@pavelkeyzik/design-system';
import React from 'react';
import styles from './all-posts.module.scss';

export interface AllPostsProps {
  allPosts: any[];
}

export function AllPosts(props: AllPostsProps) {
  return (
    <section className={styles.postsGrid}>
      {props.allPosts.map((post) => (
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
    </section>
  );
}

export default AllPosts;
