import svgCaptcha from 'svg-captcha'
import { Buffer } from 'buffer'

export async function GET(req: Request, res: Response) {
    try {
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
        return Response.json({
            code: captcha.text,
            data: base64data
        },
            { status: 200 }
        );
    } catch (error) {
        return Response.json(
            { message: 'All fields are required' },
            { status: 500 }
        )
    }
}