import { MetadataRoute } from 'next'
import { categories } from '@/lib/data'
import factoriesData from '@/lib/factories.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://matrixglobalplatform.com'

  // 1. Static Pages
  const staticPages = [
    '',
    '/who-we-are',
    '/what-we-do',
    '/brands',
    '/product',
    '/category',
    '/factory',
    '/contact',
    '/sustainability',
    '/code-of-conduct',
    '/careers',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. Dynamic Product Categories
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/product/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // 3. Dynamic Factories
  const factorySlugs = Object.keys(factoriesData)
  const factoryPages = factorySlugs.map((slug) => ({
    url: `${baseUrl}/factory/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...categoryPages, ...factoryPages]
}
