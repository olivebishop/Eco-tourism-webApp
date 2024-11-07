import { NextRequest, NextResponse } from "next/server";
import { clerkMiddleware } from '@clerk/nextjs/server'


export default clerkMiddleware()

// Define route types
const routes = {
  auth: ['/sign-in', '/sign-up'],
  public: ['/', '/about', '/contact', '/tours', '/blog'],
  admin: ['/management-portal'],
};

export function middleware(req: NextRequest) {
  const currentPath = req.nextUrl.pathname;

  // Check if it's an auth route
  const isAuthRoute = routes.auth.includes(currentPath);
  
  // Check if it's an admin route
  const isAdminRoute = routes.admin.some(route => currentPath.startsWith(route));
  
  // Check if it's a public route
  const isPublicRoute = routes.public.includes(currentPath);

  // Get the token
  const token = req.cookies.get("adminToken")?.value;

  // Handle admin routes
  if (isAdminRoute) {
    if (!token) {
      return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
    }
    return NextResponse.next();
  }

  // Handle auth routes - always allow access
  if (isAuthRoute) {
    // If user is already logged in, redirect to home
    if (token) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
    return NextResponse.next();
  }

  // Handle public routes
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // For any other routes, allow access
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    
  ],
};