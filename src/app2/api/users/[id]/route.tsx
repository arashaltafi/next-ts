import { NextRequest } from 'next/server'

interface ParamsType {
    params: { id: string }
}

export async function GET(req: NextRequest, { params }: ParamsType) {
    const id = parseInt(params.id)

    if (id && id > 0 && !isNaN(id)) {
        return Response.json({ message: 'Your Path Params Id ' + id }, { status: 200 })
    } else {
        return Response.json({ message: 'Please Enter Valid Id' }, { status: 400 })
    }
}