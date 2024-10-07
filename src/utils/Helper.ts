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

const base64ToBlobPdf = (base64: string, contentType: string = 'application/pdf'): Blob => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
};

// const convertImageToBase64 = (imagePath: string): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         const fs = require('fs');
//         fs.readFile(imagePath, (err: any, data: any) => {
//             if (err) reject(err);
//             const base64String = Buffer.from(data).toString('base64');
//             resolve(base64String);
//         });
//     });
// }

const convertImageUrlToBase64 = async (imageUrl: string): Promise<string> => {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const base64String = Buffer.from(response.data).toString('base64');
    return base64String;
}

// const convertBase64ToImage = (base64String: string, outputPath: string): Promise<void> => {
//     return new Promise((resolve, reject) => {
//         const fs = require('fs');
//         const buffer = Buffer.from(base64String, 'base64');
//         fs.writeFile(outputPath, buffer, (err: any) => {
//             if (err) reject(err);
//             resolve();
//         });
//     });
// }

// const convertVideoToBase64 = (videoPath: string): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         const fs = require('fs');
//         fs.readFile(videoPath, (err: any, data: any) => {
//             if (err) reject(err);
//             const base64String = Buffer.from(data).toString('base64');
//             resolve(base64String);
//         });
//     });
// }

const convertVideoUrlToBase64 = async (videoUrl: string): Promise<string> => {
    const response = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const base64String = Buffer.from(response.data).toString('base64');
    return base64String;
}

// const convertBase64ToVideo = (base64String: string, outputPath: string): Promise<void> => {
//     return new Promise((resolve, reject) => {
//         const fs = require('fs');
//         const buffer = Buffer.from(base64String, 'base64');
//         fs.writeFile(outputPath, buffer, (err: any) => {
//             if (err) reject(err);
//             resolve();
//         });
//     });
// }

const convertBase64ToText = (base64String: string): string => {
    return Buffer.from(base64String, 'base64').toString('utf-8');
}

const convertTextToBase64 = (text: string): string => {
    return Buffer.from(text, 'utf-8').toString('base64');
}

// const convertPdfToBase64 = (pdfPath: string): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         const fs = require('fs');
//         fs.readFile(pdfPath, (err: any, data: any) => {
//             if (err) reject(err);
//             const base64String = Buffer.from(data).toString('base64');
//             resolve(base64String);
//         });
//     });
// }

const convertPdfUrlToBase64 = async (pdfUrl: string): Promise<string> => {
    const response = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
    const base64String = Buffer.from(response.data).toString('base64');
    return base64String;
}

// const convertBase64ToPdf = (base64String: string, outputPath: string): Promise<void> => {
//     return new Promise((resolve, reject) => {
//         const fs = require('fs');
//         const buffer = Buffer.from(base64String, 'base64');
//         fs.writeFile(outputPath, buffer, (err: any) => {
//             if (err) reject(err);
//             resolve();
//         });
//     });
// }

const validateCard = (card: string) => {
    if (typeof card === 'undefined'
        || card === null
        || card.length !== 16) {
        return false;
    }

    let cardTotal = 0;
    for (let i = 0; i < 16; i += 1) {
        const c = Number(card[i]);
        if (i % 2 === 0) {
            cardTotal += ((c * 2 > 9) ? (c * 2) - 9 : (c * 2));
        } else {
            cardTotal += c;
        }
    }
    return (cardTotal % 10 === 0);
}

const validateNationalCode = (code: string) => {
    if (code.length !== 10 || /(\d)(\1){9}/.test(code)) return false;

    let sum = 0,
        chars = code.split(''),
        lastDigit,
        remainder;

    for (let i = 0; i < 9; i++) sum += +chars[i] * (10 - i);

    remainder = sum % 11;
    lastDigit = remainder < 2 ? remainder : 11 - remainder;

    return +chars[9] === lastDigit;
};

const base64ToFile = (base64String: string, fileName: string, mimeType: string): File => {
    const byteString = atob(base64String.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new File([ab], fileName, { type: mimeType });
}

const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
}

const blobToFile = (blob: Blob, fileName: string, mimeType: string): File => {
    return new File([blob], fileName, { type: mimeType });
}

const fileToBlob = (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);

        reader.onload = () => {
            const arrayBuffer = reader.result as ArrayBuffer;
            const blob = new Blob([arrayBuffer], { type: file.type });
            resolve(blob);
        };

        reader.onerror = (error) => reject(error);
    });
}

const base64ToBlob = (base64String: string, mimeType: string): Blob => {
    const byteString = atob(base64String.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeType });
}

const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);

        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
}

const base64ToFileExcelAndDownload = (base64: string, fileName: string) => {
    // Convert base64 to binary string
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    // Convert binary string to bytes
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }

    // Create a Blob from the bytes
    const blob = new Blob([bytes], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName; // Set the file name
    link.click();

    // Clean up the URL object after download
    URL.revokeObjectURL(link.href);
};

export {
    generateRandomNumber,
    convertMilliSecondToHoursMinute,
    delay,
    base64ToBlobPdf,
    // convertImageToBase64,
    convertImageUrlToBase64,
    // convertBase64ToImage,
    // convertVideoToBase64,
    convertVideoUrlToBase64,
    // convertBase64ToVideo,
    convertBase64ToText,
    convertTextToBase64,
    // convertPdfToBase64,
    convertPdfUrlToBase64,
    // convertBase64ToPdf,
    validateCard,
    validateNationalCode,
    base64ToFile,
    fileToBase64,
    blobToFile,
    fileToBlob,
    base64ToBlob,
    blobToBase64,
    base64ToFileExcelAndDownload
}