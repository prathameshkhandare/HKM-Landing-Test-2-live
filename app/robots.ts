import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        // GPTBot - OpenAI's ChatGPT crawler
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        // Google-Extended - Gemini's crawler
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        // CCBot - Common Crawl (used by many LLMs)
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        // PerplexityBot
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        // Anthropic's Claude crawler
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        // Cohere's crawler
        userAgent: 'cohere-ai',
        allow: '/',
      },
    ],
    sitemap: 'https://hkmchennai.org/sitemap.xml',
  }
}
