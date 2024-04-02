'use client'

import { usePathname } from "next/navigation"

const page = ({ params }: { params: { id: string } }) => {
  
  const pathName = usePathname()
  console.log('pathName:', pathName)

  return (
    <div>
        {`post id: ${params.id}`}
    </div>
  )
}

export default page