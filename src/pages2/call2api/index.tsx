import { GetServerSideProps } from 'next'
import React from 'react'

interface PropsType {
    data1: string;
    data2: string;
};

const Call2Api = ({ data1, data2 }: PropsType) => {
    return (
        <div className='flex flex-col gap-16 items-center justify-start w-full min-h-screen'>
            <h1 className='text-5xl'>Call2Api</h1>

            <h2 className='mt-8 text-3xl'>Data from API 1</h2>
            <p>{JSON.stringify(data1, null, 2)}</p>

            <span className='w-full my-8 h-px bg-white rounded-full' />

            <h2 className='text-3xl'>Data from API 2</h2>
            <p>{JSON.stringify(data2, null, 2)}</p>
        </div>
    )
}

export default Call2Api

export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
    const api1Url = 'https://jsonplaceholder.typicode.com/users/1';
    const api2Url = 'https://jsonplaceholder.typicode.com/users/2';

    const [response1, response2] = await Promise.all([
        fetch(api1Url),
        fetch(api2Url),
    ]);

    if (!response1.ok || !response2.ok) {
        return {
            notFound: true,
        };
    }

    const data1: string = await response1.json();
    const data2: string = await response2.json();

    return {
        props: {
            data1: data1,
            data2: data2,
        },
    };
}