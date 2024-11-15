import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/management-portal/dashboard/',
          '/management-portal/create-blogs/',
          '/management-portal/create-packages/',
          '/management-portal/manage-blogs/',
          '/management-portal/manage-packages/',
          '/management-portal/user-profile/',
          '/management-portal/view-bookings/',
          '/management-portal/view-packages/',
          '/management-portal/settings/',
          '/sign-in/',
          '/sign-up/',

        ],
      },
    ],
    sitemap: 'https://www.forestlinetours.co.ke/sitemap.xml',
  }
}