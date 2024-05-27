import type { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { id }: any = req.query || 0;
    const queryId = parseInt(id);

    if (queryId && queryId > 0 && !isNaN(queryId)) {
        return res.status(200).send({ message: 'Your Path Params Id ' + id })
    } else {
        return res.status(400).send({ message: 'Please Enter Valid Id' })
    }
}