import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';

const postsDirectory = join(process.cwd(), 'apps/pavelkeyzik/_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const readTime = readingTime(content).text;
  const mdxSource = await serialize(content);

  const items: Record<string, unknown> = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = mdxSource;
    }

    if (field === 'readTime') {
      items[field] = readTime;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export async function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map(async (slug) => {
    return await getPostBySlug(slug, fields);
  });

  const promised = await Promise.all(posts);

  // sort posts by date in descending order
  promised.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return promised;
}
