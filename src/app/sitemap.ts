import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com'; // Replace with your actual domain

  const staticRoutes = [
    '',
    '/about',
    '/gallery',
    '/events',
    '/members',
    '/book-us',
    '/contact',
    '/join',
    '/join/premium',
    '/propose-event',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return sitemapEntries;
}
