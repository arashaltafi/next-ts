'use client'

import { generateRandomNumber } from '@/utils/Helper';
import React, { useEffect, useRef, useState } from 'react';

const CaptchaSample = () => {
    const [captcha, setCaptcha] = useState<number>(generateRandomNumber());
    const [inputValue, setInputValue] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const regenerateCaptcha = () => {
        const newCaptcha = generateRandomNumber();
        setCaptcha(newCaptcha);
        setMessage('');
        setInputValue('');
        drawCaptcha(newCaptcha);
    }

    useEffect(() => {
        regenerateCaptcha()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = () => {
        if (parseInt(inputValue) === captcha) {
            setMessage('Captcha is correct!');
        } else {
            setMessage('Captcha is incorrect. Please try again.');
        }
    }

    const drawCaptcha = (captchaNumber: number) => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = 'bold 32px vazir-light'; // Set Font
                ctx.fillStyle = 'white'; // Set text color
                ctx.textAlign = 'center'; // Align text in the center horizontally
                ctx.fillText(captchaNumber.toString(), canvas.width / 2, 25); // Position text at the center horizontally
                // ctx.strokeText(captchaNumber.toString(), canvas.width / 2, 25); // Position text at the center horizontally

                // Add random dots
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'; // Set a darker color for circles
                for (let i = 0; i < 100; i++) {
                    const x = Math.random() * canvas.width;
                    const y = Math.random() * canvas.height;
                    ctx.beginPath();
                    ctx.arc(x, y, 1, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Add random lines
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)'; // Set a darker color for lines
                for (let i = 0; i < 5; i++) {
                    ctx.beginPath();
                    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
                    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
                    ctx.stroke();
                }

                // Add random small circles
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Set a darker color for circles
                for (let i = 0; i < 50; i++) {
                    const x = Math.random() * canvas.width;
                    const y = Math.random() * canvas.height;
                    const radius = Math.random() * 4; // Random radius between 0 and 3
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.fill();
                }

                const width = 20;
                const height = 20;
                const maxWH = Math.max(width, height);

                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Set a darker color for circles
                for (let i = 0; i < 10; i++) {
                    const size = Math.random() * maxWH;
                    const x = Math.random() * width - size / 2;
                    const y = Math.random() * height - size / 2;
                    ctx.fillRect(x, y, size, size);
                }
            }
        }
    }

    return (
        <div className='flex flex-col items-center justify-center gap-8 select-none'>
            <button
                className='text-white bg-green-500 hover:bg-green-600 transition-all text-2xl py-2 px-4 rounded'
                onClick={regenerateCaptcha}
            >
                Generate Captcha
            </button>

            <canvas
                ref={canvasRef}
                className='mt-12 bg-red-500 text-2xl py-2 px-4 rounded'
                width={120}
                height={40}
            />
            <br />
            <label className='text-lg'>Enter the number:</label>
            <input
                className='rounded-lg shadow-sm shadow-white px-4 py-6 text-center text-2xl text-black'
                type="number"
                value={inputValue}
                onChange={handleChange}
            />
            <button
                className='text-white bg-blue-500 hover:bg-blue-700 transition-all text-2xl py-2 px-4 rounded'
                onClick={handleSubmit}
            >
                Submit
            </button>
            <p className='text-lg'>{message}</p>
        </div>
    )
}

export default CaptchaSample