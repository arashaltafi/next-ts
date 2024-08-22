"use client"

import React, { useEffect, useState } from 'react'

const nationalCodeCheck = (code: string): boolean => {
    // Ensure the national code is 10 digits
    if (!/^\d{10}$/.test(code)) {
        return false;
    }

    // Convert the national code to an array of digits
    const codeDigits = code.split("").map(Number);

    // Extract the checksum digit (the 10th digit)
    const checksum = codeDigits[9];

    // Calculate the sum of the products of the first 9 digits and their weights (10 to 2)
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += codeDigits[i] * (10 - i);
    }

    // Calculate the remainder when sum is divided by 11
    const remainder = sum % 11;

    // Check if the checksum is valid
    if (remainder < 2) {
        return checksum === remainder;
    } else {
        return checksum === (11 - remainder);
    }
}

const nationalSeriesCheck = (code: string): boolean => {
    // Ensure the serial number is exactly 6 digits and numeric
    if (!/^\d{6}$/.test(code)) {
        return false;
    }

    // If it passes the regex check, the serial is valid
    return true;
}

const shebaCodeCheck = (code: string): boolean => {
    // Check if the length is 26 and starts with 'IR'
    if (!/^IR\d{24}$/.test(code)) {
        return false;
    }

    // Remove 'IR' and append '1827' (numeric equivalent of 'IR')
    const checkString = code.substring(4) + "1827" + code.substring(2, 4);

    // Convert the string to a number and calculate the remainder when divided by 97
    const mod97 = BigInt(checkString) % BigInt(97);

    // Return true if remainder is 1, false otherwise
    return mod97 === BigInt(1);
}

const bankCartCheck = (code: string): boolean => {
    // Remove non-numeric characters like spaces or dashes
    const cleanedCode = code.replace(/\D/g, '');

    // Ensure the card number is exactly 16 digits
    if (!/^\d{16}$/.test(cleanedCode)) {
        return false;
    }

    // Convert the card number into an array of digits
    const digits = cleanedCode.split('').map(Number);

    let sum = 0;
    let isSecond = false;

    // Apply the Luhn algorithm
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];

        if (isSecond) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        isSecond = !isSecond; // Toggle for every second digit
    }

    // The card is valid if the total sum is divisible by 10
    return sum % 10 === 0;
}

const formatCartNumber = (code: string): string => {
    // Remove all non-numeric characters
    const cleanedValue = code.replace(/\D/g, "");

    // Group the digits into blocks of 4 and join with '-'
    const formattedValue = cleanedValue.match(/.{1,4}/g)?.join("-") || "";

    // Return the formatted string
    return formattedValue;
}

const checkOnlyNumber = (number: number | string) => {
    if (number === null) return false
    if (number.toString().match(/^[0-9]*$/) !== null) {
        return true;
    } else {
        return false;
    }
}

const maskPhoneNumber = (phoneNumber: string | number | null | undefined): string => {
    if (phoneNumber === undefined) return ""
    if (phoneNumber === null) return ""
    return phoneNumber.toString().slice(0, 6).padEnd(phoneNumber.toString().length, "*")
}

const numberValidation = (value: string | number) => {
    let newValue = value.toString().replaceAll(",", "");
    if (newValue.match(/^[0-9]*$/) !== null) {
        return true;
    } else {
        return false;
    }
}

