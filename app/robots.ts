import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const domain = 'https://www.forestlinetours.co.ke'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // Management portal routes
          '/management-portal',
          '/management-portal/*',
          
          // Authentication routes
          '/sign-in',
          '/sign-up',
          
          
          // API routes
          '/api/*',
          
          // Private or sensitive routes
          '/user/*',
          '/profile',
          
          // Temporary or development routes
          '/draft/*',
          '/preview/*',
          
          // Error pages
          '/404',
          '/500',
          
          // Development specific paths
          '/*.json',
          '/*.xml',
          '/*.php',
        ],
      },
    ],
    sitemap: `${domain}/sitemap.xml`,
    host: domain,
  }
}