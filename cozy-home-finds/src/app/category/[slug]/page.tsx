import Link from 'next/link';
import Image from 'next/image';
import { getPostsByCategory } from '@/lib/mdx';
import { notFound } from 'next/navigation';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Validate that the slug is one of our expected categories
  const validCategories = [
    'decor', 'organization', 'small-spaces', 'rooms', 'home-office', 'balcony', 'wall-decor',
    'living-room', 'bedroom', 'dining-room', 'gaming-room',
    'kitchen-organization', 'bathroom-organization', 'laundry-room'
  ];
  if (!validCategories.includes(slug)) {
    notFound();
  }

  const posts = getPostsByCategory(slug);
  const formattedTitle = slug.replace('-', ' ');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-serif text-stone-900 capitalize">{formattedTitle}</h1>
        {/* Future SEO intro copy can go here */}
      </header>

      {posts.length === 0 ? (
        // The Graceful Empty State
        <div className="text-center py-24 bg-white rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">✨</span>
          </div>
          <h2 className="text-2xl font-semibold text-stone-800 mb-2">More inspiration coming soon.</h2>
          <p className="text-stone-500 max-w-md mx-auto mb-8">
            We are currently curating the best {formattedTitle} ideas and Amazon finds. Check back shortly!
          </p>
          <Link href="/" className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium rounded-full transition-colors">
            Return Home
          </Link>
        </div>
      ) : (
        // The Existing Post Grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-stone-100">
              <div className="relative aspect-[3/4] w-full bg-stone-100 overflow-hidden">
                <Image
                  src={post.image.startsWith('/') || post.image.startsWith('http') ? post.image : `/${post.image}`}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-xl text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">{post.title}</h3>
                <div className="mt-auto pt-4 flex items-center text-sm text-stone-500">
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
