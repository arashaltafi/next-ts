"use client"

import { useState } from 'react'
import DatePicker from "react-multi-date-picker"

const page = () => {
  const [value, setValue] = useState(new Date())

  function handleChange(value){
    setValue(value)
  }

  return (
    <div>
      <DatePicker 
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default page 