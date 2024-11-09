import React from 'react'
import { TextProps, Text as RNText, StyleProp, ViewStyle } from 'react-native'
import { TypeTextStyles, styles } from './style'
import { useThemedStyles } from '@src/theme'

interface ITextProps extends TextProps {
  marquee?: boolean
  size?: number
  type?: TypeTextStyles
  color?: string
  fontFamily?: TypeFontFamily
}

type TypeFontFamily = 'Bold' | 'SemiBold' | 'Medium' | 'Regular'

export const convertTextStyle = ({
  textStyles,
  atomic = [],
  styles = [],
}: {
  textStyles
  atomic?: TypeTextStyles[]
  styles?: ViewStyle[]
}): StyleProp<ViewStyle> => {
  return [...atomic.map((value) => textStyles[value] as ViewStyle), ...styles]
}

export const Text: React.FC<ITextProps> = ({
  marquee,
  size,
  style,
  children,
  type = 'text-body-medium',
  color,
  fontFamily,
  ...otherProps
}) => {
  const customStyle = useThemedStyles(styles)

  const stylesText: any[] = [
    fontFamily && customStyle[fontFamily],
    size && { fontSize: size },
    color && { color: color },
    style,
  ]

  return (
    <RNText
      style={convertTextStyle({ textStyles: customStyle, atomic: [type], styles: stylesText.filter(Boolean) })}
      {...otherProps}
    >
      {children}
    </RNText>
  )
}
