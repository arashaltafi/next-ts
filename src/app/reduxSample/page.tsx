"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import sampleSlice from '../../../redux/sampleSlice';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';

const ReduxSample = () => {
    const dispatch = useDispatch();
    const userSelector = useSelector((state: any) => state.sample);

    return (
        <Provider store={store}>
            <div className='flex flex-col items-center justify-center'>
                <h1>ReduxSample</h1>
                <h2>{userSelector}</h2>

                <p>
                    {
                        userSelector ? "user is login" : "user is not login"
                    }
                </p>

                <button
                    onClick={() => dispatch(sampleSlice.actions.set(true))}
                >
                    {
                        userSelector ? "logout" : "login"
                    }
                </button>
            </div>
        </Provider>
    )
}

export default ReduxSample