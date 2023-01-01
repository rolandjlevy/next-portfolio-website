import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/about-test')) {
    return NextResponse.rewrite(new URL('/about', req.url))
  }
  // if (req.nextUrl.pathname === req.nextUrl.pathname.toLowerCase()) {
  //   return NextResponse.next();
  // }
  // return NextResponse.redirect(
  //   `${req.nextUrl.origin}${req.nextUrl.pathname.toLowerCase()}`
  // );
}