import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!request.cookies.get('Token1')) {
            return NextResponse.redirect(new URL('/', request.url))
        } else {
            return NextResponse.next()
        }
    }
}

export const config = {
    matcher: [
        '/dashboard'
    ]
}