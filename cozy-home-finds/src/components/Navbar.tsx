"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { topProducts } from '@/lib/products';

// Blog posts index for instantaneous client-side search
const allArticles = [
  {
    title: "How to Style Wall Shelves Like an Interior Designer",
    slug: "how-to-style-wall-shelves",
    category: "Wall Decor",
    image: "/placeholder-led-wall-shelves.jpg"
  },
  {
    title: "Anatomy of an Elegant Apartment Dining Room: Make Every Meal Extraordinary",
    slug: "apartment-dining-room-ideas",
    category: "Dining Room",
    image: "/placeholder-dining-room.jpg"
  },
  {
    title: "Anatomy of a Cozy Workspace: The Green & Warm Wood Home Office",
    slug: "cozy-green-home-office",
    category: "Home Office",
    image: "/placeholder-green-office.jpg"
  },
  {
    title: "Small Gaming Setup Ideas That Maximize Your Space",
    slug: "small-gaming-setup",
    category: "Gaming Room",
    image: "/placeholder-gaming-room.jpg"
  },
  {
    title: "Anatomy of a Cozy Balcony: Modern Apartment Outdoor Ideas",
    slug: "modern-apartment-balcony",
    category: "Balcony & Outdoor",
    image: "/placeholder-balcony.jpg"
  },
  {
    title: "Small Apartment Living Room Ideas That Look Expensive",
    slug: "expensive-small-apartment-living-room",
    category: "Living Room",
    image: "/placeholder-living-room.jpg"
  },
  {
    title: "Transform Your Small Apartment Into a Cozy Retreat",
    slug: "cozy-apartment-retreat",
    category: "Bedroom",
    image: "/Cozy-apartment-retreat/cozy-apartment-retreat.webp"
  },
  {
    title: "6 Simple Rules to Make Your Home Beautiful Every Single Day",
    slug: "6-simple-ideas-beautiful-home",
    category: "Decor Rules",
    image: "/cat-decor.webp"
  },
  {
    title: "The Aesthetic Wire Storage Cart That Fixes Floor Clutter",
    slug: "aesthetic-wire-storage-cart",
    category: "Organization",
    image: "/wire-cart-product.jpg"
  },
  {
    title: "Small Space Plant Corner Ideas That Feel Expensive",
    slug: "small-space-plant-corner",
    category: "Small Spaces",
    image: "/small-space-plant-corner/small-space-plant-corner-ideas-that-feel-expensive.webp"
  },
  {
    title: "5 Renter-Friendly Decor Swaps That Made Our Apartment Look Custom",
    slug: "renter-friendly-decor-upgrades",
    category: "Decor Rules",
    image: "/hero-image.webp"
  },
  {
    title: "5 Decor Mistakes That Are Making Your Apartment Look Cheap",
    slug: "decor-mistakes-making-apartment-look-cheap",
    category: "Decor Rules",
    image: "/5-mistakes/cover.webp"
  },
  {
    title: "5 Ways to Fake a Lush Backyard on a Tiny Apartment Balcony",
    slug: "fake-backyard-apartment-balcony-upgrades",
    category: "Balcony & Outdoor",
    image: "/fake-backyard-apartment-balcony-upgrades/Balcony-Oasis.webp"
  }
];

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { name: 'Living Room', href: '/category/living-room' },
    { name: 'Bedroom', href: '/category/bedroom' },
    { name: 'Dining Room', href: '/category/dining-room' },
    { name: 'Home Office', href: '/category/home-office' },
    { name: 'Gaming Room', href: '/category/gaming-room' },
    { name: 'Balcony & Outdoor', href: '/category/balcony' },
    { name: 'Small Spaces', href: '/category/small-spaces' },
    { name: 'Wall Decor', href: '/category/wall-decor' },
    { name: 'Organization', href: '/category/laundry-room' },
    { name: 'Decor Rules', href: '/category/decor' },
  ];

  // Real-time filter for both Articles and Products
  const filteredResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return { articles: [], products: [] };

    const matchingArticles = allArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
    );

    const matchingProducts = topProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );

    return {
      articles: matchingArticles,
      products: matchingProducts
    };
  }, [searchQuery]);

  const hasQuery = searchQuery.trim().length > 0;
  const totalResults = filteredResults.articles.length + filteredResults.products.length;

  const handleClose = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#DDD6C8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Brand Logo with Official Logo.webp */}
            <Link href="/" className="flex items-center gap-3 group py-1">
              <Image
                src="/logo.webp"
                alt="Cozy Home By Azlan"
                width={200}
                height={64}
                priority
                className="h-16 w-auto object-contain transition-transform group-hover:scale-105 mix-blend-multiply"
              />
              <span className="font-serif text-2xl font-bold text-[#2F2F2F] tracking-tight group-hover:text-[#4E5B47] transition-colors hidden sm:inline">
                Cozy Home
              </span>
            </Link>

            {/* Room Categories Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#66645F] hover:text-[#4E5B47] text-sm font-medium transition-colors">
                Home
              </Link>

              <Link href="/about" className="text-[#66645F] hover:text-[#4E5B47] text-sm font-medium transition-colors">
                About Us
              </Link>

              {/* Categories Dropdown */}
              <div className="relative group">
                <button className="text-[#66645F] group-hover:text-[#4E5B47] text-sm font-medium transition-colors flex items-center gap-1 py-2">
                  Rooms & Guides
                  <svg className="w-4 h-4 text-[#8A947B] group-hover:text-[#4E5B47] transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute left-0 mt-0 w-52 bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#DDD6C8] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {categories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="block px-4 py-2 text-sm text-[#2F2F2F] hover:bg-[#F2EDE4] hover:text-[#4E5B47] transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/shop" className="text-[#66645F] hover:text-[#4E5B47] text-sm font-medium transition-colors">
                Shop Finds
              </Link>
            </nav>

            {/* Search Trigger Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2EDE4] hover:bg-[#DDD6C8] text-[#2F2F2F] text-sm font-medium transition-colors border border-[#DDD6C8]"
                aria-label="Search"
              >
                <svg className="w-4 h-4 text-[#4E5B47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden sm:inline text-xs font-medium">Search decor & guides...</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-[#2F2F2F] hover:bg-[#F2EDE4]"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#DDD6C8] bg-[#FAF8F4] px-4 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[#2F2F2F] hover:text-[#4E5B47] font-medium py-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[#2F2F2F] hover:text-[#4E5B47] font-medium py-1"
            >
              About Us
            </Link>
            <div className="space-y-2 pl-2 border-l-2 border-[#DDD6C8]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#8A947B]">Rooms & Guides</p>
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm text-[#66645F] hover:text-[#4E5B47] py-1"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <Link
              href="/shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[#2F2F2F] hover:text-[#4E5B47] font-medium py-1"
            >
              Shop Finds
            </Link>
          </div>
        )}
      </header>

      {/* Interactive Live Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-[#2F2F2F]/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-20 px-4 overflow-y-auto pb-12">
          <div className="bg-[#FFFFFF] w-full max-w-2xl rounded-3xl shadow-2xl p-6 relative border border-[#DDD6C8] animate-in fade-in zoom-in-95 duration-150 my-auto">

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#DDD6C8]">
              <h3 className="font-serif text-lg text-[#2F2F2F] font-semibold">Search Articles & Finds</h3>
              <button
                onClick={handleClose}
                className="text-[#8A947B] hover:text-[#4E5B47] p-1 rounded-full hover:bg-[#F2EDE4] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search Input Field */}
            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Try searching 'living', 'shelves', 'lamp'..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#FAF8F4] text-[#2F2F2F] placeholder:text-[#8A947B] border border-[#DDD6C8] focus:outline-none focus:ring-2 focus:ring-[#4E5B47]"
                  autoFocus
                />
                <svg className="w-5 h-5 text-[#8A947B] absolute left-4 top-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* LIVE RESULTS AREA */}
            {hasQuery ? (
              <div className="mt-6 max-h-[60vh] overflow-y-auto space-y-6 pr-1">
                {totalResults === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-[#2F2F2F] font-medium text-base">No results found for &quot;{searchQuery}&quot;</p>
                    <p className="text-[#66645F] text-sm mt-1">Try searching for rooms like &quot;living&quot; or decor items like &quot;shelves&quot;.</p>
                  </div>
                ) : (
                  <>
                    {/* Matching Articles */}
                    {filteredResults.articles.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-[#8A947B] uppercase tracking-wider mb-3">
                          Articles ({filteredResults.articles.length})
                        </p>
                        <div className="space-y-2">
                          {filteredResults.articles.map((article) => (
                            <Link
                              key={article.slug}
                              href={`/blog/${article.slug}`}
                              onClick={handleClose}
                              className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#F2EDE4] transition-colors group"
                            >
                              <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#FAF8F4] flex-shrink-0">
                                <Image src={article.image} alt={article.title} width={56} height={56} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="text-xs font-semibold text-[#C9A66B] uppercase tracking-wider">{article.category}</span>
                                <h4 className="text-sm font-medium text-[#2F2F2F] truncate group-hover:text-[#4E5B47] transition-colors">{article.title}</h4>
                              </div>
                              <span className="text-[#4E5B47] group-hover:text-[#3D4A38] text-xs font-medium">Read &rarr;</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Matching Products */}
                    {filteredResults.products.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-[#8A947B] uppercase tracking-wider mb-3">
                          Shop Finds ({filteredResults.products.length})
                        </p>
                        <div className="space-y-2">
                          {filteredResults.products.map((product) => (
                            <a
                              key={product.id}
                              href={product.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-4 p-3 rounded-2xl hover:bg-[#F2EDE4] transition-colors group"
                            >
                              <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#FAF8F4] flex-shrink-0 relative">
                                <Image src={product.imageUrl} alt={product.title} width={56} height={56} unoptimized className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="text-xs font-semibold text-[#8A947B] uppercase tracking-wider">{product.merchant}</span>
                                <h4 className="text-sm font-medium text-[#2F2F2F] truncate group-hover:text-[#4E5B47] transition-colors">{product.title}</h4>
                              </div>
                              <span className="text-xs font-medium px-3.5 py-1.5 bg-[#4E5B47] hover:bg-[#3D4A38] text-white rounded-full transition-colors">Buy</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ) : (
              /* Popular Suggestions (When query is empty) */
              <div className="mt-6 pt-4 border-t border-[#DDD6C8]">
                <p className="text-xs font-semibold text-[#8A947B] uppercase tracking-wider mb-3">Popular Rooms</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.href}
                      onClick={() => setSearchQuery(cat.name)}
                      className="px-3.5 py-1.5 rounded-full bg-[#F2EDE4] hover:bg-[#4E5B47] hover:text-white text-[#2F2F2F] text-xs font-medium transition-colors border border-[#DDD6C8]"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
