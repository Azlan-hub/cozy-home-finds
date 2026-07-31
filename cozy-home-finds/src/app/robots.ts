import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://cozyhomefinds.com'; // Replace with your final custom domain when ready

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Protect internal API routes if added later
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
