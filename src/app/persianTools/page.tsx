import React from 'react'
import { addCommas, getBankNameFromCardNumber, getPlaceByIranNationalId, getShebaInfo, phoneNumberDetail, removeCommas, verifyCardNumber, wordsToNumber } from "@persian-tools/persian-tools";

// https://persian-tools.js.org/
// npm i @persian-tools/persian-tools
const PersianTools = () => {
    return (
        <div className='flex flex-col items-center justify-start w-full h-screen gap-16 p-8'>
            <h1 className='text-5xl'>PersianTools</h1>

            <p>{ wordsToNumber("منفی سه هزارمین", { digits: "fa" }) }</p>
            <p>{ removeCommas("30,000,000") }</p>
            <p>{ addCommas(30000000) }</p>
            <p>{ JSON.stringify(getPlaceByIranNationalId("0021328374")) }</p>
            <p>{ getBankNameFromCardNumber("6037997242973668") }</p>
            <p>{ verifyCardNumber(6037997242973668)?.toString() }</p>
            <p>{ JSON.stringify(getShebaInfo("IR490170000000221266716007")) }</p>
            <p>{ JSON.stringify(phoneNumberDetail("09187677641")) }</p>
        </div>
    )
}

export default PersianTools