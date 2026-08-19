"use client";

import { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;
  className?: string;
}

export default function AdSense({ adSlot, className = "w-full my-6" }: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense injection error:', error);
    }
  }, []);

  // Return empty div if Publisher ID is missing (prevents errors before approval)
  if (!process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID) {
    return <div className={className} />;
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
