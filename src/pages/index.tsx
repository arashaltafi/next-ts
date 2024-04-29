import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-3xl text-center">
        Next Js 12
      </p>

      <p className={`text-3xl text-center`}>
        نکست جی اس 12
      </p>

      <ul className="flex flex-col gap-6 items-center justify-center mt-16">
        <li className="hover:text-yellow-400">
          <Link href="/ssr">{`ssr => Server Side Rendering (Page Router)`}</Link>
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
      </ul>
    </div>
  )
}

export default index