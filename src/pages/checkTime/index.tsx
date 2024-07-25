import { GetServerSideProps } from 'next';
import React, { useState } from 'react'

const CheckTime = ({ hour }: { hour: number }) => {
    const [isOk] = useState<boolean>(hour > 7 && hour < 16);

    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-start py-16 px-24'>
            <p className='text-xl'>hour: {hour}</p>
            <p className='text-xl'>isOk: {`${isOk}`}</p>

            <h1 className='text-5xl'>CheckTime</h1>
        </div>
    )
}

export default CheckTime

export const getServerSideProps: GetServerSideProps = async (context) => {
    const date = new Date();
    const hour = date.getHours();

    return {
        props: {
            hour,
        },
    };
}