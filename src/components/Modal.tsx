import Image from 'next/image'
import React, { useRef, useState } from 'react'

interface ModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = (props: ModalProps) => {

    const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = e.target as HTMLDivElement
        if (target.id === 'modal' || target.id === 'close') {
            props.setShowModal(false)
        }
    }

    const inputsRef = useRef<HTMLInputElement[]>([]);
    const [otp, setOtp] = useState<string[]>(Array(5).fill(''));

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp]
            newOtp[index] = value
            setOtp(newOtp)
            if (index < inputsRef.current.length - 1) {
                inputsRef.current[index + 1].focus()
            }
        } else {
            e.target.value = ''
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowRight' && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1].focus()
        } else if (e.key === 'ArrowLeft' && index > 0) {
            inputsRef.current[index - 1].focus()
        } else if (e.key === 'Enter') {
            handleSendOtp()
        } else if ((e.key === 'Delete' || e.key === 'Backspace') && index > 0) {
            inputsRef.current[index].value = ''
            inputsRef.current[index - 1].focus()
            const newOtp = [...otp]
            newOtp[index] = ''
            newOtp[index - 1] = ''
            setOtp(newOtp)
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

                <div className='flex flex-row items-center justify-center gap-x-2'>
                    {Array(5).fill(0).map((_, index) => (
                        <input
                            key={index}
                            type='text'
                            autoFocus={index === 0}
                            pattern='[0-9]'
                            max={9}
                            min={0}
                            minLength={1}
                            maxLength={1}
                            className='size-10 text-center text-3xl border border-solid border-[#98A2B3] rounded-lg'
                            ref={(el) => {
                                if (el) {
                                    inputsRef.current[index] = el;
                                }
                            }}
                            onChange={(e) => handleChange(index, e)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={(e) => e.preventDefault()}
                            onCopy={(e) => e.preventDefault()}
                            onCut={(e) => e.preventDefault()}
                        />
                    ))}
                </div>

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