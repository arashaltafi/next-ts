"use client"

import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useRive, useStateMachineInput, Layout, Fit, Alignment, RiveState, StateMachineInput } from 'rive-react';
const STATE_MACHINE_NAME = 'Login Machine';

const RiveAnimation = () => {
    const [phoneValue, setPhoneValue] = useState<string | null>('09');
    const [inputLookMultiplier, setInputLookMultiplier] = useState(0);
    const inputRef = useRef(null);

    const { rive: riveInstance, RiveComponent }: RiveState = useRive({
        src: 'login-teddy.riv',
        stateMachines: STATE_MACHINE_NAME,
        autoplay: true,
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.Center,
        }),
    });

    const isCheckingInput: StateMachineInput | null = useStateMachineInput(
        riveInstance,
        STATE_MACHINE_NAME,
        'isChecking'
    );
    const numLookInput: StateMachineInput | null = useStateMachineInput(
        riveInstance,
        STATE_MACHINE_NAME,
        'numLook'
    );

    useEffect(() => {
        if (inputRef?.current && !inputLookMultiplier) {
            setInputLookMultiplier(
                (inputRef.current as HTMLInputElement).offsetWidth / 50
            );
        }
    }, [inputRef]);

    const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        setPhoneValue(newVal);
        if (!isCheckingInput!.value) {
            isCheckingInput!.value = true;
        }
        const numChars = newVal.length;
        numLookInput!.value = numChars * inputLookMultiplier;
    };

    const onUsernameFocus = () => {
        isCheckingInput!.value = true;
        if (phoneValue && (numLookInput!.value !== phoneValue.length * inputLookMultiplier)) {
            numLookInput!.value = phoneValue.length * inputLookMultiplier;
        }
    };

    return (
        <div className='w-full min-h-screen flex flex-col gap-32 items-center justify-start'>
            <h1 className='text-5xl'>RiveAnimation</h1>

            <RiveComponent className="w-80 h-96" />

            <input
                ref={inputRef}
                onChange={onPhoneChange}
                onBlur={() => (isCheckingInput!.value = false)}
                value={phoneValue || ''}
                onFocus={onUsernameFocus}
                type='number'
                placeholder="شماره تلفن"
                className='w-1/2 px-16 py-8 text-black text-xl rounded-xl'
            />
        </div>
    )
}

export default RiveAnimation