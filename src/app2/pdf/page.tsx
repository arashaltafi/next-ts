"use client"

import React from 'react'
import { Worker, Viewer } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation'
import { highlightPlugin } from '@react-pdf-viewer/highlight'
import { zoomPlugin } from '@react-pdf-viewer/zoom'
import { themePlugin } from '@react-pdf-viewer/theme'
import { dropPlugin } from '@react-pdf-viewer/drop'
import { toolbarPlugin } from '@react-pdf-viewer/toolbar'
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail'
import { selectionModePlugin } from '@react-pdf-viewer/selection-mode'
import { searchPlugin } from '@react-pdf-viewer/search'
import { rotatePlugin } from '@react-pdf-viewer/rotate'
import { propertiesPlugin } from '@react-pdf-viewer/properties'
import { printPlugin } from '@react-pdf-viewer/print'
import { openPlugin } from '@react-pdf-viewer/open'
import { getFilePlugin } from '@react-pdf-viewer/get-file'
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen'
import { bookmarkPlugin } from '@react-pdf-viewer/bookmark'
import { attachmentPlugin } from '@react-pdf-viewer/attachment'
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import '@react-pdf-viewer/zoom/lib/styles/index.css'
import '@react-pdf-viewer/page-navigation/lib/styles/index.css'
import '@react-pdf-viewer/highlight/lib/styles/index.css'
import '@react-pdf-viewer/drop/lib/styles/index.css'
import '@react-pdf-viewer/toolbar/lib/styles/index.css'
import '@react-pdf-viewer/thumbnail/lib/styles/index.css'
import '@react-pdf-viewer/selection-mode/lib/styles/index.css'
import '@react-pdf-viewer/search/lib/styles/index.css'
import '@react-pdf-viewer/properties/lib/styles/index.css'
import '@react-pdf-viewer/print/lib/styles/index.css'
import '@react-pdf-viewer/open/lib/styles/index.css'
import '@react-pdf-viewer/full-screen/lib/styles/index.css'
import '@react-pdf-viewer/bookmark/lib/styles/index.css'
import '@react-pdf-viewer/attachment/lib/styles/index.css'

const PdfSample = () => {

  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  const pageNavigationPluginInstance = pageNavigationPlugin()
  const zoomPluginInstance = zoomPlugin()
  const highlightPluginInstance = highlightPlugin()
  const themePluginInstance = themePlugin()
  const dropPluginInstance = dropPlugin()
  const toolbarPluginInstance = toolbarPlugin()
  const thumbnailPluginInstance = thumbnailPlugin()
  const selectionModePluginInstance = selectionModePlugin()
  const searchPluginInstance = searchPlugin()
  const rotatePluginInstance = rotatePlugin()
  const propertiesPluginInstance = propertiesPlugin()
  const printPluginInstance = printPlugin()
  const openPluginInstance = openPlugin()
  const getFilePluginInstance = getFilePlugin()
  const fullScreenPluginInstance = fullScreenPlugin()
  const bookmarkPluginInstance = bookmarkPlugin()
  const attachmentPluginInstance = attachmentPlugin()

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
      <div className="size-full">
        <Viewer
          fileUrl={'/pdf.pdf'}
          plugins={[
            defaultLayoutPluginInstance,
            pageNavigationPluginInstance,
            zoomPluginInstance,
            highlightPluginInstance,
            themePluginInstance,
            dropPluginInstance,
            toolbarPluginInstance,
            thumbnailPluginInstance,
            selectionModePluginInstance,
            searchPluginInstance,
            rotatePluginInstance,
            propertiesPluginInstance,
            printPluginInstance,
            openPluginInstance,
            getFilePluginInstance,
            fullScreenPluginInstance,
            bookmarkPluginInstance,
            attachmentPluginInstance
          ]} />
      </div>
    </Worker>
  )
}

export default PdfSample