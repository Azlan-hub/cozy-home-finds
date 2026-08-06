"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/products';

export default function ProductCarousel({ products }: { products: Product[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Left Navigation Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#FFFFFF] text-[#2F2F2F] hover:bg-[#4E5B47] hover:text-white shadow-xl border border-[#DDD6C8] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#FFFFFF] text-[#2F2F2F] hover:bg-[#4E5B47] hover:text-white shadow-xl border border-[#DDD6C8] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto pb-6 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x hide-scrollbar scroll-smooth"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[280px] md:min-w-[320px] max-w-[320px] snap-start group/card flex flex-col bg-[#FFFFFF] rounded-3xl border border-[#DDD6C8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            <a href={product.link} target="_blank" rel="noopener noreferrer" className="block flex-1 flex flex-col">
              <div className="aspect-square w-full bg-[#FAF8F4] relative p-6 flex items-center justify-center overflow-hidden border-b border-[#DDD6C8]">
                <Image 
                  src={product.imageUrl} 
                  alt={product.title} 
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  unoptimized
                  className="object-contain p-6 group-hover/card:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FAF8F4]/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#4E5B47] uppercase tracking-wider border border-[#DDD6C8] shadow-sm">
                  {product.merchant}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between bg-[#FFFFFF]">
                <h3 className="font-semibold text-base text-[#2F2F2F] group-hover/card:text-[#4E5B47] transition-colors line-clamp-2 leading-snug">
                  {product.title}
                </h3>
                <div className="mt-4 pt-3 border-t border-[#F2EDE4] flex items-center justify-between text-xs font-semibold text-[#4E5B47]">
                  <span>{product.merchant === 'Amazon' ? 'Check Price on Amazon' : product.merchant === 'BRKOX' ? 'View on BRKOX' : 'View on AliExpress'}</span>
                  <span className="text-base">&rarr;</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
