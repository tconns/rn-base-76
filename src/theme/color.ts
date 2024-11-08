
export interface IColorType {
 'transparent': string,
 'white': string,
 'black': string,
 'gray1': string,
 'gray2': string,
 'gray3': string,
 'gray4': string,
 'gray5': string,
 'pink': string,
 'fuchsia': string,
 'purple': string,
 'violet': string,
 'indigo': string,
 'blue': string,
 'cyan': string,
 'teal': string,
 'emerald': string,
 'green': string,
 'lime': string,
 'yellow': string,
 'amber': string,
 'orange': string,
 'red': string,
}

export const commonColor: IColorType = {
  "transparent": "transparent",
  "white": "#FFFFFF",
  "black": "#000000",
  "gray1": "#7B6F72",
  "gray2": "#ADA4A5",
  "gray3": "#DDDADA",
  "gray4": "#27272a",
  "gray5": "#F7F8F8",
  "pink": "#ec4899",
  "fuchsia": "#d946ef",
  "purple": "#a855f7",
  "violet": "#8b5cf6",
  "indigo": "#6366f1",
  "blue": "#007AFF",
  "cyan": "#5AC8FA",
  "teal": "#64D2FF",
  "emerald": "#64D2FF",
  "green": "#4CD964",
  "lime": "#A4C400",
  "yellow": "#FFCC00",
  "amber": "#f59e0b",
  "orange": "#f97316",
  "red": "#ef4444"
}

export const lightColor = {
  "background": "#FFFFFF",
  "text": "#27272a",
  "border": "#F7F8F8"
}

export const darkColor = {
  "background": "#000000",
  "text": "#FFFFFF",
  "border": "#F7F8F8"
}

export const gradientColor = {
  "primary": [
    "#92A3FD",
    "#9DCEFF"
  ],
  "secondary": [
    "#C58BF2",
    "#EEA4CE"
  ]
}
