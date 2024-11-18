import { MetadataRoute } from 'next'

// Define interfaces for our data
interface Blog {
  id: string
  slug: string
  updatedAt: string
}

interface Package {
  id: string
  slug: string
  updatedAt: string
}

async function fetchBlogs() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/blogs`)
    const blogs: Blog[] = await res.json()
    return blogs
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error)
    return []
  }
}

async function fetchPackages() {
  try {
    const res = await fetch(`${process.env.API_URL}/api/packages`)
    const packages: Package[] = await res.json()
    return packages
  } catch (error) {
    console.error('Error fetching packages for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.forestlinetours.co.ke"

  // Static pages with their respective priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Main navigation pages
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Destination pages
    {
      url: `${baseUrl}/destinations/africa`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/destinations/middle-east`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // List pages
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Additional pages
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-and-condition`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    
  ]

  // Fetch dynamic content
  const [blogs, packages] = await Promise.all([
    fetchBlogs(),
    fetchPackages()
  ])

  // Generate blog routes
  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: blog.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // Generate package routes
  const packageRoutes: MetadataRoute.Sitemap = packages.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: pkg.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Combine all routes
  return [...staticPages, ...blogRoutes, ...packageRoutes]
}