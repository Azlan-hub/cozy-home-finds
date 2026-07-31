import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export function getAllPosts() {
  const files = fs.readdirSync(contentDirectory);

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '');
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug.replace('-', ' '),
      image: data.image || '',
      date: data.date || '2026-01-01',
      // Add the category field here
      category: data.category || 'uncategorized',
    };
  });

  return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data,
    content,
  };
}

// NEW FUNCTION: Filter posts by category
export function getPostsByCategory(categorySlug: string) {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === categorySlug);
}
