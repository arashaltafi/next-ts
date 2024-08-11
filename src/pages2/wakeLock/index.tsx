import React, { useEffect } from 'react'

const WakeLockSample = () => {

    useEffect(() => {
        navigator.wakeLock.request('screen').then(() => {
            alert('Screen Wake Lock is active')
        }).catch((err) => {
            alert(err)
        })
    }, [])

    return (
        <div>WakeLockSample</div>
    )
}

export default WakeLockSample