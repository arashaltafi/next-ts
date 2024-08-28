"use client"

import React, { useReducer } from 'react';
import { counterReducer, initialState } from './counterReducer';

const UseReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    const increment = () => dispatch({ type: 'increment' });
    const decrement = () => dispatch({ type: 'decrement' });
    const reset = () => dispatch({ type: 'reset' });

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start gap-16">
            <h1 className="text-5xl">UseReducer Sample</h1>
            <h2 className="text-2xl mt-16">Count: {state.count}</h2>
            <div className="flex gap-4">
                <button onClick={increment} className="px-4 py-2 bg-blue-500 text-white rounded">
                    Increment
                </button>
                <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">
                    Decrement
                </button>
                <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded">
                    Reset
                </button>
            </div>
        </div>
    )
}

export default UseReducer