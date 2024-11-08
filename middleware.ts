// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// // Define public routes
// const publicRoutes = ["/", "/about", "/contact", "/tours", "/blog", "/sign-in", "/sign-up"];

// // Create a matcher for protected routes
// const isProtectedRoute = createRouteMatcher(["/management-portal(.*)"]);

// // Create a matcher for public routes
// const isPublicRoute = createRouteMatcher(publicRoutes);

// export default clerkMiddleware((auth, req) => {
//   if (isPublicRoute(req)) {
//     return NextResponse.next();
//   }

//   if (isProtectedRoute(req)) {
//     return auth.protect().then((authObject) => {
//       if (authObject.userId) {
//         return NextResponse.next();
//       }
//       // Redirect to sign-in if not authenticated
//       return NextResponse.redirect(new URL('/sign-in', req.url));
//     });
//   }

//   // For any other routes, allow access by default
//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };

export default async function m() {}