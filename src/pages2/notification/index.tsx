import React, { useState } from 'react'

const NotificationSample = () => {
    const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>(
        typeof Notification !== 'undefined' ? Notification.permission : 'default'
    )

    const requestNotificationPermission = () => {
        if (notificationPermission !== 'granted') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    setNotificationPermission(permission)
                } else {
                    alert('Notification permission is not granted.')
                }
            }).catch(err => {
                alert(err)
            })
        }
    }

    const showNotification = () => {
        if (notificationPermission === 'granted') {
            showNotif('Hello', 'World')
        } else {
            alert('Notification permission is not granted.')
        }
    }

    const showNotif = (title: string, body: string) => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then(sw => {
                sw.showNotification(
                    title, {
                    body: body,
                    dir: 'ltr',
                    icon: 'https://arashaltafi.ir/arash.jpg',
                    badge: 'https://arashaltafi.ir/arash.jpg',
                    tag: 'hw1',
                    data: {
                        url: "https://arashaltafi.ir"
                    },
                    requireInteraction: true,
                    silent: false,
                }
                )
            })
        } else {
            alert('no access')
        }


        // new Notification(title, {
        //     body: body,
        //     dir: 'ltr',
        //     icon: './assets/icons/icon-128x128.png',
        //     image: 'https://arashaltafi.ir/arash.jpg',
        //     badge: '/assets/icons/icon-128x128.png',
        //     tag: 'hw1',
        //     data: {
        //         url: "https://arashaltafi.ir"
        //     },
        //     renotify: true,
        //     requireInteraction: true,
        //     silent: false,
        //     vibrate: [200, 100, 200],
        //     actions: [
        //         {
        //             action: 'action1',
        //             title: 'Action 1',
        //             icon: '/assets/icons/icon-128x128.png',
        //         }, {
        //             action: 'action2',
        //             title: 'Action 2',
        //             icon: '/assets/icons/icon-128x128.png',
        //         },
        //     ]
        // })
    }

    return (
        <div className='flex flex-col gap-8 items-center justify-center w-full'>
            <h1>NotificationSample</h1>

            <button
                className='mt-32 px-8 py-4 rounded-xl bg-red-500 text-white'
                onClick={requestNotificationPermission}
            >
                Request Notification Permission
            </button>
            <button
                className='px-8 py-4 rounded-xl bg-red-500 text-white'
                onClick={showNotification}
            >
                Show Notification
            </button>
        </div>
    )
}

export default NotificationSample