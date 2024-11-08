const fontSize = {
  // Default
  caption: 12,
  body: 14,
  subheading: 16,
  title: 20,
  headline: 24,
  display1: 28,
  display2: 32,
  display3: 36,
  display4: 40,
  // Custom
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 28,
  '3xl': 32,
  '4xl': 36,
  '5xl': 40,
  '6xl': 44,
  '7xl': 48,
  '8xl': 52,
  '9xl': 56,
  '10xl': 60,
  '11xl': 64,
  '12xl': 68,
}
const generateFontSizeStyles = (fontSize) => {
  const styles = {}

  Object.keys(fontSize).forEach((key) => {
    const value = fontSize[key]

    // Padding
    styles[`font-${key}`] = { fontSize: value }
  })

  return styles
}

module.exports = {
  fontSize: generateFontSizeStyles(fontSize),
  fontSizeContent: fontSize,
}