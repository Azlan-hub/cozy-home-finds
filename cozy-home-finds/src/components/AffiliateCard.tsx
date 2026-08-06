import Image from 'next/image';

interface AffiliateCardProps {
  title: string;
  link: string;
  imageUrl: string;
  description?: string;
  merchant?: 'Amazon' | 'AliExpress' | 'BRKOX';
  customButtonText?: string;
  buttonText?: string;
}

export default function AffiliateCard({ 
  title, 
  link, 
  imageUrl, 
  description,
  merchant,
  customButtonText,
  buttonText: deprecatedButtonText
}: AffiliateCardProps) {
  
  // Dynamically set the button text based on the merchant, or allow a custom override
  const buttonText = customButtonText || deprecatedButtonText || (
    merchant === 'Amazon' ? 'Check Price on Amazon' : 
    merchant === 'BRKOX' ? 'View on BRKOX' : 
    'View on AliExpress'
  );

  return (
    <div className="my-10 bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col sm:flex-row items-stretch group hover:shadow-md transition-shadow">
      
      {/* Product Image Area */}
      <div className="relative w-full sm:w-48 h-48 sm:h-auto bg-stone-50 shrink-0 border-b sm:border-b-0 sm:border-r border-stone-100 p-4 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image 
            src={imageUrl} 
            alt={`Buy ${title}`} 
            fill 
            sizes="(max-width: 640px) 100vw, 200px"
            className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      
      {/* Product Details Area */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-lg text-stone-900 leading-snug mb-3">{title}</h3>
          {description && <p className="text-sm text-stone-600 mb-6">{description}</p>}
        </div>
        
        <div className="mt-auto">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer nofollow" 
            className="block w-full sm:w-auto text-center px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            {buttonText}
          </a>
          <p className="text-[10px] text-stone-400 mt-3 text-center sm:text-left">
            We may earn a commission from purchases made through this link at no extra cost to you.
          </p>
        </div>
      </div>
    </div>
  );
}
