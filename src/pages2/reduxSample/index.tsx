import React, { useEffect } from 'react'
import { set } from '@/lib/features/sampleSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

const ReduxSample = () => {
    const dispatch = useAppDispatch();
    const isLoginSelector = useAppSelector((state) => state.sampleSlice.isLogin);

    useEffect(() => {
        console.log(isLoginSelector)
    }, [isLoginSelector])

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1>ReduxSample</h1>
            <h2>{isLoginSelector}</h2>

            <p>
                {
                    isLoginSelector ? "user is login" : "user is not login"
                }
            </p>

            <button
                onClick={() => dispatch(set(!isLoginSelector))}
            >
                {
                    isLoginSelector ? "logout" : "login"
                }
            </button>
        </div>
    )
}

export default ReduxSample