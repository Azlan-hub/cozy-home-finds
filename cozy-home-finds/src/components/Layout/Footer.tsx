import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="p-8 border-t border-[#DDD6C8] mt-16 text-center text-[#66645F] text-sm bg-[#FAF8F4]">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
        <Link href="/about" className="text-[#66645F] hover:text-[#4E5B47] transition-colors">About Us</Link>
        <Link href="/shop" className="text-[#66645F] hover:text-[#4E5B47] transition-colors">Shop Finds</Link>
        <Link href="/disclosure" className="text-[#66645F] hover:text-[#4E5B47] transition-colors">Affiliate Disclosure</Link>
        <Link href="/privacy" className="text-[#66645F] hover:text-[#4E5B47] transition-colors">Privacy Policy</Link>
        <Link href="/contact" className="text-[#66645F] hover:text-[#4E5B47] transition-colors">Contact</Link>
      </div>
      <p>&copy; {new Date().getFullYear()} Cozy Home By Azlan. All rights reserved.</p>
    </footer>
  );
}
