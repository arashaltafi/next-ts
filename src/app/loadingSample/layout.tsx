import React, { Suspense } from 'react'
import Loading from './loading'
import Link from 'next/link'

const layout = ({ children }: any) => {
    return (
        <Suspense fallback={<Loading />}>
            <div className='w-full min-h-screen'>
                <p className='animate-blink text-right'>
                    rendered just once (layout)
                </p>
                <div className='animate-blink text-right'>
                    <Link href={'/loadingSample/test'}>back</Link>
                </div>
                {children}
            </div>
        </Suspense>
    )
}

export default layout