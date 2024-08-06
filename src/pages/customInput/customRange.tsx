// https://react-round-slider.mzsoft.org/

import React, { useState } from 'react'
import { RoundSlider, ISettingsPointer } from 'mz-react-round-slider'

const customRange = () => {

    const [pointers, setPointers] = useState<ISettingsPointer[]>([{
        value: 50,
        radius: 15,
        bgColor: '#ff0000',
        bgColorDisabled: '#efefef',
        bgColorSelected: '#00ff00',
        bgColorHover: '#0000ff',
        borderColor: '#ffff00',
        border: 2,
        disabled: false
    }]);

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-8'>
            <h1 className='text-5xl'>CustomRange</h1>

            <RoundSlider
                pathStartAngle={0}
                pathEndAngle={180}
                pathRadius={150}
                pathThickness={15}
                pathBgColor={'#efefef'}
                pathInnerBgColor={'#efefef'}
                pathBorder={2}
                pathBorderColor={'#28586c'}
                textOffsetY={70}
                textFontSize={24}
                textSuffix={'°'}
                textPrefix={' '}
                hideText={false}
                pointers={pointers}
                onChange={setPointers}
            />

            <RoundSlider
                pathStartAngle={0}
                pathEndAngle={180}
                pathRadius={150}
                pathThickness={15}
                pathBorder={2}
                pathBorderColor={'#28586c'}
                textOffsetY={70}
                textFontSize={24}
                hideText={true}
                pointers={pointers}
                onChange={setPointers}
            />
        </div>
    )
}

export default customRange