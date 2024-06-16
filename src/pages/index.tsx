import Link from 'next/link'
import React, { useEffect } from 'react'

const index = () => {

  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        document.title = 'Create Next App Hidden'
        changeFavicon('/logo-next-dark.png')
      }
      if (document.visibilityState === 'visible') {
        document.title = 'Create Next App'
        changeFavicon('/logo-next.png')
      }
    })
  }, [])

  const changeFavicon = (link: string) => {
    let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = link
    } else {
      favicon = document.createElement('link')
      favicon.rel = 'icon'
      favicon.href = link
      document.head.appendChild(favicon)
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <p className="text-3xl text-center">
        Next Js Pages Router
      </p>

      <ul className="flex flex-col gap-6 items-center justify-center mt-16">
        <li className="hover:text-yellow-400">
          <Link href="/ssr/1">{`ssr => Server Side Rendering (Page Router)`}</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/csr">{`csr => Client Side Rendering (Page Router)`}</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/ssg">{`ssg => Static Site Generation (Page Router)`}</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/isr">{`isr => ssg with revalidate`}</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/test">test</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/pageList/page1">pageList page1</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/pageList/page2">pageList page2</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/dynamic/123">dynamic route</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/reduxSample">Redux Sample route</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/swr">Sample SWR for CSR</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/reactQuery">Sample reactQuery for CSR</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/progress">Sample Progress</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/internetSpeed">Internet Speed</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/wave">react wavify</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/video">Video Player</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/audio">Audio Player</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/three">ThreeJs</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/three/sample1">ThreeJs Sample1</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/three/sample2">ThreeJs Sample2</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/screenShot">Screen Shot</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/nProgress">nProgress Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/notification">Notification Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/nums2Persian">Nums2Persian Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/csv">csv Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/xlsx1">xlsx1 Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/xlsx2">xlsx2 Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/confetti">canvas-confetti Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/customToast">customToast Sample</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href={{
            pathname: '/dynamicSegments2',
            query: {
              id: 123
            }
          }}>dynamicSegment2</Link>
        </li>
      </ul>
    </div>
  )
}

export default index