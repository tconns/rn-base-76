import { ThemeSetting, TextAtom, KEYS_FONT } from '@src/theme'
import { StyleSheet } from 'react-native'
// import { fontScale } from 'react-native-utils-scale'

export const styles = (theme: ThemeSetting) => {
  const { themeColors, textDefine } = theme

  const newStyles = {}

  Object.keys(textDefine).map((key) => {
    const { fontFamily, fontSize } = textDefine[key]
    newStyles[key] = {
      fontFamily: fontFamily,
      fontSize: fontSize,
      color: themeColors.text,
      lineHeight: 1.5 * fontSize,
    }
  })

  return StyleSheet.create({
    ...newStyles,
    Bold: {
      fontFamily: KEYS_FONT.bold,
    },
    Medium: {
      fontFamily: KEYS_FONT.medium,
    },
    Regular: {
      fontFamily: KEYS_FONT.regular,
    },
    SemiBold: {
      fontFamily: KEYS_FONT.semiBold,
    },
  })
}

export type TypeTextStyles = TextAtom | 'Bold' | 'SemiBold' | 'Medium' | 'Regular'
