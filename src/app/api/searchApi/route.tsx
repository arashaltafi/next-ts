import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    try {
        const text = req.nextUrl.searchParams.get('text')

        return Response.json(
            { message: 'Hello ' + text },
            { status: 200 }
        )
    } catch (error) {
        return Response.json(
            { message: 'All fields are required' },
            { status: 500 }
        )
    }
}