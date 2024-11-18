import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicRoutes = ["/", "/about", "/contact", "/tours", "/blog", "/sign-in", "/sign-up"];

const isProtectedRoute = createRouteMatcher(["/management-portal(.*)"]);
const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware((auth, req) => {
  const response = NextResponse.next();

  // Add indexing headers for public routes
  if (isPublicRoute(req)) {
    response.headers.set('X-Robots-Tag', 'index, follow');
  }

  if (isPublicRoute(req)) {
    return response;
  }

  if (isProtectedRoute(req)) {
    return auth.protect().then((authObject) => {
      if (authObject.userId) {
        return response;
      }
      return NextResponse.redirect(new URL('/sign-in', req.url));
    });
  }

  return response;
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};