import { NextResponse } from "next/server";

/**
 * Runs on every request.
 * @param {Request} request - Intercepted request.
 * @returns NextResponse
 */
export function middleware(request) {
  //   console.log(request);
  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};
