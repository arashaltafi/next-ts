"use client"

import React, { useState } from 'react'
import EmojiPicker, { EmojiClickData, EmojiStyle, Theme } from 'emoji-picker-react';

//https://www.npmjs.com/package/emoji-picker-react
//https://www.npmjs.com/package/emoji-picker-element
const EmojiPicker1 = () => {
    const [isShowReaction, setIsShowReaction] = useState<boolean>(false);
    const [isShowEmoji, setIsShowEmoji] = useState<boolean>(false);
    const [reactionEmoji, setReactionEmoji] = useState<string>();
    const [inputMessage, setInputMessage] = useState<string>();

    const handleClickToShowReaction = () => {
        setIsShowReaction(!isShowReaction)
    }

    const handleClickToShowEmoji = () => {
        setIsShowEmoji(!isShowEmoji)
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


            <div
                className='relative mt-16 bg-teal-500 hover:bg-teal-600 transition-all w-[90%] py-8 text-3xl text-black text-center rounded-3xl cursor-pointer'>
                <div className={`absolute top-0 left-0 transition-all ${isShowEmoji ? 'block' : 'hidden'}`}>
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
                            setInputMessage((inputMessage) => inputMessage + emoji.emoji)
                        }}
                    />
                </div>

                <div className='flex flex-row gap-8 items-center justify-center'>
                    <input
                        className='text-xl text-left p-4 rounded-xl'
                        type='text'
                        placeholder='message ...'
                        value={inputMessage}
                        onChange={(e) => {
                            setInputMessage(e.currentTarget.value)
                            setIsShowEmoji(false)
                        }}
                    />
                    <div onClick={handleClickToShowEmoji}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmojiPicker1