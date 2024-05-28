import React, { useRef } from 'react'

interface OtpProps {
    handleSendOtp: () => void
    otp: string[],
    setOtp: React.Dispatch<React.SetStateAction<string[]>>
}

const Otp = (props: OtpProps) => {
    const inputsRef = useRef<HTMLInputElement[]>([]);

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        if (/^[0-9]$/.test(value)) {
            const newOtp = [...props.otp]
            newOtp[index] = value
            props.setOtp(newOtp)
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
            props.handleSendOtp()
        } else if ((e.key === 'Delete' || e.key === 'Backspace') && index > 0) {
            inputsRef.current[index].value = ''
            inputsRef.current[index - 1].focus()
            const newOtp = [...props.otp]
            newOtp[index] = ''
            newOtp[index - 1] = ''
            props.setOtp(newOtp)
        }
    }

    return (
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
    )
}

export default Otp