import React, { ReactNode, useEffect, useState, createContext } from 'react'
import { darkColor, lightColor, commonColor } from './color'
import { spacing } from './spacing'
import { fontSize } from './fontSize'
import {textDefine} from './text.styles'
import { LocalStorage } from '@src/modules/storage'

export interface ThemeSetting {
  isDarkTheme: boolean
  commonColors: typeof commonColor
  themeColors: typeof darkColor
  spacing: typeof spacing
  fontSize: typeof fontSize
  textDefine: typeof textDefine
  toggleTheme: () => void
}

export const ThemeContext = createContext({
  isDarkTheme: false,
  commonColors: commonColor,
  themeColors: lightColor,
  spacing: spacing,
  fontSize: fontSize,
  textDefine: textDefine,
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: JSX.Element | ReactNode | null }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

  useEffect(() => {
    const storedTheme = LocalStorage.getItem('isDarkTheme')
    if (storedTheme !== null) {
      setIsDarkTheme(storedTheme === 'true')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkTheme
    LocalStorage.setItem('isDarkTheme', `${newTheme}`)
    setIsDarkTheme(newTheme)
  }

  const theme: ThemeSetting = {
    isDarkTheme,
    commonColors: commonColor,
    themeColors: isDarkTheme ? darkColor : lightColor,
    spacing,
    fontSize,
    textDefine,
    toggleTheme,
  }

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
