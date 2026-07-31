import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Azlan | Cozy Home Finds',
  description: 'Learn how a cramped apartment turned into the Cozy Home Finds movement.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-[#2F2F2F] mb-6">You want your home to feel like a warm hug.</h1>
        <p className="text-xl text-[#C9A66B] max-w-2xl mx-auto font-serif italic">
          "I've been there. Trust me."
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#FAF8F4] border border-[#DDD6C8] shadow-xl">
          <Image
            src="/about-image.png"
            alt="Azlan styling a cozy living room"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-6 text-[#66645F] text-lg leading-relaxed">
          <p>
            Hi, I’m <strong className="text-[#2F2F2F]">Azlan</strong>. A few years ago, my wife and I moved into what can only be described as a "sterile white box" of an apartment. 
          </p>
          <p>
            We had landlord-grade beige carpets, harsh overhead lighting that gave us headaches, and zero square footage. We wanted that beautifully curated, expensive-looking home we saw on Pinterest, but we didn't have a massive renovation budget or permission to tear down walls.
          </p>
          <p>
            So, we started experimenting. We figured out how to use hidden LED strips to mimic architectural lighting. We discovered space-saving rolling carts that actually looked aesthetic. We turned our concrete balcony into a sunset oasis.
          </p>
          <p>
            I created <strong className="text-[#4E5B47]">Cozy Home Finds</strong> because I realized that a high-end home isn't about spending thousands of dollars—it is about smart styling, intentional organization, and finding those perfect hidden gems online.
          </p>
          <p>
            Every guide, hack, and Amazon find on this site is curated with that exact philosophy. Welcome to our home journey.
          </p>
        </div>
      </div>

      <div className="bg-[#F2EDE4] rounded-3xl p-8 md:p-12 text-center border border-[#DDD6C8]">
        <h2 className="text-2xl font-serif text-[#2F2F2F] mb-4">Let's build your sanctuary.</h2>
        <p className="text-[#66645F] max-w-xl mx-auto mb-8">
          Whether you are looking to revamp a tiny balcony, organize your living room, or just find the perfect warm lighting, start here:
        </p>
        <Link href="/shop" className="inline-block px-8 py-3.5 bg-[#4E5B47] hover:bg-[#3D4A38] text-white rounded-full font-medium transition-colors shadow-md">
          Shop Our Favorite Finds
        </Link>
      </div>
    </div>
  );
}
