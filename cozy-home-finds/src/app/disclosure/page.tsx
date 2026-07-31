export const metadata = {
  title: 'Affiliate Disclosure | Cozy Home Finds',
  description: 'Our affiliate disclosure and FTC compliance statement.',
};

export default function DisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6">
      <h1 className="text-4xl font-serif text-stone-900 mb-8">Affiliate Disclosure</h1>
      
      <div className="prose prose-stone text-stone-600 space-y-6">
        <p>
          At Cozy Home Finds, our primary goal is to provide you with the best inspiration, tips, and product recommendations to make your living space more beautiful and organized. To support the time and resources required to maintain this site, we participate in various affiliate marketing programs.
        </p>
        
        <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Amazon Associates Program</h2>
        <p>
          Cozy Home Finds is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and Amazon.co.uk. As an Amazon Associate, we earn from qualifying purchases. 
        </p>

        <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Other Affiliate Programs</h2>
        <p>
          We also partner with other retail platforms, including AliExpress. When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. This comes at absolutely no additional cost to you.
        </p>

        <h2 className="text-2xl font-semibold text-stone-900 mt-8 mb-4">Our Integrity Commitment</h2>
        <p>
          We only recommend products that we genuinely believe deliver value, style, and smart solutions for your home. Our editorial content is not influenced by affiliate partnerships, and we strictly focus our curation on high-quality home decor and organization tools.
        </p>
      </div>
    </div>
  );
}
