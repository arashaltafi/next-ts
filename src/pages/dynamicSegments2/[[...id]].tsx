import { useRouter } from 'next/router'
import React from 'react'

const DynamicSegments2 = () => {
    const router = useRouter()

    return (
        <div className='flex flex-col gap-8'>
            <h1>DynamicSegments2</h1>

            <p>
                react query id[0]: {router.query.id ? router.query.id[0] : 'No id [0]'}
            </p>
            <p>
                react query id[1]: {router.query.id ? router.query.id[1] : 'No id [1]'}
            </p>
            <p>
                react query id[2]: {router.query.id ? router.query.id[2] : 'No id [2]'}
            </p>
        </div>    )
}

export default DynamicSegments2