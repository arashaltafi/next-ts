import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <p className="text-3xl text-center">
        Next Js 14
      </p>

      <p className="text-3xl text-center">
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
          <Link href="/post">Post Page</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link href="/post/123">Post 123 Page</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home