import type { NextApiRequest, NextApiResponse } from 'next'
import { Buffer } from 'buffer';
import svgCaptcha from 'svg-captcha';

export default function (req: NextApiRequest, res: NextApiResponse) {
    const options = {
        size: 6, // Number of characters
        ignoreChars: '0o1i', // Characters to ignore
        noise: 5, // Number of noise lines
        color: true, // Text color
        background: '#ff0', // Background color
        fontSize: 80, // Font size
        width: 200, // Width
        height: 60, // Height
        mathOperator: '+/-', // Math operator
        charPreset: '0123456789' // Character preset
    };
    const captcha = svgCaptcha.create(options);
    const base64data = Buffer.from(captcha.data).toString('base64');
    res.status(200).json({ data: base64data });
}