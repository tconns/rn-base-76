import { useContext } from 'react'
import { ThemeContext, ThemeSetting } from './theme.provider'

export const useTheme = (): ThemeSetting => {
  return useContext(ThemeContext)
}
