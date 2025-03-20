"use client"

import React, { useEffect } from 'react'

const SentrySample = ({ error }: { error: Error & { digest?: string } }) => {
    // useEffect(() => {
    //     // Log the error to Sentry
    //     Sentry.captureException(error);
    // }, [error]);

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-16'>
            <h1>SentrySample</h1>
            <h2>Something went wrong!</h2>
        </div>
    )
}

export default SentrySample