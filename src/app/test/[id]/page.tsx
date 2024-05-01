"use client"

import { useParams, usePathname, useRouter } from "next/navigation";

const index = () => {

  const params = useParams();
  const router = useRouter();
  const path = usePathname();

  console.log('params:', params)
  console.log('router:', router)
  console.log('path:', path)

  return (
    <div className="w-full h-[80vh] overflow-hidden flex flex-col items-center justify-center gap-8">
      <h1 className="text-xl">path: {path}</h1>
      <h1 className="text-xl">params: {params.id}</h1>
      <button
        onClick={() => router.back()}
        className="text-lg text-white bg-red-500 hover:bg-red-600 rounded-lg px-6 py-3 transition-all">
        back
      </button>
    </div>
  )
}

export default index