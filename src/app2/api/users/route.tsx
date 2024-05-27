import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
    const name = req.nextUrl.searchParams.get('name');
    if (!name || name == '') {
        return Response.json({ message: 'Please Enter name in Query Params' }, { status: 400 })
    } else {
        return Response.json({ message: 'Hello User ' + name }, { status: 200 })
    }
}

export async function POST(req: NextRequest) {
    try {
        const { name } = await req.json()

        if (!name || name == '') {
            return Response.json({ message: 'Please Enter name in Body Raw' }, { status: 400 })
        } else {
            return Response.json({ message: 'Hello User ' + name }, { status: 200 })
        } 
    } catch (error: any) {
        return Response.json({ message: error.message }, { status: 500 }) 
    }
}