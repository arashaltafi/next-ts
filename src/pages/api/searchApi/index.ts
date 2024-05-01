import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const { text } = req.query

        res.status(200).send({ message: 'Hello ' + text })
    } else {
        res.status(200).send({ message: 'Please Call With GET Method!' })
    }
}

export default handler