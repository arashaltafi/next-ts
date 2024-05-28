import html2canvas from 'html2canvas';
import Image from 'next/image';
import React, { useRef } from 'react'

const ScreenShot = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleSaveImage = () => {
        if (divRef.current) {
            html2canvas(divRef.current, {
                allowTaint: true,
                useCORS: true,
                backgroundColor: 'transparent',
            }).then(canvas => {
                const base64 = canvas.toDataURL('image/png');
                console.log('base64:', base64);
                const link = document.createElement('a');
                link.href = base64;
                link.download = 'design.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
    };

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <h1 className='text-5xl'>ScreenShot Sample</h1>

            <div ref={divRef} className='flex flex-col items-center justify-center gap-y-10 mt-16 bg-slate-700 border-2 border-dashed border-white rounded-xl px-8 py-4'>
                <h2 className='text-3xl'>Arash Altafi</h2>
                <h4 className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptas error blanditiis corrupti suscipit voluptate ad nulla omnis laboriosam quidem! Aperiam molestiae provident dicta eveniet aspernatur fugit dolorem beatae reiciendis?</h4>
                <Image
                    className='w-full h-auto'
                    src={'/bg.jpg'}
                    alt='bg'
                    width={500}
                    height={500}
                    loading='lazy'
                    quality={50}
                />
            </div>

            <button
                className='mt-12 px-8 py-4 bg-red-500 hover:bg-red-600 transition-all text-white rounded-lg'
                onClick={handleSaveImage}
            >
                Take Screen Shot
            </button>
        </div>
    )
}

export default ScreenShot