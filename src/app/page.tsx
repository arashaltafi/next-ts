"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from "./styles/Home.module.css"
import { Button } from "@nextui-org/button";
import { NextUIProvider } from "@nextui-org/system";
import { Avatar } from '@nextui-org/react'

const Home = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push('./post')
  }

  return (
    <div
      className="flex flex-col gap-8"
      style={{ cursor: `url(/cursor.svg), auto` }}>
      <p className="text-3xl text-center">
        Next Js 14
      </p>

      <p className={`text-3xl text-center ${styles.title}`}>
        نکست جی اس 14
      </p>

      <ul className="flex flex-col gap-6 items-center justify-center mt-16">
        <li className="hover:text-yellow-400">
          <Link href="/about">About Page</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/contact">Contact Page</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/styled-jsx">Styled Jsx</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/styled-component">Styled Component</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/bootstrap">Bootstrap</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/scss">Scss</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/use-server">{`use-server => Server Side Rendering (App Router)`}</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/use-client">{`use-client => Client Side Rendering (App Router)`}</Link>
        </li>
        <button onClick={handleClick} className="text-red-500 hover:text-blue-500">
          Post Page
        </button>
        <li className="hover:text-yellow-400">
          <Link href="/post/123">Post 123 Page</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/calendar">Calender</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/image">Image</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/imageCrop">Image Crop 1</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/imageCrop2">Image Crop 2</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/emoji">EmojiPicker 1</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/captcha">CaptchaSample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/shirt">Shirt Design</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/pdf">Pdf Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/video">Next Video</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/loadingSample">Loading Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/snapScroll">Snap Scroll sample 1</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/snapScroll/sample2">Snap Scroll sample 2</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/gsapSample">Gsap Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/toastify">Toastify Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/particles">Particles</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/reduxSample">Redux</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/hookUse">Hook Use</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/confetti">Confetti Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/virtualized">Virtualized Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/transitionHook">TransitionHook Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/svgWave">Svg Wave Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/carousel">Carousel Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/reactHookForm">ReactHookForm Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <button onClick={() => router.push('/not-found')}>Not Found 1</button>
          {/* in server component logic -> notFound() */}
        </li>
      </ul>
      <h2>NextUI</h2>
      <NextUIProvider>
        <Button variant='shadow' color="danger">Press me</Button>

        <div className="flex flex-row gap-3 items-center justify-center">
          <Avatar radius="full" color="default" size="lg" src="https://arashaltafi.ir/Social_Media/story-00.jpg" />
          <Avatar name="Junior" />
          <Avatar isDisabled className="w-20 h-20 text-large" src="https://arashaltafi.ir/Social_Media/story-01.jpg" />
          <Avatar name="Jane" />
          <Avatar isBordered size="sm" src="https://arashaltafi.ir/Social_Media/story-02.jpg" />
          <Avatar name="Joe" />
        </div>

      </NextUIProvider>

    </div>
  )
}

export default Home