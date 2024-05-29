import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <header className='flex flex-row items-center justify-between w-full py-4 px-8 bg-white text-black'>
            <div className='flex flex-row items-center justify-center'>
                <div>
                    <h4>کیف پول (به زودی)</h4>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className='flex flex-row items-center justify-center gap-x-1'>
                <h3 className='text-lg'>سامانه آرش</h3>
                <h2 className='text-lg font-bold'>ست؛</h2>
                <Image
                    className='ms-1'
                    src={'/Logo.svg'}
                    alt='logo'
                    width={24}
                    height={24}
                />
            </div>
        </header>
    )
}

export default Header