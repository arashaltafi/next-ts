import Link from 'next/link'
import React from 'react'

const ServerActionSample = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-16 p-8'>
            <h1>ServerActionSample</h1>


            <Link href='/serverAction/login' className='text-3xl text-center'>Login</Link>
            <Link href='/serverAction/register' className='text-3xl text-center'>Register</Link>
        </div>
    )
}

export default ServerActionSample