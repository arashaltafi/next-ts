import React from 'react'

const SnapScroll2 = () => {
    return (
        <div className='w-full h-screen snap-y snap-proximity overflow-y-scroll'>
            <div className="w-full h-screen snap-start bg-red-500">Item 1</div>
            <div className="w-full h-screen snap-start bg-blue-500">Item 2</div>
            <div className="w-full h-screen snap-start bg-red-500">Item 3</div>
            <div className="w-full h-screen snap-start bg-blue-500">Item 4</div>
            <div className="w-full h-screen snap-start bg-red-500">Item 5</div>
            <div className="w-full h-screen snap-start bg-blue-500">Item 6</div>
            <div className="w-full h-screen snap-start bg-red-500">Item 7</div>
            <div className="w-full h-screen snap-start bg-blue-500">Item 8</div>
            <div className="w-full h-screen snap-start bg-red-500">Item 9</div>
            <div className="w-full h-screen snap-start bg-blue-500">Item 10</div>
        </div>
    )
}

export default SnapScroll2