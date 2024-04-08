"use client"

import React from 'react'
import EmojiPicker, { EmojiClickData, EmojiStyle, Theme } from 'emoji-picker-react';

//https://www.npmjs.com/package/emoji-picker-react
//https://www.npmjs.com/package/emoji-picker-element
const EmojiPicker1 = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-12 w-full'>
            <EmojiPicker
                searchDisabled={true}
                skinTonesDisabled={true}
                emojiStyle={EmojiStyle.NATIVE}
                theme={Theme.AUTO}
                height={450}
                width={350}
                reactionsDefaultOpen={true}
                allowExpandReactions={false}
                onEmojiClick={(emoji: EmojiClickData) => {
                    console.log('onEmojiClick', emoji.emoji)
                }}
                onReactionClick={(emoji: EmojiClickData) => {
                    console.log('onReactionClick', emoji.emoji)
                }}
            />


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