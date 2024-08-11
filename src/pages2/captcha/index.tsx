import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react'

const Captcha = (
    { captchaBase641, captchaBase642, captchaBase643 }:
        { captchaBase641: string, captchaBase642: string, captchaBase643: string }
) => {
    const router = useRouter()

    const fetchCaptcha = async () => {
        router.reload()
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start gap-16">
            <h1 className='text-5xl'>Captcha Demo</h1>

            {
                captchaBase641 &&
                <img
                    src={`data:image/svg+xml;base64,${captchaBase641}`}
                    alt="captcha"
                />
            }

            {
                captchaBase642 &&
                <img
                    src={`data:image/svg+xml;base64,${captchaBase642}`}
                    alt="captcha"
                />
            }

            {
                captchaBase643 &&
                <img
                    src={`data:image/svg+xml;base64,${captchaBase643}`}
                    alt="captcha"
                />
            }

            <button
                onClick={fetchCaptcha}
                className='px-8 py-4 bg-red-500 text-white rounded-lg'
            >
                Refresh Captcha
            </button>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<any> = async () => {
    try {
        const [response1, response2, response3] = await Promise.all([
            fetch('http://localhost:5000/captcha1'),
            fetch('http://localhost:5000/captcha2'),
            fetch('http://localhost:3001/api/captcha'),
        ]);

        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        return {
            props: {
                captchaBase641: data1.data,
                captchaBase642: data2.data,
                captchaBase643: data3.data
            },
        };
    } catch (error: any) {
        console.log('error:', error);

        return {
            props: {},
        };
    }
}

export default Captcha