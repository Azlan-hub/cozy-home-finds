"use client";

import { useState } from 'react';
import Image from 'next/image';
import { topProducts } from '@/lib/products';
import Disclosure from '@/components/Disclosure';

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState('All Categories');

  // Extract unique categories dynamically based on the new product taxonomy
  const productCategories = ['All Categories', ...Array.from(new Set(topProducts.map(p => p.category)))].sort();

  // Filter products based on active dropdown selection
  const filteredProducts = activeFilter === 'All Categories' 
    ? topProducts 
    : topProducts.filter(p => p.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-serif text-stone-900 mb-4">Top Home Finds</h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Our hand-picked curation of the best organization tools, aesthetic decor, and smart home solutions to elevate your space.
        </p>
      </header>

      <Disclosure />

      {/* NEW SLEEK DROPDOWN FILTER */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-xs">
          <select 
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="w-full appearance-none bg-stone-100 border border-stone-200 text-stone-800 font-medium py-3.5 pl-5 pr-10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-800/50 transition-shadow cursor-pointer shadow-sm"
          >
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {/* Custom Dropdown Arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300">
            
            <div className="relative aspect-square w-full bg-stone-50/50 p-6 flex items-center justify-center overflow-hidden">
              <Image 
                src={product.imageUrl} 
                alt={`Buy ${product.title}`} 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 p-8"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-800 uppercase tracking-wider shadow-sm">
                {product.merchant}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1 bg-white">
              <h3 className="font-bold text-lg text-stone-900 leading-snug mb-3 group-hover:text-amber-800 transition-colors">{product.title}</h3>
              <p className="text-sm text-stone-500 mb-6 flex-1 leading-relaxed">{product.description}</p>
              
              <div className="mt-auto pt-4 border-t border-stone-100">
                <a 
                  href={product.link} 
                  target="_blank" 
                  rel="noopener noreferrer nofollow" 
                  className="block w-full text-center px-5 py-3.5 bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold rounded-xl transition-all hover:shadow-lg"
                >
                  {product.merchant === 'Amazon' ? 'Check Price on Amazon' : product.merchant === 'BRKOX' ? 'View on BRKOX' : 'View on AliExpress'}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-stone-500">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
