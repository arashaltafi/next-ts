import showToast from '@/utils/ToastUtils'
import React from 'react'

// 1. Add ToastComponent
// 2. Add ToastUtils
const Toast = () => {

    const showToastSuccess = () => {
        showToast(
            "متن توست برای حالت موفقیت آمیز." + " " + new Date().getSeconds(),
            "success"
        )
    }

    const showToastError = () => {
        showToast(
            "متن توست برای حالت خطا." + " " + new Date().getSeconds(),
            "error"
        )
    }

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-16'>
            <h1 className='text-5xl'>Toast Custom Sample</h1>

            <button
                onClick={showToastSuccess}
                className='px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 transition-all duration-200 text-white'
            >
                show success toast
            </button>
            <button
                onClick={showToastError}
                className='px-8 py-4 rounded-xl bg-red-500 hover:bg-red-600 transition-all duration-200 text-white'
            >
                show error toast
            </button>
        </div>
    )
}

export default Toast