const generateRandomNumber = (): number => {
    const randomNumber = Math.floor(Math.random() * 10000000); // Generates a random 4-digit number
    if (randomNumber < 1000 || randomNumber > 9999) {
        return generateRandomNumber();
    } else {
        return randomNumber
    }
}

export {
    generateRandomNumber
}