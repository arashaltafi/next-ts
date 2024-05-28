import React, { useEffect, useState } from 'react'

const NetworkListener = () => {

    const [networkStatus, setNetworkStatus] = useState(true);

    //for first time
    useEffect(() => {
        try {
            if (navigator.onLine) {
                onlineHandler()
            } else {
                offlineHandler()
            }
        } catch (e) {
            offlineHandler()
        }
    }, [])

    //when changing network status
    useEffect(() => {
        window.addEventListener("offline", offlineHandler, false)
        window.addEventListener("online", onlineHandler, false)
        return () => {
            window.removeEventListener("online", onlineHandler, false)
            window.removeEventListener("offline", offlineHandler, false)
        }
    }, [])

    const offlineHandler = () => {
        setNetworkStatus(false)
    }

    const onlineHandler = () => {
        setNetworkStatus(true)
    }

    return (
        <div className='flex flex-col items-center justify-center w-full gap-8'>
            <h1 className='text-5xl'>NetworkListener</h1>

            {networkStatus ? ( //online
                <h2 className='text-green-500'>You are online</h2>
            ) : ( //offline
                <h2 className='text-red-500'>You are offline</h2>
            )}
        </div>
    )
}

export default NetworkListener