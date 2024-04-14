import React, { Suspense } from 'react'
import Loading from './loading'

const layout = ({ children }: any) => {
    return (
        <Suspense fallback={<Loading />}>
            <div className='w-full min-h-screen'>
                {children}
            </div>
        </Suspense>
    )
}

export default layout