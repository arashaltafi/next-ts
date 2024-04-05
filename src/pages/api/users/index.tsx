import type { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.body;

    switch (req.method) {
        case 'GET':
            res.status(200).send({ message: 'METHOD GET' })
            break;
        case 'POST':
            if (!name || name == '') {
                res.status(200).send({ message: 'Please Enter name' })
            } else {
                res.status(200).send({ message: 'Your Importing', name: name })
            }
            break;
        case 'PUT':
            res.status(200).send({ message: 'METHOD PUT' })
            break;
        case 'PATCH':
            res.status(200).send({ message: 'METHOD PATCH' })
            break;
        case 'DELETE':
            res.status(200).send({ message: 'METHOD DELETE' })
            break;
        default:
            res.status(200).send({ message: 'default' })
            break;
    }
}