"use client"

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import React, { useRef, useState } from 'react'

const PdfSample = () => {
  const pdfRef = useRef(null)
  const [loader, setLoader] = useState<boolean>(false)

  const handleDownload = () => {
    setLoader(true)
    const capture = pdfRef.current
    if (!capture) return
    
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        unit: 'px',
        format: [document.body.clientWidth, document.body.clientHeight],
        compress: true
      })
      const componentWidth = pdf.internal.pageSize.getWidth()
      const componentHeight = pdf.internal.pageSize.getHeight()

      pdf.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
      pdf.save('download.pdf')
      setLoader(false)
    }).catch((err) => {
      console.log(err)
      setLoader(false)
    })
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-start gap-16 py-8 px-16'>
      <section ref={pdfRef} className='flex flex-col items-center justify-center gap-8'>
        <h1 className='text-6xl font-bold'>Title PDF</h1>
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, non.
          Atque inventore officiis ullam excepturi iste aspernatur aperiam dolorum, at distinctio.
          Laboriosam, voluptates tempora? Odio quos recusandae deleniti itaque et.
        </p>
      </section>

      <button
        className='bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-3 transition-all'
        onClick={handleDownload}
      >
        { loader ? 'Loading...' : 'Download PDF' }
      </button>
    </div>
  )
}

export default PdfSample