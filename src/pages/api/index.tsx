import type { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'GET') {
        res.status(200).send({ message: 'Hello from Next.js!' })
    } else {
        res.status(200).send({ message: 'Please Call With GET Method!' })
    }
}