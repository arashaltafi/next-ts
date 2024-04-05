import type { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {
    const { name } = req.body;
    const { id } = req.query;

    switch (req.method) {
        case 'GET':
            if (!id || id == '') {
                res.status(200).send({ message: 'Please Enter id' })
            } else {
                res.status(200).send({ message: 'Your Query', id: id })
            }
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