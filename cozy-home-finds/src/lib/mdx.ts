import postsData from './posts-data.json';

export interface Frontmatter {
  title: string;
  image: string;
  category: string;
  description?: string;
  author?: string;
  date?: string;
}

export interface Post {
  slug: string;
  title: string;
  image: string;
  category: string;
  date?: string;
}

export interface RawPost {
  slug: string;
  title: string;
  image: string;
  category: string;
  date?: string;
  frontmatter: Frontmatter;
  content: string;
}

const typedPostsData = postsData as RawPost[];

export function getAllPosts(): Post[] {
  return typedPostsData.map(post => ({
    slug: post.slug,
    title: post.title,
    image: post.image,
    date: post.date,
    category: post.category,
  }));
}

export function getPostBySlug(slug: string): { frontmatter: Frontmatter; content: string } {
  const post = typedPostsData.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post with slug ${slug} not found`);
  
  return {
    frontmatter: post.frontmatter as Frontmatter,
    content: post.content,
  };
}

export function getPostsByCategory(categorySlug: string) {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === categorySlug);
}
