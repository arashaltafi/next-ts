"use client"

import CustomBtn from '@/components/button';
import CustomInputSelect from '@/components/input-select';
import CustomInputText from '@/components/input-text';
import CustomStatus from '@/components/status';
import Image from 'next/image';
import React, { FormEvent, useEffect, useState } from 'react'
import {
    checkDateValidation,
    createStandardDate,
    dayArray,
    monthArray,
    monthNameToNumber,
    nationalCodeCheck,
    phoneNumberCheck,
} from "@/utils/utils";

const FormSimple = () => {
    const [nid, setNid] = useState("");
    const [mobile, setMobile] = useState("");
    const [showLoading, setShowLoading] = useState(false);
    const [inputNidError, setInputNidError] = useState<Array<string>>([]);
    const [inputMobileError, setInputMobileError] = useState<Array<string>>([]);
    const [inputCapchaError, setInputCapchaError] = useState<Array<string>>([]);
    const [formSubmitedFirstTime, setFormSubmitedFirstTime] = useState(false);
    const [backEndError, setBackEndError] = useState("");
    const [capchaKey, setCapchaKey] = useState("");
    const [capchaImage, setCapchaImage] = useState();
    const [dayBirthday, setDayBirthday] = useState("");
    const [monthBirthday, setMonthBirthday] = useState("");
    const [yearBirthday, setYearBirthday] = useState("");
    const [inputBirthdayError, setInputBirthdayError] = useState<Array<string>>([]);

    useEffect(() => {
        if (formSubmitedFirstTime) {
            errorHandling();
        }
    }, [nid, mobile, capchaKey, dayBirthday, monthBirthday, yearBirthday]);

    const errorHandling = () => {
        let allowToContinue = true;
        if (nationalCodeCheck(nid) !== true) {
            setInputNidError(["کدملی وارد شده صحیح نیست"]);
            allowToContinue = false;
        } else {
            setInputNidError([]);
            setBackEndError("");
        }
        if (
            checkDateValidation(
                dayBirthday,
                monthNameToNumber(monthBirthday),
                yearBirthday
            ) !== true
        ) {
            setInputBirthdayError([""]);
            allowToContinue = false;
        } else {
            setInputBirthdayError([]);
            setBackEndError("");
        }
        if (phoneNumberCheck(mobile) !== true) {
            setInputMobileError(["شماره وارد شده صحیح نیست"]);
            allowToContinue = false;
        } else {
            setInputMobileError([]);
            setBackEndError("");
        }
        if (capchaKey.length === 0) {
            setInputCapchaError(["کد امنیتی الزامی است"]);
            allowToContinue = false;
        } else {
            setInputCapchaError([]);
            setBackEndError("");
        }

        return allowToContinue;
    };

    const getCaptcha = () => {
        if (showLoading === false) {
            const postData = async () => {
                setShowLoading(true);
                const response = await fetch(`/api/getCaptcha`);
                return response.json();
            };
            postData().then((data) => {
                console.log('getCaptcha', data)
                setShowLoading(false);
                setCapchaImage(data.response.data);
            });
        }
    };

    const handleSubmitForm = (e: FormEvent) => {
        e?.preventDefault();
        setFormSubmitedFirstTime(true);
    }

    return (
        <div dir='rtl' className='w-full min-h-screen flex flex-col items-center justify-start gap-16'>
            <form
                onSubmit={(e) => handleSubmitForm(e)}
                className="bg-gray-500 py-6 px-5 mobile:px-7 desktop:p-12 flex flex-col items-center border-gray300 desktop:rounded-[8px] desktop:border-[1px]"
            >
                <Image
                    src={'https://arashaltafi.ir/arash_circle.png1'}
                    width={80}
                    height={80}
                    alt="logo"
                    className="mb-4 mt-4 desktop:mt-0"
                />
                <p className="text-gray900 leading-8 font-semibold text-[16px] mb-[6px]">
                    تست تایتل
                </p>
                <CustomInputText
                    label="کد ملی"
                    placeholder="کد ملی"
                    name="nid"
                    onChange={setNid}
                    value={nid}
                    maxLength={10}
                    type={"number"}
                    containerClassName="mb-4"
                    errors={inputNidError}
                />
                <div className="flex gap-2 w-full mb-4">
                    <CustomInputSelect
                        label={"تاریخ تولد"}
                        onChange={setDayBirthday}
                        name={"day"}
                        value={dayBirthday}
                        errors={inputBirthdayError}
                        Values={dayArray}
                    />
                    <CustomInputSelect
                        label={""}
                        onChange={setMonthBirthday}
                        name={"month"}
                        value={monthBirthday}
                        errors={inputBirthdayError}
                        Values={monthArray}
                        containerClassName="max-w-[117px] mt-[18px]"
                    />
                    <CustomInputText
                        label=""
                        placeholder="سال"
                        name="year"
                        onChange={setYearBirthday}
                        value={yearBirthday}
                        maxLength={4}
                        type={"number"}
                        containerClassName="max-w-[117px] mt-[18px]"
                        errors={inputBirthdayError}
                    />
                </div>
                <CustomInputText
                    label="شماره موبایل"
                    placeholder="شماره موبایل"
                    name="mobile"
                    onChange={setMobile}
                    value={mobile}
                    maxLength={11}
                    type={"number"}
                    containerClassName="mb-4"
                    errors={inputMobileError}
                />
                <div className="flex gap-2 mb-10 w-full">
                    <CustomInputText
                        label="کد امنیتی"
                        placeholder="کد امنیتی"
                        name="capchaKey"
                        onChange={setCapchaKey}
                        value={capchaKey}
                        containerClassName="w-[135px] largMobile:w-[200px]"
                        errors={inputCapchaError}
                        maxLength={20}
                    />
                    <Image
                        width={128}
                        height={40}
                        alt="captcha"
                        src={`data:image/png;base64,${capchaImage}`}
                        className="min-h-10 max-h-10 mt-[22px]"
                    />
                    <div onClick={() => getCaptcha()}>
                        <CustomBtn
                            color={"iconbutton"}
                            type={"button"}
                            loading={showLoading}
                            iconAddress={'/refresh-black.svg'}
                            containerClassName="mb-2 mt-[30px]"
                        />
                    </div>
                </div>
                <CustomBtn
                    text={"ثبت و ادامه"}
                    color={"primary"}
                    type={"submit"}
                    width={"100%"}
                    loading={showLoading}
                />
                {backEndError?.length > 0 ? (
                    <CustomStatus
                        text={backEndError}
                        size={"medium"}
                        color={"red"}
                        width={"100%"}
                        containerClassName={"mt-6"}
                    />
                ) : null}
            </form>
        </div>
    )
}

export default FormSimple