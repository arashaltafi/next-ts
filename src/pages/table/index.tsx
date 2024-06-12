import React, { useEffect, useState } from 'react'

const Table = () => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setRows(data)
            })
    }, [])

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start'>
            <h1 className='text-5xl opacity-0'>Table</h1>

            <table className='w-full'>
                <thead className='w-full border-b border-solid border-white'>
                    <tr>
                        <th className='py-4 font-bold text-2xl'>Name</th>
                        <th className='py-4 font-bold text-2xl'>Username</th>
                        <th className='py-4 font-bold text-2xl'>Email</th>
                    </tr>
                </thead>
                <tbody className='w-full text-center'>
                    {
                        rows.map((row: any) => (
                            <tr key={row.id}>
                                <td className='py-2 text-md'>{row.name}</td>
                                <td className='py-2 text-md'>{row.username}</td>
                                <td className='py-2 text-md'>{row.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table