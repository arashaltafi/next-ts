'use client'

import { usePathname } from "next/navigation"

const page = ({ params }: { params: { id: string } }) => {
  
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div>
        {`post id: ${params.id}`}
    </div>
  )
}

export default page