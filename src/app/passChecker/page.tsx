"use client"

import React, { useState } from 'react'

const PassChecker = () => {
    const [password, setPassword] = useState<string>('');
    const [strength, setStrength] = useState<number>(0);

    // Password validation criteria
    const validations = {
        hasUppercase: /[A-Z]/.test(password),
        hasSpecialChar: /[@#$%!]/.test(password),
        hasMinLength: password.length > 10,
        hasNumber: /\d/.test(password),
    };

    // Calculate strength percentage based on met criteria
    const calculateStrength = () => {
        const totalValidations = Object.values(validations).filter(Boolean).length;
        return (totalValidations / 4) * 100;
    };

    // Handle input change and calculate strength
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setStrength(calculateStrength());
    };

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-16'>
            <h1 className='mt-8 text-5xl'>Password Strength Checker</h1>

            {/* Password Input */}
            <input
                name='password'
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
                className="w-1/2 text-black bg-white text-lg px-4 py-3 rounded-lg"
            />

            {/* Validation Requirements */}
            <div className="my-4">
                <p className={`text-md ${validations.hasUppercase ? 'text-green-600' : 'text-red-600'}`}>
                    • Contains at least one uppercase letter
                </p>
                <p className={`text-md ${validations.hasSpecialChar ? 'text-green-600' : 'text-red-600'}`}>
                    • Contains at least one special character (@, #, $, %, !)
                </p>
                <p className={`text-md ${validations.hasMinLength ? 'text-green-600' : 'text-red-600'}`}>
                    • Is longer than 10 characters
                </p>
                <p className={`text-md ${validations.hasNumber ? 'text-green-600' : 'text-red-600'}`}>
                    • Contains at least one number
                </p>
            </div>

            {/* Password Strength Meter */}
            <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-300">
                    <div
                        style={{ width: `${strength}%` }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${strength > 75
                                ? 'bg-green-500'
                                : strength > 50
                                    ? 'bg-yellow-500'
                                    : 'bg-red-500'
                            }`}
                    />
                </div>
                <p className="text-center text-sm font-medium">
                    Password Strength: {strength.toFixed(0)}%
                </p>
            </div>
        </div>
    )
}

export default PassChecker