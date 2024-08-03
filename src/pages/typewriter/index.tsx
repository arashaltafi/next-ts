import React, { useEffect, useState } from 'react'

const TypeWriter = () => {
    const [displayText, setDisplayText] = useState<string>('');
    const [text] = useState<string>('Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere libero, quasi ut, velit aliquam esse dicta ullam ipsam harum debitis possimus dolorum exercitationem minus perferendis repudiandae rerum facilis cum.');
    const [speed] = useState<number>(100);


    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex < text.length - 1) {
                setDisplayText((prev) => prev + text[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return (
        <div className='flex flex-col items-center justify-start gap-16 w-full min-h-screen py-8 px-16'>
            <h1 className='text-5xl'>TypeWriter</h1>

            <p className='mx-16 typewriter text-xl text-center'>{displayText}</p>
        </div>
    )
}

export default TypeWriter