const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDirectory = path.join(__dirname, '../src/content');
const outputFile = path.join(__dirname, '../src/lib/posts-data.json');

const files = fs.readdirSync(contentDirectory);

const posts = files.map((fileName) => {
  const slug = fileName.replace('.mdx', '');
  const fullPath = path.join(contentDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug.replace('-', ' '),
    image: data.image || '',
    date: data.date,
    category: data.category || 'uncategorized',
    frontmatter: data,
    content,
  };
});

// Sort posts by date, handling missing dates safely
posts.sort((a, b) => {
  const dateA = a.date ? new Date(a.date).getTime() : 0;
  const dateB = b.date ? new Date(b.date).getTime() : 0;
  return dateB - dateA;
});

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
console.log(`Successfully generated ${posts.length} posts to posts-data.json`);
