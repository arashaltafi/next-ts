import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <header className='flex flex-row items-center justify-between w-full py-4 px-8'>
            <div className='flex flex-row items-center'>
                <Image
                    className=''
                    src={'/Logo.svg'}
                    alt='logo'
                    width={24}
                    height={24}
                />
                <h2 className='text-xl'>ست؛</h2>
                <h3 className='text-xl'>سامانه توثیق</h3>
            </div>
            <div>

            </div>
        </header>
    )
}

export default Header