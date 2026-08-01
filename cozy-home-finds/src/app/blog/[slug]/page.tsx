import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import AffiliateCard from '@/components/AffiliateCard';
import Disclosure from '@/components/Disclosure';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { frontmatter } = getPostBySlug(slug);
    
    return {
      title: `${frontmatter.title} | Cozy Home Finds`,
      description: `Discover the best ideas and tips for ${frontmatter.title.toLowerCase()}. Smart home organization and aesthetic decor.`,
      openGraph: {
        title: frontmatter.title,
        description: `Read our guide on ${frontmatter.title.toLowerCase()}.`,
        url: `/blog/${slug}`,
        type: 'article',
        publishedTime: frontmatter.date,
        images: [
          {
            url: frontmatter.image,
            width: 1200,
            height: 630,
            alt: frontmatter.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: frontmatter.title,
        description: `Read our guide on ${frontmatter.title.toLowerCase()}.`,
        images: [frontmatter.image],
      },
    };
  } catch {
    return { title: 'Post Not Found | Cozy Home Finds' };
  }
}

const components = {
  AffiliateCard,
  Image,
  h2: (props: any) => (
    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3D3226] mt-12 mb-5 leading-tight tracking-tight border-b border-[#E8E1D3]/60 pb-3" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#3D3226] mt-10 mb-4 leading-snug" {...props} />
  ),
  img: (props: any) => (
    <span className="block my-8">
      <span className="block max-w-xl mx-auto rounded-xl overflow-hidden shadow-lg border border-stone-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img {...props} alt={props.alt || ''} className="w-full h-auto object-cover" loading="lazy" />
      </span>
      {props.alt && (
        <span className="block text-center text-sm text-stone-400 italic mt-2">
          {props.alt}
        </span>
      )}
    </span>
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-2 border-[#8B6F4E] pl-4 my-8 italic text-stone-600 font-serif text-lg leading-relaxed" {...props} />
  ),
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const { frontmatter, content } = getPostBySlug(slug);

    return (
      <article className="max-w-3xl mx-auto py-10 px-4 sm:px-0">
        {/* Category Label above Title */}
        {frontmatter.category && (
          <span className="text-xs font-semibold uppercase tracking-wider text-[#8B6F4E] block mb-2">
            {frontmatter.category.replace('-', ' ')}
          </span>
        )}

        <h1 className="text-4xl sm:text-5xl font-serif font-extrabold mb-6 capitalize text-stone-900 leading-tight">
          {frontmatter.title}
        </h1>
        
        {/* Rendered ONCE automatically right after title */}
        <Disclosure />

        {/* Invisible AdSense Slot */}
        <div id="adsense-top" className="w-full my-6"></div>

        <div className="prose prose-stone lg:prose-lg max-w-none">
          <MDXRemote source={content} components={components} />
        </div>

        {/* Invisible AdSense Slot */}
        <div id="adsense-bottom" className="w-full mt-12"></div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
