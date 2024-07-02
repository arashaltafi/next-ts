import Image from 'next/image';
import React, { ReactNode, useState } from 'react';

interface PropsType {
    children: ReactNode;
    content: ReactNode;
}

const TooltipComponent = (props: PropsType) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {props.children}
            <div className={`absolute w-60 z-10 px-3 py-2 rounded-lg bg-sky-500 text-center ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 bottom-full left-1/2 transform -translate-x-1/2 mb-3`}>
                <p className='text-center text-xs font-medium leading-6 text-white'>
                    {props.content}
                </p>
                <Image
                    className='absolute top-full left-1/2 transform -translate-x-1/2 -mt-1'
                    width={18}
                    height={18}
                    src={'/indicator.svg'}
                    alt='indicator'
                />
            </div>
        </div>
    );
}

export default TooltipComponent