const Validator = () => {
    const [nationalCode, setNationalCode] = useState<string>('')
    const [isNationalCodeSuccess, setIsNationalCodeSuccess] = useState<boolean>(false)

    const [nationalSeries, setNationalSeries] = useState<string>('')
    const [isNationalSeriesSuccess, setIsNationalSeriesSuccess] = useState<boolean>(false)

    const [shebaCode, seShebaCode] = useState<string>('')
    const [isShebaCodeSuccess, setIsShebaCodeSuccess] = useState<boolean>(false)

    const [bankCart, setBankCart] = useState<string>('')
    const [isBankCartSuccess, setIsBankCartSuccess] = useState<boolean>(false)

    const [phone, setPhone] = useState<string>('')
    const [phoneMask, setPhoneMask] = useState<string>('')

    useEffect(() => {
        setIsNationalCodeSuccess(nationalCodeCheck(nationalCode))
    }, [nationalCode])

    useEffect(() => {
        setIsNationalSeriesSuccess(nationalSeriesCheck(nationalSeries))
    }, [nationalSeries])

    useEffect(() => {
        setIsShebaCodeSuccess(shebaCodeCheck(shebaCode))
    }, [shebaCode])

    useEffect(() => {
        setIsBankCartSuccess(bankCartCheck(bankCart))
    }, [bankCart])

    useEffect(() => {
        setPhoneMask(maskPhoneNumber(phone))
    }, [phone])

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-16'>
            <h1 className='text-5xl'>Validator</h1>

            <div className='w-full flex flex-col items-center justify-center gap-2'>
                <h2 className='text-2xl'>CheckNationalCode:</h2>
                <input
                    type="text"
                    className='min-w-[50%] bg-white text-gray-900 border-1 border-red-500 focus:border-green-500 px-4 py-3 text-xl rounded-lg text-center'
                    value={nationalCode}
                    onChange={(e) => setNationalCode(e.target.value)}
                />
                <p className='text-base'>isNationalCodeSuccess: {`${isNationalCodeSuccess}`}</p>
            </div>

            <div className='w-full flex flex-col items-center justify-center gap-2'>
                <h2 className='text-2xl'>CheckNationalSeries:</h2>
                <input
                    type="text"
                    className='min-w-[50%] bg-white text-gray-900 border-1 border-red-500 focus:border-green-500 px-4 py-3 text-xl rounded-lg text-center'
                    value={nationalSeries}
                    onChange={(e) => setNationalSeries(e.target.value)}
                />
                <p className='text-base'>isNationalSeriesSuccess: {`${isNationalSeriesSuccess}`}</p>
            </div>

            <div className='w-full flex flex-col items-center justify-center gap-2'>
                <h2 className='text-2xl'>CheckShebaCode:</h2>
                <input
                    type="text"
                    className='min-w-[50%] bg-white text-gray-900 border-1 border-red-500 focus:border-green-500 px-4 py-3 text-xl rounded-lg text-center'
                    value={shebaCode}
                    onChange={(e) => seShebaCode(e.target.value)}
                />
                <p className='text-base'>isShebaCodeSuccess: {`${isShebaCodeSuccess}`}</p>
            </div>

            <div className='w-full flex flex-col items-center justify-center gap-2'>
                <h2 className='text-2xl'>CheckBankCart:</h2>
                <input
                    type="text"
                    className='min-w-[50%] bg-white text-gray-900 border-1 border-red-500 focus:border-green-500 px-4 py-3 text-xl rounded-lg text-center'
                    value={bankCart}
                    onChange={(e) => setBankCart(formatCartNumber(e.target.value))}
                    maxLength={19}
                    placeholder="1234-5678-9012-3456"
                />
                <p className='text-base'>isBankCartSuccess: {`${isBankCartSuccess}`}</p>
            </div>

            <div className='w-full flex flex-col items-center justify-center gap-2'>
                <h2 className='text-2xl'>CheckBankCart:</h2>
                <input
                    type="string"
                    value={phone}
                    maxLength={11}
                    className='min-w-[50%] bg-white text-gray-900 border-1 border-red-500 focus:border-green-500 px-4 py-3 text-xl rounded-lg text-center'
                    placeholder='09123456789'
                    onChange={(e) => {
                        const value = e.target.value
                        if (isNaN(parseInt(value)) || value.length > 11 || checkOnlyNumber(value) === false || numberValidation(value) === false) {
                            setPhone('')
                        } else {
                            setPhone(value)
                        }
                    }}
                />
                <p className='text-base'>phone: {phone}</p>
                <p className='text-base'>phoneMask: {phoneMask}</p>
            </div>

        </div>
    )
}

export default Validator