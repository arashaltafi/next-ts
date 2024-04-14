import Link from 'next/link'
import React from 'react'

const Template = ({ children }: any) => {
    return (
        <div className='w-full min-h-screen'>
            <p className='animate-blink'>
                reRendered in each change route (template)
            </p>
            <Link href={'/loadingSample'}>backward</Link>
            {children}
        </div>
    )
}

export default Template