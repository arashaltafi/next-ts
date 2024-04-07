import { cookies } from 'next/headers'
import React from 'react'

const layout = ({ children }: any) => {

    const a = cookies().get('Token')
    console.log('cookies name', a?.name)
    console.log('cookies value', a?.value)

    return (
        <>
            {
                a?.value ?
                    <>
                        <h1>User Has Cookie, Continue!</h1>
                        {children}
                    </> :
                    <h1>User Has Not Cookie, Go To Login!</h1>
            }
        </>
    )
}

export default layout