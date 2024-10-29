import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const currentPath = req.nextUrl.pathname;

  // Define admin routes that need protection
 const isAdminRoute = currentPath.startsWith('/management-portal');


  // Define public routes (add all your public routes here)
  const isPublicRoute = [
    '/',
    '/about',
    '/contact',
    '/tours',
    '/blog',
    '/auth/management-portal/sign-up',
    '/auth/management-portal/sign-in',

  ].includes(currentPath);

  // Retrieve the token to check if the user is logged in
  const token = req.cookies.get("adminToken")?.value || "";

  // Handle admin routesa
  if (isAdminRoute) {
    // If no token is present, redirect to admin login
    if (!token) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
    // If token is present, allow access (you may want to add token verification here)
    return NextResponse.next();
  }

  // Handle public routes
  if (isPublicRoute) {
    // Allow access to public routes
    return NextResponse.next();
  }

  // For any other routes, you can decide to either allow access or redirect
  // Here, we're allowing access by default
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/about',
    '/contact',
    '/tours',
    '/blog',
    '/management-portal/:path*'
  ],
};