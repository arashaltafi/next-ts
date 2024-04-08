"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from "./styles/Home.module.css"

const Home = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push('./post')
  }

  return (
    <div className="flex flex-col gap-8">
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
          <Link href="/emoji">EmojiPicker 1</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home