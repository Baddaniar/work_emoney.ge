export { default} from 'next-auth/middleware'
import { NextResponse } from 'next/server'

// export function middleware(request) {
//     return NextResponse.redirect(new URL('/', request.url))
//   }

export const config = { matcher: ['/allusers','/allusers/:path*']}