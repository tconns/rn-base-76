const commonColor = {
  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#000000',
  gray1: '#7B6F72',
  gray2: '#ADA4A5',
  gray3: '#DDDADA',
  gray4: '#27272a',
  gray5: '#F7F8F8',
  pink: '#ec4899',
  fuchsia: '#d946ef',
  purple: '#a855f7',
  violet: '#8b5cf6',
  indigo: '#6366f1',
  blue: '#007AFF',
  cyan: '#5AC8FA',
  teal: '#64D2FF',
  emerald: '#64D2FF',
  green: '#4CD964',
  lime: '#A4C400',
  yellow: '#FFCC00',
  amber: '#f59e0b',
  orange: '#f97316',
  red: '#ef4444',
}

const lightColor = {
  background: commonColor.white,
  text: commonColor.gray4,
  border: commonColor.gray5,
}

const darkColor = {
  background: commonColor.black,
  text: commonColor.white,
  border: commonColor.gray5,
}

const gradientColor = {
  primary: ['#92A3FD', '#9DCEFF'],
  secondary: ['#C58BF2', '#EEA4CE'],
}

const generateColorStyles = (commonColor) => {
  const styles = {}

  Object.keys(commonColor).forEach((key) => {
    const value = commonColor[key]

    // Border Radius
    styles[`bg-${key}`] = { backgroundColor: value }
    styles[`text-${key}`] = { color: value }
  })

  return styles
}

module.exports = {
  commonColor: generateColorStyles(commonColor),
  common: commonColor,
  lightColor,
  darkColor,
  gradientColor,
}
