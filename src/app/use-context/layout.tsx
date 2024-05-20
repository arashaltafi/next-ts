"use client"

import React, { ReactNode } from 'react'
import { ThemeProvider } from './ThemeContext'

const layout = ({ children }: { children: ReactNode }) => {

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default layout