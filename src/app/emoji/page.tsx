"use client"

import React, { useState } from 'react'
import EmojiPicker, { EmojiClickData, EmojiStyle, Theme } from 'emoji-picker-react';

//https://www.npmjs.com/package/emoji-picker-react
//https://www.npmjs.com/package/emoji-picker-element
const EmojiPicker1 = () => {
    const [isShowReaction, setIsShowReaction] = useState<boolean>(false);
    const [reactionEmoji, setReactionEmoji] = useState<string>();

    const handleClickToShowReaction = () => {
        setIsShowReaction(!isShowReaction)
    }

    return (
        <div className='flex flex-col items-center justify-center gap-12 w-full select-none'>


            <div
                onClick={handleClickToShowReaction}
                className='relative mt-16 bg-teal-500 hover:bg-teal-600 transition-all w-[90%] py-8 text-3xl text-white text-center rounded-3xl cursor-pointer'>
                <p>
                    click me!
                </p>
                <p>
                    {reactionEmoji}
                </p>
                <div className={`absolute -top-6 -left-6 transition-all ${isShowReaction ? 'block' : 'hidden'}`}>
                    <EmojiPicker
                        searchDisabled={true}
                        skinTonesDisabled={true}
                        emojiStyle={EmojiStyle.NATIVE}
                        theme={Theme.AUTO}
                        height={450}
                        width={350}
                        reactionsDefaultOpen={true}
                        allowExpandReactions={false}
                        onReactionClick={(emoji: EmojiClickData) => {
                            setReactionEmoji(emoji.emoji)
                        }}
                    />
                </div>
            </div>



            <EmojiPicker
                className='mt-32'
                searchDisabled={true}
                skinTonesDisabled={true}
                emojiStyle={EmojiStyle.NATIVE}
                theme={Theme.AUTO}
                height={450}
                width={350}
                previewConfig={{ showPreview: false }}
                reactionsDefaultOpen={false}
                allowExpandReactions={false}
                onEmojiClick={(emoji: EmojiClickData) => {
                    console.log('onEmojiClick', emoji.emoji)
                }}
                onReactionClick={(emoji: EmojiClickData) => {
                    console.log('onReactionClick', emoji.emoji)
                }}
            />
        </div>
    )
}

export default EmojiPicker1