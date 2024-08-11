import React from 'react'
import nookies from 'nookies'

const ServerSide = ({ cookies }: { cookies: string }) => {
    return (
        <div className='flex flex-col items-center justify-start gap-8 w-full'>
            <h1 className='text-5xl'>Nookies ServerSide Sample</h1>

            <p>
                {cookies}
            </p>
        </div>
    )
}

export default ServerSide

export async function getServerSideProps(context: any) {
    const cookieName = 'NookiesSampleServer'

    // Set
    nookies.set(context, cookieName, 'test-serverSide', {
        maxAge: 30 * 24 * 60 * 60, //1 month
        path: '/',
    })

    // Parse
    const cookies = nookies.get(context)

    // Destroy
    // nookies.destroy(context, cookieName)

    return {
        props: {
            cookies: cookies.NookiesSampleServer
        }
    }
}