import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const currentPath = req.nextUrl.pathname;

  //defining what routes are public
  const isPublic = currentPath === "/login" || currentPath === "/signup";

  //retrieving the token to see if the user's logged in
  const token = req.cookies.get("token")?.value || "";

  if (isPublic && token.length > 0) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (!isPublic && token?.length < 0) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/login", "/signup"], //we want our middleware to affect these routes
};
