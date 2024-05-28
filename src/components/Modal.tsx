import Image from 'next/image'
import React, { useState } from 'react'
import Otp from './Otp'

interface ModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = (props: ModalProps) => {
    const [otp, setOtp] = useState<string[]>(Array(5).fill(''));

    const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        if (target.id === 'modal' || target.id === 'close') {
            props.setShowModal(false)
        }
    }

    const handleSendOtp = () => {
        const finalOtp = otp.join('')
        alert(finalOtp)
    }

    return (
        <div
            id='modal'
            className='absolute inset-0 bg-black/40' onClick={(e) => closeModal(e)}
        >
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[296px] bg-white text-black flex flex-col items-center justify-center gap-y-6 p-8 rounded-[10px]`}>
                <div className='w-full flex flex-row items-center justify-between'>
                    <Image
                        id='close'
                        className='cursor-pointer'
                        src={'close-circle.svg'}
                        alt='close button'
                        width={24}
                        height={24}
                    />
                    <h2 className='text-xl font-bold'>رمز یک‌بار مصرف</h2>
                </div>

                <h5 dir='rtl' className='text-base text-start'>
                    کد 5 رقمی‌ای که به شماره ۰۹۱۲۵۵۵۶۸۹۲ ارسال شده را وارد کنید.
                </h5>

                <Otp handleSendOtp={handleSendOtp} otp={otp} setOtp={setOtp} />

                <div className='flex gap-2'>
                    <span className='text-[#1570EF] opacity-80'>ارسال مجدد کد</span>
                    <h4 dir='rtl'>90 ثانیه تا</h4>
                </div>

                <button
                    className='bg-[#1570EF] text-white w-full text-base py-2 rounded-lg'
                    onClick={handleSendOtp}
                >
                    تایید و ادامه
                </button>
            </div>
        </div>
    )
}

export default Modal