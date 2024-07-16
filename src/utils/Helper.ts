import axios from "axios";

const generateRandomNumber = (): number => {
    const randomNumber = Math.floor(Math.random() * 10000000); // Generates a random 4-digit number
    if (randomNumber < 1000 || randomNumber > 9999) {
        return generateRandomNumber();
    } else {
        return randomNumber
    }
}

const convertMilliSecondToHoursMinute = (
    milliSecond: number,
    withHour: boolean = false,
    withMinute: boolean = false,
    withSecond: boolean = true
): string | false => {
    if (milliSecond < 0) {
        return false;
    }

    const hours = Math.floor(milliSecond / 3600000);
    const minutes = Math.floor((milliSecond % 3600000) / 60000);
    const seconds = Math.floor((milliSecond % 60000) / 1000);

    const paddedHours = withHour ? String(hours).padStart(2, '0') : '';
    const paddedMinutes = withMinute ? String(minutes).padStart(2, '0') : '';
    const paddedSeconds = withSecond ? String(seconds).padStart(2, '0') : '';

    let result = '';
    if (withHour && withMinute && withSecond) {
        result = `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
    } else if (withMinute && withSecond) {
        result = `${paddedMinutes}:${paddedSeconds}`;
    } else if (withHour && withMinute) {
        result = `${paddedHours}:${paddedMinutes}`;
    } else if (withHour) {
        result = `${paddedHours}`;
    } else if (withMinute) {
        result = `${paddedMinutes}`;
    } else if (withSecond) {
        result = `${paddedSeconds}`;
    }

    return result;
}

const delay = async (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const base64ToBlob = (base64: string, contentType: string = 'application/pdf'): Blob => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
};

const convertImageToBase64 = (imagePath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        fs.readFile(imagePath, (err: any, data: any) => {
            if (err) reject(err);
            const base64String = Buffer.from(data).toString('base64');
            resolve(base64String);
        });
    });
}

const convertImageUrlToBase64 = async (imageUrl: string): Promise<string> => {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const base64String = Buffer.from(response.data).toString('base64');
    return base64String;
}

const convertBase64ToImage = (base64String: string, outputPath: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        const buffer = Buffer.from(base64String, 'base64');
        fs.writeFile(outputPath, buffer, (err: any) => {
            if (err) reject(err);
            resolve();
        });
    });
}

const convertVideoToBase64 = (videoPath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        fs.readFile(videoPath, (err: any, data: any) => {
            if (err) reject(err);
            const base64String = Buffer.from(data).toString('base64');
            resolve(base64String);
        });
    });
}

const convertVideoUrlToBase64 = async (videoUrl: string): Promise<string> => {
    const response = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const base64String = Buffer.from(response.data).toString('base64');
    return base64String;
}

const convertBase64ToVideo = (base64String: string, outputPath: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        const buffer = Buffer.from(base64String, 'base64');
        fs.writeFile(outputPath, buffer, (err: any) => {
            if (err) reject(err);
            resolve();
        });
    });
}

const convertBase64ToText = (base64String: string): string => {
    return Buffer.from(base64String, 'base64').toString('utf-8');
}

const convertTextToBase64 = (text: string): string => {
    return Buffer.from(text, 'utf-8').toString('base64');
}

const convertPdfToBase64 = (pdfPath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        fs.readFile(pdfPath, (err: any, data: any) => {
            if (err) reject(err);
            const base64String = Buffer.from(data).toString('base64');
            resolve(base64String);
        });
    });
}

const convertPdfUrlToBase64 = async (pdfUrl: string): Promise<string> => {
    const response = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
    const base64String = Buffer.from(response.data).toString('base64');
    return base64String;
}

const convertBase64ToPdf = (base64String: string, outputPath: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const fs = require('fs');
        const buffer = Buffer.from(base64String, 'base64');
        fs.writeFile(outputPath, buffer, (err: any) => {
            if (err) reject(err);
            resolve();
        });
    });
}

export {
    generateRandomNumber,
    convertMilliSecondToHoursMinute,
    delay,
    base64ToBlob,
    convertImageToBase64,
    convertImageUrlToBase64,
    convertBase64ToImage,
    convertVideoToBase64,
    convertVideoUrlToBase64,
    convertBase64ToVideo,
    convertBase64ToText,
    convertTextToBase64,
    convertPdfToBase64,
    convertPdfUrlToBase64,
    convertBase64ToPdf,
}