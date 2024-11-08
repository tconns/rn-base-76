const rounded = {
  none: 0,
  xs: 1,
  sm: 2,
  '': 4,
  md: 6,
  lg: 8,
  xl: 12,
  '2xl': 16,
  '3xl': 24,
  full: 9999,
}

const generateRoundedStyles = (rounded) => {
  const styles = {}

  Object.keys(rounded).forEach((key) => {
    const value = rounded[key]

    // Border Radius
    styles[`rounded${key ? '-' + key : key}`] = { borderRadius: value }
    styles[`rounded-t${key ? '-' + key : key}`] = { borderTopLeftRadius: value, borderTopRightRadius: value }
    styles[`rounded-r${key ? '-' + key : key}`] = { borderTopRightRadius: value, borderBottomRightRadius: value }
    styles[`rounded-b${key ? '-' + key : key}`] = { borderBottomRightRadius: value, borderBottomLeftRadius: value }
    styles[`rounded-l${key ? '-' + key : key}`] = { borderTopLeftRadius: value, borderBottomLeftRadius: value }
    styles[`rounded-tl${key ? '-' + key : key}`] = { borderTopLeftRadius: value }
    styles[`rounded-tr${key ? '-' + key : key}`] = { borderTopRightRadius: value }
    styles[`rounded-br${key ? '-' + key : key}`] = { borderBottomRightRadius: value }
    styles[`rounded-bl${key ? '-' + key : key}`] = { borderBottomLeftRadius: value }
  })

  return styles
}

module.exports = {
  rounded: generateRoundedStyles(rounded),
}