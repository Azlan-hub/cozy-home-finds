import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { getAllPosts } from '@/lib/mdx';
import { topProducts } from '@/lib/products';

// LAZY LOAD below-the-fold Client Components with skeleton loaders
const ProductCarousel = dynamic(() => import('@/components/ProductCarousel'), {
  ssr: false,
  loading: () => <div className="h-64 bg-[#F2EDE4] rounded-3xl animate-pulse w-full" />
});

const NewsletterForm = dynamic(() => import('@/components/NewsletterForm'), {
  loading: () => <div className="h-16 bg-white/10 rounded-full animate-pulse w-full max-w-md mx-auto" />
});

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION - PRIORITY WEBP IMAGE FOR BLAZING LCP */}
      <section className="relative flex flex-col md:flex-row items-center justify-between bg-[#F2EDE4] rounded-3xl overflow-hidden mt-6 border border-[#DDD6C8]">
        <div className="md:w-1/2 p-8 md:p-12 lg:p-16 z-10">
          <span className="text-[#C9A66B] font-semibold tracking-wider text-sm uppercase">Welcome to our home</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2F2F2F] mt-4 leading-tight">
            You want your home to feel like a warm hug.
          </h1>
          <p className="mt-6 text-lg text-[#66645F] max-w-md leading-relaxed">
            Hi, I’m Azlan. My wife and I are obsessed with turning cramped, chaotic apartments into cozy, expensive-looking sanctuaries. Here is exactly how we do it.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-3.5 bg-[#4E5B47] hover:bg-[#3D4A38] text-white rounded-full font-medium transition-colors shadow-md">
              Read Our Story &rarr;
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 w-full h-80 md:h-[500px] relative">
          <Image
            src="/hero-image.webp"
            alt="Cozy warm living room design"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 2. ALIGNED CATEGORY CARDS WITH WEBP OPTIMIZATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/category/small-spaces" className="group relative h-48 rounded-2xl overflow-hidden border border-[#DDD6C8]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:from-black/95 transition-all" />
            <Image 
              src="/small-space-plant-corner/small-space-plant-corner-ideas-that-feel-expensive.png" 
              alt="Small Spaces" 
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <h3 className="text-white font-serif text-xl font-bold tracking-wide drop-shadow-md">Small Spaces</h3>
            </div>
          </Link>
          
          <Link href="/category/balcony" className="group relative h-48 rounded-2xl overflow-hidden border border-[#DDD6C8]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:from-black/95 transition-all" />
            <Image 
              src="/placeholder-balcony.webp" 
              alt="Balcony Retreats" 
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <h3 className="text-white font-serif text-xl font-bold tracking-wide drop-shadow-md">Balcony Retreats</h3>
            </div>
          </Link>

          <Link href="/category/living-room" className="group relative h-48 rounded-2xl overflow-hidden border border-[#DDD6C8]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:from-black/95 transition-all" />
            <Image 
              src="/placeholder-living-room.webp" 
              alt="Living Room" 
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <h3 className="text-white font-serif text-xl font-bold tracking-wide drop-shadow-md">Living Room</h3>
            </div>
          </Link>

          <Link href="/category/home-office" className="group relative h-48 rounded-2xl overflow-hidden border border-[#DDD6C8]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:from-black/95 transition-all" />
            <Image 
              src="/placeholder-green-office.webp" 
              alt="Home Office" 
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <h3 className="text-white font-serif text-xl font-bold tracking-wide drop-shadow-md">Home Office</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. DYNAMICALLY LAZY-LOADED PRODUCT CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#DDD6C8]">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-serif text-[#2F2F2F] mb-2">Pieces We Actually Use</h2>
            <p className="text-[#66645F]">The exact Amazon and AliExpress finds we use to curate our spaces.</p>
          </div>
          <Link href="/shop" className="hidden md:block text-[#4E5B47] font-semibold hover:text-[#C9A66B] transition-colors">
            View All Finds &rarr;
          </Link>
        </div>

        <ProductCarousel products={topProducts} />
      </section>

      {/* 4. LATEST INSPIRATION */}
      <section className="border-t border-[#DDD6C8] pt-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-[#2F2F2F]">Latest from the Apartment</h2>
          <p className="text-[#66645F] mt-2">Fresh ideas, room tours, and helpful guides for every corner.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-[#FFFFFF] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#DDD6C8]">
              <div className="relative aspect-[3/4] w-full bg-[#FAF8F4] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-[#FAF8F4]/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#4E5B47] uppercase tracking-wider shadow-sm border border-[#DDD6C8]">
                  {post.category}
                </div>
                <Image
                  src={post.image.startsWith('/') || post.image.startsWith('http') ? post.image : `/${post.image}`}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-xl text-[#2F2F2F] group-hover:text-[#4E5B47] transition-colors leading-snug">{post.title}</h3>
                <div className="mt-auto pt-4 flex items-center text-sm text-[#8A947B]">
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. NEWSLETTER CAPTURE SECTION - DYNAMICALLY LAZY-LOADED FORM */}
      <section className="bg-[#4E5B47] text-white py-16 sm:py-24 mt-16 rounded-3xl mx-4 md:mx-8 mb-8 shadow-2xl relative border border-[#3D4A38]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Join the Cozy Home Community
          </h2>
          <p className="text-[#F2EDE4] mb-8 text-lg">
            Get our weekly curation of designer-approved spaces, organization hacks, and exclusive Amazon deals sent directly to your inbox.
          </p>
          
          <div className="relative pb-6">
            <NewsletterForm />
          </div>
          
          <p className="text-[#C9A66B] text-sm mt-2 font-medium">
            No spam, ever. Just beautiful homes. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
