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

export {
    generateRandomNumber,
    convertMilliSecondToHoursMinute
}