"use client";

import {
    base64ToFile,
    fileToBase64,
    blobToFile,
    fileToBlob,
    base64ToBlob,
    blobToBase64
} from '@/utils/Helper';
import React, { useState } from 'react';
import Image from 'next/image';

export default function FileConversionDemo() {
    const [base64String, setBase64String] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [blob, setBlob] = useState<Blob | null>(null);
    const [mimeType, setMimeType] = useState<string | null>(null);

    // Convert File to Base64
    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const uploadedFile = event.target.files[0];
            const base64 = await fileToBase64(uploadedFile);
            setBase64String(base64);
            setFile(uploadedFile);
            setMimeType(uploadedFile.type);
        }
    };

    // Convert Base64 to File
    const handleConvertBase64ToFile = () => {
        if (base64String && mimeType) {
            const file = base64ToFile(base64String, `convertedFile.${mimeType.split('/')[1]}`, mimeType);
            setFile(file);
            console.log('Converted Base64 to File:', file);
        }
    };

    // Convert Blob to File
    const handleConvertBlobToFile = () => {
        if (blob && mimeType) {
            const file = blobToFile(blob, `convertedBlobFile.${mimeType.split('/')[1]}`, mimeType);
            setFile(file);
            console.log('Converted Blob to File:', file);
        }
    };

    // Convert File to Blob
    const handleConvertFileToBlob = async () => {
        if (file) {
            const fileBlob = await fileToBlob(file);
            setBlob(fileBlob);
            console.log('Converted File to Blob:', fileBlob);
        }
    };

    // Convert Base64 to Blob
    const handleConvertBase64ToBlob = () => {
        if (base64String && mimeType) {
            const blob = base64ToBlob(base64String, mimeType);
            setBlob(blob);
            console.log('Converted Base64 to Blob:', blob);
        }
    };

    // Convert Blob to Base64
    const handleConvertBlobToBase64 = async () => {
        if (blob) {
            const base64 = await blobToBase64(blob);
            setBase64String(base64);
            console.log('Converted Blob to Base64:', base64);
        }
    };

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-16 p-8'>
            <h1 className='text-5xl'>File Conversion Demo</h1>

            <span className='w-full h-8 bg-white rounded-full my-16' />

            {/* File to Base64 */}
            <div className='flex flex-col gap-4 items-center justify-center'>
                <input type="file" onChange={handleFileUpload} />
                {base64String && (
                    <div className='flex flex-col gap-4 items-center justify-center'>
                        <h3>Base64 String:</h3>
                        <textarea
                            className='text-black px-8 py-4 rounded-xl scrollbar-hide'
                            rows={5}
                            cols={50}
                            readOnly
                            value={base64String}
                        />
                        {/* Image Preview for Base64 */}
                        {base64String.startsWith('data:image') && (
                            <Image
                                src={base64String}
                                alt="Base64 Image"
                                width={300}
                                height={300}
                                className='rounded-lg'
                            />
                        )}
                    </div>
                )}
            </div>

            <span className='w-full h-8 bg-white rounded-full my-16' />

            <div className='w-full flex flex-col items-center justify-center gap-4 flex-wrap'>
                {/* Base64 to File */}
                <button
                    onClick={handleConvertBase64ToFile}
                    className='px-8 py-4 rounded-xl bg-red-500 hover:bg-red-600 active:bg-red-400 transition-all'
                >
                    Convert Base64 to File
                </button>
                {/* Image Preview for Converted File */}
                {file && file.type.startsWith('image') && (
                    <Image
                        src={URL.createObjectURL(file)}
                        alt="Converted File Image"
                        width={300}
                        height={300}
                        className='rounded-lg'
                    />
                )}


                <span className='w-full h-px bg-white rounded-full my-16' />

                {/* Blob to File */}
                <button
                    onClick={handleConvertBlobToFile}
                    className='px-8 py-4 rounded-xl bg-red-500 hover:bg-red-600 active:bg-red-400 transition-all'
                >
                    Convert Blob to File
                </button>
                {/* Image Preview for Converted Blob to File */}
                {file && file.type.startsWith('image') && (
                    <Image
                        src={URL.createObjectURL(file)}
                        alt="Blob Converted File Image"
                        width={300}
                        height={300}
                        className='rounded-lg'
                    />
                )}

                <span className='w-full h-px bg-white rounded-full my-16' />

                {/* File to Blob */}
                <button
                    onClick={handleConvertFileToBlob}
                    className='px-8 py-4 rounded-xl bg-red-500 hover:bg-red-600 active:bg-red-400 transition-all'
                >
                    Convert File to Blob
                </button>
                {/* No preview for Blob, but it will console log */}

                <span className='w-full h-px bg-white rounded-full my-16' />


                {/* Base64 to Blob */}
                <button
                    onClick={handleConvertBase64ToBlob}
                    className='px-8 py-4 rounded-xl bg-red-500 hover:bg-red-600 active:bg-red-400 transition-all'
                >
                    Convert Base64 to Blob
                </button>

                <span className='w-full h-px bg-white rounded-full my-16' />


                {/* Blob to Base64 */}
                <button
                    onClick={handleConvertBlobToBase64}
                    className='px-8 py-4 rounded-xl bg-red-500 hover:bg-red-600 active:bg-red-400 transition-all'
                >
                    Convert Blob to Base64
                </button>
                {/* Image Preview for Blob to Base64 */}
                {base64String && base64String.startsWith('data:image') && (
                    <Image
                        src={base64String}
                        alt="Blob to Base64 Image"
                        width={300}
                        height={300}
                        className='rounded-lg'
                    />
                )}
            </div>

            <span className='w-full h-8 bg-white rounded-full my-16' />

            {file && (
                <div className='flex flex-col gap-4 items-center justify-center'>
                    <h3 className='text-xl font-bold'>Converted File Info:</h3>
                    <p className='text-lg'>File Name: <span className='font-extrabold'>{file.name}</span></p>
                    <p className='text-lg'>File Type: <span className='font-extrabold'>{file.type}</span></p>
                    <p className='text-lg'>File Size: <span className='font-extrabold'>{file.size}</span> bytes</p>
                </div>
            )}
        </div>
    );
}