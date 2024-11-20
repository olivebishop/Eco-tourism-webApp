/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ['images.unsplash.com'],
  },
  // Enable experimental features required for sitemap generation
  experimental: {
      appDir: true,
      // Enable sitemap generation
      generateSitemap: true,
  },
  // Ensure XML files are served with correct headers
  async headers() {
      return [
          {
              source: '/sitemap.xml',
              headers: [
                  {
                      key: 'Content-Type',
                      value: 'application/xml',
                  },
                  {
                      key: 'Cache-Control',
                      value: 'public, s-maxage=86400, stale-while-revalidate',
                  },
              ],
          },
      ];
  },
};

export default nextConfig;