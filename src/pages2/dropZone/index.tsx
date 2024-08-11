import React, { useEffect, useCallback, useState } from 'react'
import { useDropzone, DropzoneOptions } from 'react-dropzone';

// npm i react-dropzone
const DropZone = () => {
    const [base64, setBase64] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: any) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            const reader = new FileReader();

            reader.onload = () => {
                const base64String = reader.result as string;
                setBase64(base64String);
                console.log(base64String);
            };

            reader.readAsDataURL(file);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png', '.gif']
        },
        maxFiles: 1,
    })

    return (
        <div className='w-full min-h-screen flex flex-col gap-16 items-center justify-start'>
            <h1 className='text-5xl'>DropZone Sample</h1>
            <div
                {...getRootProps({ className: 'dropzone' })}
                className='border border-dotted border-white px-16 py-8 rounded-xl cursor-pointer'
            >
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <div className='flex flex-col gap-8'>
                <h4 className='text-2xl'>Files</h4>
                <img
                    src={base64 ? base64 : ''}
                    alt={'alt'}
                />
            </div>
        </div >
    )
}

export default DropZone