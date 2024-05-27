import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router';
import React from 'react'

const index = () => {

    const path = usePathname();
    const router = useRouter();

    console.log('path:', path)
    console.log('router:', router)

    return (
        <div>
            <h1>usePathname: {path}</h1>
            <h1>useRouter: {router.pathname}</h1>
        </div>
    )
}

export default index