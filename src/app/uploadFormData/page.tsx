"use client"

import { showToast } from '@arashaltafi/react-toast';
import React, { useRef } from 'react'

const UploadFormData = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            let formData = new FormData();
            formData.append("file", file);

            const response = await fetch("http://localhost:8080/upload", {
                method: "POST",
                body: formData
            })
            const res = await response.json()

            if (response.status != 200) {
                showToast(res.message, "error");
            } else {
                showToast("فایل با موفقیت ارسال شد", "success");
            }
        } catch (error) {
            showToast("خطا در ارسال فایل", "error");
        }
    };

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-16'>
            <h1 className='text-5xl'>UploadFormData</h1>

            <button
                type="button"
                onClick={handleUpload}
                className='bg-red-500 hover:bg-red-600 text-white rounded-lg px-6 py-3 transition-all'
            >
                انتخاب فایل
            </button>

            <input
                ref={fileInputRef}
                className="hidden"
                type="file"
                accept=".*"
                onChange={handleFileChange}
            />
        </div>
    )
}

export default UploadFormData