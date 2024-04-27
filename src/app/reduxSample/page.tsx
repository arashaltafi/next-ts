"use client"

import React, { useEffect } from 'react'
import { set } from '@/lib/features/sampleSlice'
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/store';

const ReduxSample = () => {
    const dispatch = useDispatch<AppDispatch>();
    const userSelector = useSelector((state: RootState) => state.sampleSlice);

    useEffect(() => {
        console.log(userSelector.isLogin)
    }, [userSelector])

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1>ReduxSample</h1>
            <h2>{userSelector.isLogin}</h2>

            <p>
                {
                    userSelector.isLogin ? "user is login" : "user is not login"
                }
            </p>

            <button
                onClick={() => dispatch(set(!userSelector.isLogin))}
            >
                {
                    userSelector.isLogin ? "logout" : "login"
                }
            </button>
        </div>
    )
}

export default ReduxSample