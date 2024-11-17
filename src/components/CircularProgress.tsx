import React from 'react';

interface CircularProgressProps {
    percent: number; // Percentage value from 0 to 100
}

const CircularProgress: React.FC<CircularProgressProps> = ({ percent }) => {
    const radius = 20; // Radius of the circle
    const stroke = 4; // Width of the circle's stroke
    const normalizedRadius = radius - stroke / 2;
    const circumference = 2 * Math.PI * normalizedRadius;
    const strokeDashoffset =
        circumference - (percent / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center w-10 h-10">
            {/* SVG Circle */}
            <svg
                height={radius * 2}
                width={radius * 2}
                className="transform -rotate-90"
            >
                {/* Background Circle */}
                <circle
                    cx={radius}
                    cy={radius}
                    r={normalizedRadius}
                    stroke="#e5e7eb" // Tailwind's gray-200 color
                    strokeWidth={stroke}
                    fill="transparent"
                />
                {/* Progress Circle */}
                <circle
                    cx={radius}
                    cy={radius}
                    r={normalizedRadius}
                    stroke="#3b82f6" // Tailwind's blue-500 color
                    strokeWidth={stroke}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
            </svg>
            {/* Percentage Text */}
            <div className="absolute text-xs font-bold text-blue-500">
                {percent}%
            </div>
        </div>
    );
};

export default CircularProgress;