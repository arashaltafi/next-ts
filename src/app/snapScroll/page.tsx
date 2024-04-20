import React from 'react'

const SnapScroll = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
                <div className="w-full h-1/2 snap-start bg-red-500">Item 1</div>
                <div className="w-full h-1/2 snap-start bg-blue-500">Item 2</div>
                <div className="w-full h-1/2 snap-start bg-red-500">Item 3</div>
                <div className="w-full h-1/2 snap-start bg-blue-500">Item 4</div>
                <div className="w-full h-1/2 snap-start bg-red-500">Item 5</div>
                <div className="w-full h-1/2 snap-start bg-blue-500">Item 6</div>
                <div className="w-full h-1/2 snap-start bg-red-500">Item 7</div>
                <div className="w-full h-1/2 snap-start bg-blue-500">Item 8</div>
                <div className="w-full h-1/2 snap-start bg-red-500">Item 9</div>
                <div className="w-full h-1/2 snap-start bg-blue-500">Item 10</div>
            </div>

            <span className='w-full h-px bg-white rounded-full my-32' />

            <div className="w-full h-screen overflow-y-scroll snap-y snap-proximity">
                <div className="w-full h-1/2 snap-start bg-red-500">Item 1</div>
                <div className="w-full h-1/2 snap-start bg-blue-500">Item 2</div>
                <div className="w-full h-1/2 snap-start bg-red-500">Item 3</div>
                <div className="w-full h-1/2 snap-start bg-blue-500">Item 4</div>
                <div className="w-full h-1/2 snap-start bg-red-500">Item 5</div>
                <div className="w-full h-1/2 snap-start bg-blue-500">Item 6</div>
                <div className="w-full h-1/2 snap-start bg-red-500">Item 7</div>
                <div className="w-full h-1/2 snap-start bg-blue-500">Item 8</div>
                <div className="w-full h-1/2 snap-start bg-red-500">Item 9</div>
                <div className="w-full h-1/2 snap-start bg-blue-500">Item 10</div>
            </div>
        </div>
    )
}

export default SnapScroll