'use client'

import React, { useEffect, useState } from 'react';

interface UserType {
    name: string,
    age: number,
    email: string
}

const useClient = () => {
    const [data, setData] = useState<UserType | null>(null);

    const getData = async () => {
        const response = await fetch('https://arashaltafi.ir/test_200.php', {
            next: { revalidate: 10 }, //It's updated every 10 seconds when you call
            // cache: 'no-store'
        });

        const json: UserType = await response.json();
        console.log('useClient data:', json)

        setData(json);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='flex flex-col items-center justify-center gap-8 w-full px-16 py-8'>
            <h1 className='font-bold text-3xl'>Sample use client rendering in AppRouter</h1>
            {
                data &&
                <>
                    <h2 className='text-lg'><span className='text-green-500'>name:</span> {data.name}</h2>
                    <h2 className='text-lg'><span className='text-green-500'>email:</span> {data.email}</h2>
                    <h2 className='text-lg'><span className='text-green-500'>age:</span> {data.age}</h2>
                </>
            }
        </div>
    );
};

export default useClient;