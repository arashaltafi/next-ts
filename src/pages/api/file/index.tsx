import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function (req: NextApiRequest, res: NextApiResponse) {

    const pathName = path.join(process.cwd(), 'src/pages/api/file', 'user.json')

    const data = fs.readFileSync(pathName);
    const users = JSON.parse(data.toString()).users

    if (req.method == 'GET') {
        res.status(200).send({ users: users })
    } else if (req.method == 'POST') {
        res.status(201).send({ message: 'POST' })
    } else {
        res.status(404).send({ message: 'Please Send Request With Method GET or POST' })
    }
}