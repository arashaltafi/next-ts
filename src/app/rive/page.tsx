import React, { ChangeEvent, useState } from 'react'
import { useRive, useStateMachineInput, Layout, Fit, Alignment, RiveState, StateMachineInput } from 'rive-react';
const STATE_MACHINE_NAME = 'Login Machine';

const RiveAnimation = () => {
    const [phoneValue, setPhoneValue] = useState<string | null>('09');
    const [inputLookMultiplier, setInputLookMultiplier] = useState(0);

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
        <div>
            <h1>RiveAnimation</h1>

            <RiveComponent className="w-[90%] md:w-full h-72 md:h-80 mx-auto" />
        </div>
    )
}

export default RiveAnimation