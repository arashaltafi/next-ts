"use client";

import React from 'react'
// import { signIn, signOut, useSession } from "next-auth/react";

const GithubAuth = () => {
    // const { data: session, status } = useSession();

    // if (session) {
    //     return (
    //         <>
    //             <h1>GithubAuth</h1>
    //             <h2>{session?.user?.name}</h2>
    //             <br />
    //             ClientComponent {status}{' '}
    //             {status === 'authenticated' && session.user?.name}
    //             <br />
    //             {/* <button onClick={() => signOut()}>Sign out</button> */}
    //         </>
    //     )
    // } else {
        return (
            <>
                <h1>GithubAuth</h1>
                <h2>Not signed in</h2>
                <br />
                {/* ClientComponent {status}{' '} */}
                {/* <button onClick={() => signIn()}>Sign in</button> */}
            </>
        )
    // }
}

export default GithubAuth