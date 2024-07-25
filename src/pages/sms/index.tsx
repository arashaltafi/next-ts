import { useState } from 'react';

const SendSms = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSendSms = () => {
        // Construct the SMS URL scheme
        const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;

        // Navigate to the SMS application with the constructed URL
        window.location.href = smsUrl;
    };

    return (
        <div className='flex flex-col gap-8 items-center justify-start w-full min-h-screen'>
            <h1 className='text-5xl'>Send SMS</h1>

            <div className='flex items-center justify-center gap-8 mt-32'>
                <label className='text-2xl'>
                    Phone Number:
                </label>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter phone number"
                    className='px-8 py-4 rounded-xl text-xl text-black'
                />
            </div>
            <div className='flex  items-center justify-center gap-8'>
                <label className='text-2xl'>
                    Message:
                </label>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter message"
                    className='px-8 py-4 rounded-xl text-xl text-black'
                />
            </div>
            <button
                onClick={handleSendSms}
                className='px-8 py-4 rounded-xl text-xl text-white bg-red-500 mt-8'
            >
                Send SMS
            </button>
        </div>
    );
};

export default SendSms;