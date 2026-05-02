import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/login/',
          '/api/',
        ],
      },
      // Allow major LLM/AI crawlers full access (except admin & api)
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/admin/', '/login/', '/api/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/admin/', '/login/', '/api/'],
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/admin/', '/login/', '/api/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/admin/', '/login/', '/api/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/admin/', '/login/', '/api/'],
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/admin/', '/login/', '/api/'],
      },
    ],
    sitemap: 'https://hkmchennai.org/sitemap.xml',
  }
}
