"use client"

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const index = () => {

  const router = useRouter();
  const path = usePathname();

  console.log('router:', router)
  console.log('path:', path)

  return (
    <div>path: {path}</div>
  )
}

export default index