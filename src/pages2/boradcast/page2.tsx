import { useEffect, useState } from 'react';
import Link from 'next/link';

const Page2 = () => {
    const [message, setMessage] = useState<string>('');
    const [receivedMessage, setReceivedMessage] = useState<string>('');

    useEffect(() => {
        const channel = new BroadcastChannel('my-channel');

        channel.onmessage = (event) => {
            setReceivedMessage(event.data);
        };

        return () => {
            channel.close();
        };
    }, []);

    const sendMessage = () => {
        const channel = new BroadcastChannel('my-channel');
        channel.postMessage(message);
        setMessage('');
    };

    return (
        <div className='flex flex-col w-full min-h-screen gap-8 items-center justify-start'>
            <h1 className='text-5xl'>Page 1</h1>
            <input
                className='text-black px-8 py-4 rounded-xl text-center text-xl'
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                onClick={sendMessage}
                className='px-4 py-2 rounded-xl text-white bg-red-500 hover:bg-red-600 transition-all duration-150'
            >
                Send Message
            </button>
            <p>Received Message: {receivedMessage}</p>
            <Link href="/boradcast/page1">Go to Page 1</Link>
        </div>
    );
};

export default Page2;
