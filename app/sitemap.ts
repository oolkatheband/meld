import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://oolkatheband.github.io/meld/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://oolkatheband.github.io/meld/download',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://oolkatheband.github.io/meld/open-source',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://oolkatheband.github.io/meld/features',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://oolkatheband.github.io/meld/architecture',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
    // Add more pages here if you create them, e.g.:
    // {
    //   url: 'https://oolkatheband.github.io/meld/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
