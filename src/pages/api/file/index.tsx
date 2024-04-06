import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function (req: NextApiRequest, res: NextApiResponse) {
    const pathName = path.join(process.cwd(), 'src/pages/api/file', 'user.json')

    if (req.method == 'GET') {
        const data = fs.readFileSync(pathName);
        const users = JSON.parse(data.toString()).users
        res.status(200).send({ users: users })
    } else if (req.method == 'POST') {
        const { id, name, family, age } = req.body;
        if (!id || !name || !family || !age) {
            return res.status(400).send({ message: 'Please Enter All Fields' })
        } else {
            const users = fs.readFileSync(pathName).toString();
            const data = fs.writeFileSync(
                pathName,
                JSON.stringify(
                    {
                        users: [...JSON.parse(users).users,
                        { id, name, family, age }]
                    }
                )
            )
    
            console.log('data:', data)
    
            res.status(201).send({ message: data })
        }
    } else {
        res.status(404).send({ message: 'Please Send Request With Method GET or POST' })
    }
}