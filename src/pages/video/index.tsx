import React, { useRef, useEffect, useState } from 'react'

const VideoPlayer = () => {
    const [videos, setVideos] = useState<string[]>([])
    const videoRef = useRef<HTMLVideoElement>(null)
    const [currentVideo, setCurrentVideo] = useState<number>(0)
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [isRepeat, setIsRepeat] = useState<boolean>(false)
    const [volume, setVolume] = useState<number>(1)
    const [duration, setDuration] = useState<number>(0)
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [isMuted, setIsMuted] = useState<boolean>(false)

    // add video list
    useEffect(() => {
        setVideos([
            'https://dl.rozmusic.com/Music/1403/03/08/Macan%20Band%20-%20Nobate%20Manam%20Shod%20Video.mp4',
            'https://dl.rozmusic.com/Music/1403/03/13/Novan%20-%20Heyfe%20Man%20Bood%20Video.mp4',
            'https://dl.rozmusic.com/Music/1403/03/10/Ehaam%20-%20Bezan%20Tabar%20Video.mp4',
            'https://dl.rozmusic.com/Music/1403/03/09/Hamid%20Askari%20-%20Mosaken%20Video.mp4',
            // '/videos/1.mp4',
            // '/videos/2.mp4',
            // '/videos/3.mp4',
            // '/videos/4.mp4',
        ])
    }, [])

    // update time video
    useEffect(() => {
        const handleTimeUpdate = () => {
            if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime)
            }
        }

        const handleLoadedMetadata = () => {
            if (videoRef.current) {
                setDuration(videoRef.current.duration)
            }
        }

        if (videoRef.current) {
            videoRef.current.addEventListener('timeupdate', handleTimeUpdate)
            videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata)
            return () => {
                if (videoRef.current) {
                    videoRef.current.removeEventListener('timeupdate', handleTimeUpdate)
                    videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata)
                }
            }
        }
    }, [])

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleNext = () => {
        if (currentVideo > videos.length - 2) {
            setCurrentVideo(0)
        } else {
            setCurrentVideo((prev) => (prev + 1))
        }
        playAfterDelay()
    }

    const handlePrevious = () => {
        if (currentVideo < 1) {
            setCurrentVideo(videos.length - 1)
        } else {
            setCurrentVideo((prev) => (prev - 1))
        }
        playAfterDelay()
    }

    const playAfterDelay = () => {
        setTimeout(() => {
            setIsPlaying(true)
            videoRef.current && videoRef.current.play()
        }, 500)
    }

    const handleRepeat = () => {
        setIsRepeat(!isRepeat)
    }

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(event.target.value)
        setVolume(newVolume)
        if (videoRef.current) {
            videoRef.current.volume = newVolume
        }
    }

    const handleMuteUnmute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    const handleFullScreen = () => {
        if (videoRef.current && videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen()
        }
    }

    const handleDownload = () => {
        if (videoRef.current) {
            const link = document.createElement('a')
            link.href = videoRef.current.currentSrc
            link.download = `video${currentVideo + 1}.mp4`
            link.click()
        }
    }

    const handleCapture = () => {
        if (videoRef.current) {
            const canvas = document.createElement('canvas')
            canvas.width = videoRef.current.videoWidth
            canvas.height = videoRef.current.videoHeight
            const context = canvas.getContext('2d')
            if (context) {
                context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)
                const dataURL = canvas.toDataURL('image/png')
                const link = document.createElement('a')
                link.href = dataURL
                link.download = `capture${currentVideo + 1}.png`
                link.click()
            }
        }
    }

    const handleSkipForward = (sec: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime += sec
        }
    }

    const handleSkipBackward = (sec: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime -= sec
        }
    }

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(event.target.value)
        setCurrentTime(newTime)
        if (videoRef.current) {
            videoRef.current.currentTime = newTime
        }
    }

    return (
        <div onContextMenu={(e) => e.preventDefault()} className='w-full flex flex-col items-center justify-center gap-y-12'>
            <h1 className='text-5xl text-center'>Custom Video Player</h1>

            <video
                className={`h-full md:h-[70vh] rounded-xl`}
                onClick={handlePlayPause}
                onDoubleClick={handleMuteUnmute}
                ref={videoRef}
                src={videos[currentVideo]}
                onEnded={() => {
                    if (isRepeat) {
                        videoRef.current?.play()
                    } else {
                        handleNext()
                    }
                }}
            />

            <div className='w-full flex flex-row flex-wrap justify-center items-center gap-y-4 gap-x-8'>
                <button
                    className='bg-sky-500 hover:bg-sky-600 transition-all px-8 py-4 rounded-xl'
                    onClick={() => handleSkipForward(5)}
                >
                    +5 Sec
                </button>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    step="0.01"
                    value={currentTime}
                    style={{ background: `linear-gradient(to right, #F43F5E ${(currentTime / duration) * 100}%, #475569 ${(currentTime / duration) * 100}%)` }}
                    className={`w-full disabled:opacity-30`}
                    onChange={handleTimeChange}
                />
                <button
                    className='bg-red-500 hover:bg-red-600 transition-all px-8 py-4 rounded-xl'
                    onClick={() => handleSkipBackward(5)}
                >
                    -5 Sec
                </button>
            </div>

            <div className='w-full flex flex-row flex-wrap justify-center items-center gap-y-4 gap-x-8 text-white'>
                <input
                    disabled={isMuted}
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    style={{ background: `linear-gradient(to right, #F43F5E ${volume * 100}%, #475569 ${volume * 100}%)` }}
                    className={`disabled:opacity-30`}
                    onChange={handleVolumeChange}
                />
                <button
                    className='bg-green-500 hover:bg-green-600 transition-all px-8 py-4 rounded-xl'
                    onClick={handlePrevious}
                >
                    Previous Video
                </button>
                <button
                    className='bg-red-500 hover:bg-red-600 transition-all px-8 py-4 rounded-xl'
                    onClick={handlePlayPause}
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                    className='bg-blue-500 hover:bg-blue-600 transition-all px-8 py-4 rounded-xl'
                    onClick={handleNext}
                >
                    Next Video
                </button>
                <button
                    className='bg-yellow-500 hover:bg-yellow-600 transition-all px-8 py-4 rounded-xl'
                    onClick={handleRepeat}
                >
                    {isRepeat ? 'Repeat On' : 'Repeat Off'}
                </button>
                <button
                    className='bg-purple-500 hover:bg-purple-600 transition-all px-8 py-4 rounded-xl'
                    onClick={handleMuteUnmute}
                >
                    {isMuted ? 'Unmute' : 'Mute'}
                </button>
                <button
                    className='bg-rose-500 hover:bg-rose-600 transition-all px-8 py-4 rounded-xl'
                    onClick={handleCapture}
                >
                    Take Capture
                </button>
                <button
                    className='bg-teal-500 hover:bg-teal-600 transition-all px-8 py-4 rounded-xl'
                    onClick={handleDownload}
                >
                    Download
                </button>
                <button
                    className='bg-orange-500 hover:bg-orange-600 transition-all px-8 py-4 rounded-xl'
                    onClick={handleFullScreen}
                >
                    Full Screen
                </button>
            </div>
        </div>
    )
}

export default VideoPlayer