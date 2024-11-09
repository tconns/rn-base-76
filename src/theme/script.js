const fs = require('fs')
const path = require('path')

// Đọc các file cấu hình
const { layout, opacity } = require('./config.layout')
const { spacing, spacingContent } = require('./config.spacing')
const { fontSize, fontSizeContent, textDefine, fontFamilyName } = require('./config.fontsize')
const { rounded } = require('./config.rounded')
const { shadow } = require('./config.shadow')
const { commonColor, darkColor, gradientColor, lightColor, common } = require('./config.color')

const styleKeys = { ...layout, ...opacity, ...spacing, ...rounded, ...shadow, ...commonColor, ...fontSize }

// export const styles = StyleSheet.create(${JSON.stringify({ ...layout, ...textAtomic }, null, 2)});
// Tạo nội dung cho file .ts
const content = `
import { StyleProp, StyleSheet, TextStyle, ViewStyle, Dimensions } from 'react-native'

const getDimensions = (type: 'screen' | 'window') => {
  const { width, height } = Dimensions.get(type)
  return {
    width: Math.min(width, height),
    height: Math.max(width, height),
  }
}

export const dimensions = {
  screen: getDimensions('screen'),
  window: getDimensions('window'),
}

Dimensions.addEventListener('change', () => {
  dimensions.screen = getDimensions('screen')
  dimensions.window = getDimensions('window')
})

export const ApplicationStyle = StyleSheet.create({
'w-screen': {
  width: dimensions.screen.width,
},
'h-screen': {
  height: dimensions.screen.height,
},
'w-window': {
  width: dimensions.window.width,
},
'h-window': {
  height: dimensions.window.height,
},
${Object.keys(styleKeys)
  .map((key) => `'${key}': ${JSON.stringify(styleKeys[key], null, 2)},`)
  .join('\n')}
});

export type Atom = keyof typeof ApplicationStyle;

interface IStyle extends ViewStyle, TextStyle {}

export const cn = ({ atomic = [], styles = [] }: { atomic?: Atom[]; styles?: IStyle[] }): StyleProp<IStyle> => {
  return [...atomic.map((value) => ApplicationStyle[value] as IStyle), ...styles]
}
`

// Ghi nội dung vào file app.styles.ts
fs.writeFileSync(path.join(__dirname, 'app.styles.ts'), content, 'utf8')

// Ghi nội dung vào file color.ts
const colorContent = `
export interface IColorType {
${Object.keys(common)
  .map((key) => ` '${key}': string,`)
  .join('\n')}
}

export const commonColor: IColorType = ${JSON.stringify(common, null, 2)}

export const lightColor = ${JSON.stringify(lightColor, null, 2)}

export const darkColor = ${JSON.stringify(darkColor, null, 2)}

export const gradientColor = ${JSON.stringify(gradientColor, null, 2)}
`

fs.writeFileSync(path.join(__dirname, 'color.ts'), colorContent, 'utf8')

// Ghi nội dung vào file spacing.ts
const spacingContentEnd = `
export const spacing = ${JSON.stringify(spacingContent, null, 2)}
`

fs.writeFileSync(path.join(__dirname, 'spacing.ts'), spacingContentEnd, 'utf8')

// Ghi nội dung vào file fontSize.ts

const fontSizeContentEnd = `
export const fontSize = ${JSON.stringify(fontSizeContent, null, 2)}
`

fs.writeFileSync(path.join(__dirname, 'fontSize.ts'), fontSizeContentEnd, 'utf8')

// Ghi nội dung vào file text.styles.ts

const fontDefineContentEnd = `
export const textDefine = ${JSON.stringify(textDefine, null, 2)}

export type TextAtom = keyof typeof textDefine

export const KEYS_FONT = ${JSON.stringify(fontFamilyName, null, 2)}
`

fs.writeFileSync(path.join(__dirname, 'text.styles.ts'), fontDefineContentEnd, 'utf8')

console.log('Generate styles.ts successfully!')
