import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface PropsType {
    text: string,
    color: 'success' | 'error',
    timeWait?: number,
    pauseOnHover?: boolean
    onClose: () => void
}

const ToastComponent = (props: PropsType) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isHover, setIsHover] = useState(false)

    useEffect(() => {
        setIsVisible(true)

        if (!isHover) {
            const timer = setTimeout(() => {
                handleClose()
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [props.onClose, isHover])

    const handleClose = () => {
        setIsVisible(false)
        setTimeout(props.onClose, 1000)
    }

    return (
        <div
            dir='rtl'
            className={`
                absolute top-8 right-12 flex items-start gap-5 ${props.color == 'success' ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'} border border-solid rounded-2xl py-4 px-5 z-40
                transition-all duration-1000 ${isVisible ? '' : 'translate-x-[999px]'}
            `}
            onMouseEnter={() => props.pauseOnHover && setIsHover(true)}
            onMouseLeave={() => props.pauseOnHover && setIsHover(false)}
        >
            <h4 className={`w-[280px] ${props.color == 'success' ? 'text-green-600' : 'text-red-600'} text-base leading-8 font-medium`}>
                {props.text}
            </h4>
            <Image
                onClick={handleClose}
                className='cursor-pointer'
                src={props.color === 'success' ? '/close-success.svg' : '/close-error.svg'}
                alt='close'
                width={24}
                height={24}
            />
        </div>
    )

}

export default ToastComponent