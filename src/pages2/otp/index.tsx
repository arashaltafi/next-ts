import React, { useEffect, useState } from 'react'

const Otp = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if ('OTPCredential' in window) {
            const ac = new AbortController();
            const form = document.createElement('form');

            form.onsubmit = async (event) => {
                event.preventDefault();
                try {
                    const otpCredential: any = await navigator.credentials.get({
                        otp: { transport: ['sms'] },
                        signal: ac.signal
                    });

                    if (otpCredential) {
                        setOtp(otpCredential.code);
                    }
                } catch (err) {
                    setError('Failed to retrieve OTP. Please enter it manually.');
                }
            };

            form.submit();
            return () => ac.abort();
        } else {
            setError('Web OTP API is not supported in this browser.');
        }
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-8'>
            <h1 className='text-5xl'>Auto OTP Retrieval</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    autoComplete="one-time-code"
                    onChange={(e) => setOtp(e.target.value)}
                />
                <button type="submit">Verify OTP</button>
            </form>
        </div>
    )
}

export default Otp