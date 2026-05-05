'use client'

import React, { createContext, use } from "react"
import type { Theme, ThemeContextType } from "./types"

const ThemeContext = createContext<ThemeContextType>({
  setTheme: () => null,
  theme: "dark",
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Always dark
  return (
    <ThemeContext.Provider value={{ setTheme: () => null, theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => use(ThemeContext)
