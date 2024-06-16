import ToastComponent from '@/components/ToastComponent'
import React from 'react'
import { createRoot } from 'react-dom/client'

const showToast = (
    text: string,
    color: 'success' | 'error',
    pauseOnHover?: boolean,
    timeWait?: number,
) => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    const root = createRoot(container)

    const handleClose = () => {
        root.unmount()
        container.remove()
    }

    root.render(
        <ToastComponent
            text={text}
            color={color}
            timeWait={timeWait}
            pauseOnHover={pauseOnHover}
            onClose={handleClose}
        />
    )
}

export default showToast