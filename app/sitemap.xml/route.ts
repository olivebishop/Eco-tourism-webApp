// app/sitemap.xml/route.ts


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

export async function GET() {
  const baseUrl = "https://www.forestlinetours.co.ke"

  // Static pages with their respective priorities
  const staticPages = [
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
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms-and-condition`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/destinations/africa`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/destinations/middle-east`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ... rest of your static pages
  ]

  // Fetch dynamic content
  const [blogs, packages] = await Promise.all([
    fetchBlogs(),
    fetchPackages()
  ])

  // Generate blog routes
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: blog.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // Generate package routes
  const packageRoutes = packages.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    lastModified: pkg.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Combine all routes
  const routes = [...staticPages, ...blogRoutes, ...packageRoutes]

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map((route) => `
        <url>
          <loc>${route.url}</loc>
          <lastmod>${route.lastModified}</lastmod>
          <changefreq>${route.changeFrequency}</changefreq>
          <priority>${route.priority}</priority>
        </url>
      `).join('')}
    </urlset>`

  // Return the XML with appropriate headers
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Content-Length': xml.length.toString(),
    },
  })
}