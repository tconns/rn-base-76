
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
'visible': {
  "overflow": "visible"
},
'hidden': {
  "display": "none"
},
'scroll': {
  "overflow": "scroll"
},
'top-0': {
  "top": 0
},
'right-0': {
  "right": 0
},
'bottom-0': {
  "bottom": 0
},
'left-0': {
  "left": 0
},
'h-full': {
  "height": "100%"
},
'w-full': {
  "width": "100%"
},
'min-h-full': {
  "minHeight": "100%"
},
'min-w-full': {
  "minWidth": "100%"
},
'max-h-full': {
  "maxHeight": "100%"
},
'max-w-full': {
  "maxWidth": "100%"
},
'z-0': {
  "zIndex": 0
},
'z-1': {
  "zIndex": 0
},
'z-2': {
  "zIndex": 2
},
'z-3': {
  "zIndex": 3
},
'z-10': {
  "zIndex": 10
},
'z-20': {
  "zIndex": 20
},
'z-30': {
  "zIndex": 30
},
'z-40': {
  "zIndex": 40
},
'z-50': {
  "zIndex": 50
},
'border-solid': {
  "borderStyle": "solid"
},
'border-dashed': {
  "borderStyle": "dashed"
},
'border-dotted': {
  "borderStyle": "dotted"
},
'absolute': {
  "position": "absolute"
},
'relative': {
  "position": "relative"
},
'static': {
  "position": "static"
},
'flex': {
  "display": "flex"
},
'flex-1': {
  "flex": 1
},
'flex-shrink': {
  "flexShrink": 1
},
'flex-shrink-0': {
  "flexShrink": 0
},
'flex-grow': {
  "flexGrow": 1
},
'flex-grow-0': {
  "flexGrow": 0
},
'flex-row': {
  "flexDirection": "row"
},
'flex-row-reverse': {
  "flexDirection": "row-reverse"
},
'flex-col': {
  "flexDirection": "column"
},
'flex-col-reverse': {
  "flexDirection": "column-reverse"
},
'flex-wrap': {
  "flexWrap": "wrap"
},
'flex-wrap-reverse': {
  "flexWrap": "wrap-reverse"
},
'flex-nowrap': {
  "flexWrap": "nowrap"
},
'justify-start': {
  "justifyContent": "flex-start"
},
'justify-end': {
  "justifyContent": "flex-end"
},
'justify-center': {
  "justifyContent": "center"
},
'justify-between': {
  "justifyContent": "space-between"
},
'justify-around': {
  "justifyContent": "space-around"
},
'justify-evenly': {
  "justifyContent": "space-evenly"
},
'content-start': {
  "alignContent": "flex-start"
},
'content-end': {
  "alignContent": "flex-end"
},
'content-center': {
  "alignContent": "center"
},
'content-between': {
  "alignContent": "space-between"
},
'content-around': {
  "alignContent": "space-around"
},
'content-stretch': {
  "alignContent": "stretch"
},
'items-start': {
  "alignItems": "flex-start"
},
'items-end': {
  "alignItems": "flex-end"
},
'items-center': {
  "alignItems": "center"
},
'items-baseline': {
  "alignItems": "baseline"
},
'items-stretch': {
  "alignItems": "stretch"
},
'self-auto': {
  "alignSelf": "auto"
},
'self-start': {
  "alignSelf": "flex-start"
},
'self-end': {
  "alignSelf": "flex-end"
},
'self-center': {
  "alignSelf": "center"
},
'self-baseline': {
  "alignSelf": "baseline"
},
'self-stretch': {
  "alignSelf": "stretch"
},
'text-left': {
  "textAlign": "left"
},
'text-center': {
  "textAlign": "center"
},
'text-right': {
  "textAlign": "right"
},
'text-justify': {
  "textAlign": "justify"
},
'uppercase': {
  "textTransform": "uppercase"
},
'lowercase': {
  "textTransform": "lowercase"
},
'capitalize': {
  "textTransform": "capitalize"
},
'underline': {
  "textDecorationLine": "underline"
},
'line-through': {
  "textDecorationLine": "line-through"
},
'no-underline': {
  "textDecorationLine": "none"
},
'opacity-0': {
  "opacity": 0
},
'opacity-5': {
  "opacity": 0.05
},
'opacity-10': {
  "opacity": 0.1
},
'opacity-20': {
  "opacity": 0.2
},
'opacity-25': {
  "opacity": 0.25
},
'opacity-30': {
  "opacity": 0.3
},
'opacity-40': {
  "opacity": 0.4
},
'opacity-50': {
  "opacity": 0.5
},
'opacity-60': {
  "opacity": 0.6
},
'opacity-70': {
  "opacity": 0.7
},
'opacity-75': {
  "opacity": 0.75
},
'opacity-80': {
  "opacity": 0.8
},
'opacity-90': {
  "opacity": 0.9
},
'opacity-95': {
  "opacity": 0.95
},
'opacity-100': {
  "opacity": 1
},
'p-sm-1': {
  "padding": 1
},
'pt-sm-1': {
  "paddingTop": 1
},
'pr-sm-1': {
  "paddingRight": 1
},
'pb-sm-1': {
  "paddingBottom": 1
},
'pl-sm-1': {
  "paddingLeft": 1
},
'px-sm-1': {
  "paddingHorizontal": 1
},
'py-sm-1': {
  "paddingVertical": 1
},
'm-sm-1': {
  "margin": 1
},
'mt-sm-1': {
  "marginTop": 1
},
'mr-sm-1': {
  "marginRight": 1
},
'mb-sm-1': {
  "marginBottom": 1
},
'ml-sm-1': {
  "marginLeft": 1
},
'mx-sm-1': {
  "marginHorizontal": 1
},
'my-sm-1': {
  "marginVertical": 1
},
'p-sm-2': {
  "padding": 2
},
'pt-sm-2': {
  "paddingTop": 2
},
'pr-sm-2': {
  "paddingRight": 2
},
'pb-sm-2': {
  "paddingBottom": 2
},
'pl-sm-2': {
  "paddingLeft": 2
},
'px-sm-2': {
  "paddingHorizontal": 2
},
'py-sm-2': {
  "paddingVertical": 2
},
'm-sm-2': {
  "margin": 2
},
'mt-sm-2': {
  "marginTop": 2
},
'mr-sm-2': {
  "marginRight": 2
},
'mb-sm-2': {
  "marginBottom": 2
},
'ml-sm-2': {
  "marginLeft": 2
},
'mx-sm-2': {
  "marginHorizontal": 2
},
'my-sm-2': {
  "marginVertical": 2
},
'p-sm-4': {
  "padding": 4
},
'pt-sm-4': {
  "paddingTop": 4
},
'pr-sm-4': {
  "paddingRight": 4
},
'pb-sm-4': {
  "paddingBottom": 4
},
'pl-sm-4': {
  "paddingLeft": 4
},
'px-sm-4': {
  "paddingHorizontal": 4
},
'py-sm-4': {
  "paddingVertical": 4
},
'm-sm-4': {
  "margin": 4
},
'mt-sm-4': {
  "marginTop": 4
},
'mr-sm-4': {
  "marginRight": 4
},
'mb-sm-4': {
  "marginBottom": 4
},
'ml-sm-4': {
  "marginLeft": 4
},
'mx-sm-4': {
  "marginHorizontal": 4
},
'my-sm-4': {
  "marginVertical": 4
},
'p-sm-6': {
  "padding": 6
},
'pt-sm-6': {
  "paddingTop": 6
},
'pr-sm-6': {
  "paddingRight": 6
},
'pb-sm-6': {
  "paddingBottom": 6
},
'pl-sm-6': {
  "paddingLeft": 6
},
'px-sm-6': {
  "paddingHorizontal": 6
},
'py-sm-6': {
  "paddingVertical": 6
},
'm-sm-6': {
  "margin": 6
},
'mt-sm-6': {
  "marginTop": 6
},
'mr-sm-6': {
  "marginRight": 6
},
'mb-sm-6': {
  "marginBottom": 6
},
'ml-sm-6': {
  "marginLeft": 6
},
'mx-sm-6': {
  "marginHorizontal": 6
},
'my-sm-6': {
  "marginVertical": 6
},
'p-sm-8': {
  "padding": 8
},
'pt-sm-8': {
  "paddingTop": 8
},
'pr-sm-8': {
  "paddingRight": 8
},
'pb-sm-8': {
  "paddingBottom": 8
},
'pl-sm-8': {
  "paddingLeft": 8
},
'px-sm-8': {
  "paddingHorizontal": 8
},
'py-sm-8': {
  "paddingVertical": 8
},
'm-sm-8': {
  "margin": 8
},
'mt-sm-8': {
  "marginTop": 8
},
'mr-sm-8': {
  "marginRight": 8
},
'mb-sm-8': {
  "marginBottom": 8
},
'ml-sm-8': {
  "marginLeft": 8
},
'mx-sm-8': {
  "marginHorizontal": 8
},
'my-sm-8': {
  "marginVertical": 8
},
'p-sm-12': {
  "padding": 12
},
'pt-sm-12': {
  "paddingTop": 12
},
'pr-sm-12': {
  "paddingRight": 12
},
'pb-sm-12': {
  "paddingBottom": 12
},
'pl-sm-12': {
  "paddingLeft": 12
},
'px-sm-12': {
  "paddingHorizontal": 12
},
'py-sm-12': {
  "paddingVertical": 12
},
'm-sm-12': {
  "margin": 12
},
'mt-sm-12': {
  "marginTop": 12
},
'mr-sm-12': {
  "marginRight": 12
},
'mb-sm-12': {
  "marginBottom": 12
},
'ml-sm-12': {
  "marginLeft": 12
},
'mx-sm-12': {
  "marginHorizontal": 12
},
'my-sm-12': {
  "marginVertical": 12
},
'p-sm-16': {
  "padding": 16
},
'pt-sm-16': {
  "paddingTop": 16
},
'pr-sm-16': {
  "paddingRight": 16
},
'pb-sm-16': {
  "paddingBottom": 16
},
'pl-sm-16': {
  "paddingLeft": 16
},
'px-sm-16': {
  "paddingHorizontal": 16
},
'py-sm-16': {
  "paddingVertical": 16
},
'm-sm-16': {
  "margin": 16
},
'mt-sm-16': {
  "marginTop": 16
},
'mr-sm-16': {
  "marginRight": 16
},
'mb-sm-16': {
  "marginBottom": 16
},
'ml-sm-16': {
  "marginLeft": 16
},
'mx-sm-16': {
  "marginHorizontal": 16
},
'my-sm-16': {
  "marginVertical": 16
},
'p-md-24': {
  "padding": 24
},
'pt-md-24': {
  "paddingTop": 24
},
'pr-md-24': {
  "paddingRight": 24
},
'pb-md-24': {
  "paddingBottom": 24
},
'pl-md-24': {
  "paddingLeft": 24
},
'px-md-24': {
  "paddingHorizontal": 24
},
'py-md-24': {
  "paddingVertical": 24
},
'm-md-24': {
  "margin": 24
},
'mt-md-24': {
  "marginTop": 24
},
'mr-md-24': {
  "marginRight": 24
},
'mb-md-24': {
  "marginBottom": 24
},
'ml-md-24': {
  "marginLeft": 24
},
'mx-md-24': {
  "marginHorizontal": 24
},
'my-md-24': {
  "marginVertical": 24
},
'p-md-32': {
  "padding": 32
},
'pt-md-32': {
  "paddingTop": 32
},
'pr-md-32': {
  "paddingRight": 32
},
'pb-md-32': {
  "paddingBottom": 32
},
'pl-md-32': {
  "paddingLeft": 32
},
'px-md-32': {
  "paddingHorizontal": 32
},
'py-md-32': {
  "paddingVertical": 32
},
'm-md-32': {
  "margin": 32
},
'mt-md-32': {
  "marginTop": 32
},
'mr-md-32': {
  "marginRight": 32
},
'mb-md-32': {
  "marginBottom": 32
},
'ml-md-32': {
  "marginLeft": 32
},
'mx-md-32': {
  "marginHorizontal": 32
},
'my-md-32': {
  "marginVertical": 32
},
'p-md-40': {
  "padding": 40
},
'pt-md-40': {
  "paddingTop": 40
},
'pr-md-40': {
  "paddingRight": 40
},
'pb-md-40': {
  "paddingBottom": 40
},
'pl-md-40': {
  "paddingLeft": 40
},
'px-md-40': {
  "paddingHorizontal": 40
},
'py-md-40': {
  "paddingVertical": 40
},
'm-md-40': {
  "margin": 40
},
'mt-md-40': {
  "marginTop": 40
},
'mr-md-40': {
  "marginRight": 40
},
'mb-md-40': {
  "marginBottom": 40
},
'ml-md-40': {
  "marginLeft": 40
},
'mx-md-40': {
  "marginHorizontal": 40
},
'my-md-40': {
  "marginVertical": 40
},
'p-md-48': {
  "padding": 48
},
'pt-md-48': {
  "paddingTop": 48
},
'pr-md-48': {
  "paddingRight": 48
},
'pb-md-48': {
  "paddingBottom": 48
},
'pl-md-48': {
  "paddingLeft": 48
},
'px-md-48': {
  "paddingHorizontal": 48
},
'py-md-48': {
  "paddingVertical": 48
},
'm-md-48': {
  "margin": 48
},
'mt-md-48': {
  "marginTop": 48
},
'mr-md-48': {
  "marginRight": 48
},
'mb-md-48': {
  "marginBottom": 48
},
'ml-md-48': {
  "marginLeft": 48
},
'mx-md-48': {
  "marginHorizontal": 48
},
'my-md-48': {
  "marginVertical": 48
},
'p-md-56': {
  "padding": 56
},
'pt-md-56': {
  "paddingTop": 56
},
'pr-md-56': {
  "paddingRight": 56
},
'pb-md-56': {
  "paddingBottom": 56
},
'pl-md-56': {
  "paddingLeft": 56
},
'px-md-56': {
  "paddingHorizontal": 56
},
'py-md-56': {
  "paddingVertical": 56
},
'm-md-56': {
  "margin": 56
},
'mt-md-56': {
  "marginTop": 56
},
'mr-md-56': {
  "marginRight": 56
},
'mb-md-56': {
  "marginBottom": 56
},
'ml-md-56': {
  "marginLeft": 56
},
'mx-md-56': {
  "marginHorizontal": 56
},
'my-md-56': {
  "marginVertical": 56
},
'p-md-64': {
  "padding": 64
},
'pt-md-64': {
  "paddingTop": 64
},
'pr-md-64': {
  "paddingRight": 64
},
'pb-md-64': {
  "paddingBottom": 64
},
'pl-md-64': {
  "paddingLeft": 64
},
'px-md-64': {
  "paddingHorizontal": 64
},
'py-md-64': {
  "paddingVertical": 64
},
'm-md-64': {
  "margin": 64
},
'mt-md-64': {
  "marginTop": 64
},
'mr-md-64': {
  "marginRight": 64
},
'mb-md-64': {
  "marginBottom": 64
},
'ml-md-64': {
  "marginLeft": 64
},
'mx-md-64': {
  "marginHorizontal": 64
},
'my-md-64': {
  "marginVertical": 64
},
'p-md-72': {
  "padding": 72
},
'pt-md-72': {
  "paddingTop": 72
},
'pr-md-72': {
  "paddingRight": 72
},
'pb-md-72': {
  "paddingBottom": 72
},
'pl-md-72': {
  "paddingLeft": 72
},
'px-md-72': {
  "paddingHorizontal": 72
},
'py-md-72': {
  "paddingVertical": 72
},
'm-md-72': {
  "margin": 72
},
'mt-md-72': {
  "marginTop": 72
},
'mr-md-72': {
  "marginRight": 72
},
'mb-md-72': {
  "marginBottom": 72
},
'ml-md-72': {
  "marginLeft": 72
},
'mx-md-72': {
  "marginHorizontal": 72
},
'my-md-72': {
  "marginVertical": 72
},
'p-md-80': {
  "padding": 80
},
'pt-md-80': {
  "paddingTop": 80
},
'pr-md-80': {
  "paddingRight": 80
},
'pb-md-80': {
  "paddingBottom": 80
},
'pl-md-80': {
  "paddingLeft": 80
},
'px-md-80': {
  "paddingHorizontal": 80
},
'py-md-80': {
  "paddingVertical": 80
},
'm-md-80': {
  "margin": 80
},
'mt-md-80': {
  "marginTop": 80
},
'mr-md-80': {
  "marginRight": 80
},
'mb-md-80': {
  "marginBottom": 80
},
'ml-md-80': {
  "marginLeft": 80
},
'mx-md-80': {
  "marginHorizontal": 80
},
'my-md-80': {
  "marginVertical": 80
},
'p-md-88': {
  "padding": 88
},
'pt-md-88': {
  "paddingTop": 88
},
'pr-md-88': {
  "paddingRight": 88
},
'pb-md-88': {
  "paddingBottom": 88
},
'pl-md-88': {
  "paddingLeft": 88
},
'px-md-88': {
  "paddingHorizontal": 88
},
'py-md-88': {
  "paddingVertical": 88
},
'm-md-88': {
  "margin": 88
},
'mt-md-88': {
  "marginTop": 88
},
'mr-md-88': {
  "marginRight": 88
},
'mb-md-88': {
  "marginBottom": 88
},
'ml-md-88': {
  "marginLeft": 88
},
'mx-md-88': {
  "marginHorizontal": 88
},
'my-md-88': {
  "marginVertical": 88
},
'p-lg-96': {
  "padding": 96
},
'pt-lg-96': {
  "paddingTop": 96
},
'pr-lg-96': {
  "paddingRight": 96
},
'pb-lg-96': {
  "paddingBottom": 96
},
'pl-lg-96': {
  "paddingLeft": 96
},
'px-lg-96': {
  "paddingHorizontal": 96
},
'py-lg-96': {
  "paddingVertical": 96
},
'm-lg-96': {
  "margin": 96
},
'mt-lg-96': {
  "marginTop": 96
},
'mr-lg-96': {
  "marginRight": 96
},
'mb-lg-96': {
  "marginBottom": 96
},
'ml-lg-96': {
  "marginLeft": 96
},
'mx-lg-96': {
  "marginHorizontal": 96
},
'my-lg-96': {
  "marginVertical": 96
},
'p-lg-104': {
  "padding": 104
},
'pt-lg-104': {
  "paddingTop": 104
},
'pr-lg-104': {
  "paddingRight": 104
},
'pb-lg-104': {
  "paddingBottom": 104
},
'pl-lg-104': {
  "paddingLeft": 104
},
'px-lg-104': {
  "paddingHorizontal": 104
},
'py-lg-104': {
  "paddingVertical": 104
},
'm-lg-104': {
  "margin": 104
},
'mt-lg-104': {
  "marginTop": 104
},
'mr-lg-104': {
  "marginRight": 104
},
'mb-lg-104': {
  "marginBottom": 104
},
'ml-lg-104': {
  "marginLeft": 104
},
'mx-lg-104': {
  "marginHorizontal": 104
},
'my-lg-104': {
  "marginVertical": 104
},
'p-lg-112': {
  "padding": 112
},
'pt-lg-112': {
  "paddingTop": 112
},
'pr-lg-112': {
  "paddingRight": 112
},
'pb-lg-112': {
  "paddingBottom": 112
},
'pl-lg-112': {
  "paddingLeft": 112
},
'px-lg-112': {
  "paddingHorizontal": 112
},
'py-lg-112': {
  "paddingVertical": 112
},
'm-lg-112': {
  "margin": 112
},
'mt-lg-112': {
  "marginTop": 112
},
'mr-lg-112': {
  "marginRight": 112
},
'mb-lg-112': {
  "marginBottom": 112
},
'ml-lg-112': {
  "marginLeft": 112
},
'mx-lg-112': {
  "marginHorizontal": 112
},
'my-lg-112': {
  "marginVertical": 112
},
'p-lg-120': {
  "padding": 120
},
'pt-lg-120': {
  "paddingTop": 120
},
'pr-lg-120': {
  "paddingRight": 120
},
'pb-lg-120': {
  "paddingBottom": 120
},
'pl-lg-120': {
  "paddingLeft": 120
},
'px-lg-120': {
  "paddingHorizontal": 120
},
'py-lg-120': {
  "paddingVertical": 120
},
'm-lg-120': {
  "margin": 120
},
'mt-lg-120': {
  "marginTop": 120
},
'mr-lg-120': {
  "marginRight": 120
},
'mb-lg-120': {
  "marginBottom": 120
},
'ml-lg-120': {
  "marginLeft": 120
},
'mx-lg-120': {
  "marginHorizontal": 120
},
'my-lg-120': {
  "marginVertical": 120
},
'p-lg-128': {
  "padding": 128
},
'pt-lg-128': {
  "paddingTop": 128
},
'pr-lg-128': {
  "paddingRight": 128
},
'pb-lg-128': {
  "paddingBottom": 128
},
'pl-lg-128': {
  "paddingLeft": 128
},
'px-lg-128': {
  "paddingHorizontal": 128
},
'py-lg-128': {
  "paddingVertical": 128
},
'm-lg-128': {
  "margin": 128
},
'mt-lg-128': {
  "marginTop": 128
},
'mr-lg-128': {
  "marginRight": 128
},
'mb-lg-128': {
  "marginBottom": 128
},
'ml-lg-128': {
  "marginLeft": 128
},
'mx-lg-128': {
  "marginHorizontal": 128
},
'my-lg-128': {
  "marginVertical": 128
},
'rounded-none': {
  "borderRadius": 0
},
'rounded-t-none': {
  "borderTopLeftRadius": 0,
  "borderTopRightRadius": 0
},
'rounded-r-none': {
  "borderTopRightRadius": 0,
  "borderBottomRightRadius": 0
},
'rounded-b-none': {
  "borderBottomRightRadius": 0,
  "borderBottomLeftRadius": 0
},
'rounded-l-none': {
  "borderTopLeftRadius": 0,
  "borderBottomLeftRadius": 0
},
'rounded-tl-none': {
  "borderTopLeftRadius": 0
},
'rounded-tr-none': {
  "borderTopRightRadius": 0
},
'rounded-br-none': {
  "borderBottomRightRadius": 0
},
'rounded-bl-none': {
  "borderBottomLeftRadius": 0
},
'rounded-xs': {
  "borderRadius": 1
},
'rounded-t-xs': {
  "borderTopLeftRadius": 1,
  "borderTopRightRadius": 1
},
'rounded-r-xs': {
  "borderTopRightRadius": 1,
  "borderBottomRightRadius": 1
},
'rounded-b-xs': {
  "borderBottomRightRadius": 1,
  "borderBottomLeftRadius": 1
},
'rounded-l-xs': {
  "borderTopLeftRadius": 1,
  "borderBottomLeftRadius": 1
},
'rounded-tl-xs': {
  "borderTopLeftRadius": 1
},
'rounded-tr-xs': {
  "borderTopRightRadius": 1
},
'rounded-br-xs': {
  "borderBottomRightRadius": 1
},
'rounded-bl-xs': {
  "borderBottomLeftRadius": 1
},
'rounded-sm': {
  "borderRadius": 2
},
'rounded-t-sm': {
  "borderTopLeftRadius": 2,
  "borderTopRightRadius": 2
},
'rounded-r-sm': {
  "borderTopRightRadius": 2,
  "borderBottomRightRadius": 2
},
'rounded-b-sm': {
  "borderBottomRightRadius": 2,
  "borderBottomLeftRadius": 2
},
'rounded-l-sm': {
  "borderTopLeftRadius": 2,
  "borderBottomLeftRadius": 2
},
'rounded-tl-sm': {
  "borderTopLeftRadius": 2
},
'rounded-tr-sm': {
  "borderTopRightRadius": 2
},
'rounded-br-sm': {
  "borderBottomRightRadius": 2
},
'rounded-bl-sm': {
  "borderBottomLeftRadius": 2
},
'rounded': {
  "borderRadius": 4
},
'rounded-t': {
  "borderTopLeftRadius": 4,
  "borderTopRightRadius": 4
},
'rounded-r': {
  "borderTopRightRadius": 4,
  "borderBottomRightRadius": 4
},
'rounded-b': {
  "borderBottomRightRadius": 4,
  "borderBottomLeftRadius": 4
},
'rounded-l': {
  "borderTopLeftRadius": 4,
  "borderBottomLeftRadius": 4
},
'rounded-tl': {
  "borderTopLeftRadius": 4
},
'rounded-tr': {
  "borderTopRightRadius": 4
},
'rounded-br': {
  "borderBottomRightRadius": 4
},
'rounded-bl': {
  "borderBottomLeftRadius": 4
},
'rounded-md': {
  "borderRadius": 6
},
'rounded-t-md': {
  "borderTopLeftRadius": 6,
  "borderTopRightRadius": 6
},
'rounded-r-md': {
  "borderTopRightRadius": 6,
  "borderBottomRightRadius": 6
},
'rounded-b-md': {
  "borderBottomRightRadius": 6,
  "borderBottomLeftRadius": 6
},
'rounded-l-md': {
  "borderTopLeftRadius": 6,
  "borderBottomLeftRadius": 6
},
'rounded-tl-md': {
  "borderTopLeftRadius": 6
},
'rounded-tr-md': {
  "borderTopRightRadius": 6
},
'rounded-br-md': {
  "borderBottomRightRadius": 6
},
'rounded-bl-md': {
  "borderBottomLeftRadius": 6
},
'rounded-lg': {
  "borderRadius": 8
},
'rounded-t-lg': {
  "borderTopLeftRadius": 8,
  "borderTopRightRadius": 8
},
'rounded-r-lg': {
  "borderTopRightRadius": 8,
  "borderBottomRightRadius": 8
},
'rounded-b-lg': {
  "borderBottomRightRadius": 8,
  "borderBottomLeftRadius": 8
},
'rounded-l-lg': {
  "borderTopLeftRadius": 8,
  "borderBottomLeftRadius": 8
},
'rounded-tl-lg': {
  "borderTopLeftRadius": 8
},
'rounded-tr-lg': {
  "borderTopRightRadius": 8
},
'rounded-br-lg': {
  "borderBottomRightRadius": 8
},
'rounded-bl-lg': {
  "borderBottomLeftRadius": 8
},
'rounded-xl': {
  "borderRadius": 12
},
'rounded-t-xl': {
  "borderTopLeftRadius": 12,
  "borderTopRightRadius": 12
},
'rounded-r-xl': {
  "borderTopRightRadius": 12,
  "borderBottomRightRadius": 12
},
'rounded-b-xl': {
  "borderBottomRightRadius": 12,
  "borderBottomLeftRadius": 12
},
'rounded-l-xl': {
  "borderTopLeftRadius": 12,
  "borderBottomLeftRadius": 12
},
'rounded-tl-xl': {
  "borderTopLeftRadius": 12
},
'rounded-tr-xl': {
  "borderTopRightRadius": 12
},
'rounded-br-xl': {
  "borderBottomRightRadius": 12
},
'rounded-bl-xl': {
  "borderBottomLeftRadius": 12
},
'rounded-2xl': {
  "borderRadius": 16
},
'rounded-t-2xl': {
  "borderTopLeftRadius": 16,
  "borderTopRightRadius": 16
},
'rounded-r-2xl': {
  "borderTopRightRadius": 16,
  "borderBottomRightRadius": 16
},
'rounded-b-2xl': {
  "borderBottomRightRadius": 16,
  "borderBottomLeftRadius": 16
},
'rounded-l-2xl': {
  "borderTopLeftRadius": 16,
  "borderBottomLeftRadius": 16
},
'rounded-tl-2xl': {
  "borderTopLeftRadius": 16
},
'rounded-tr-2xl': {
  "borderTopRightRadius": 16
},
'rounded-br-2xl': {
  "borderBottomRightRadius": 16
},
'rounded-bl-2xl': {
  "borderBottomLeftRadius": 16
},
'rounded-3xl': {
  "borderRadius": 24
},
'rounded-t-3xl': {
  "borderTopLeftRadius": 24,
  "borderTopRightRadius": 24
},
'rounded-r-3xl': {
  "borderTopRightRadius": 24,
  "borderBottomRightRadius": 24
},
'rounded-b-3xl': {
  "borderBottomRightRadius": 24,
  "borderBottomLeftRadius": 24
},
'rounded-l-3xl': {
  "borderTopLeftRadius": 24,
  "borderBottomLeftRadius": 24
},
'rounded-tl-3xl': {
  "borderTopLeftRadius": 24
},
'rounded-tr-3xl': {
  "borderTopRightRadius": 24
},
'rounded-br-3xl': {
  "borderBottomRightRadius": 24
},
'rounded-bl-3xl': {
  "borderBottomLeftRadius": 24
},
'rounded-full': {
  "borderRadius": 9999
},
'rounded-t-full': {
  "borderTopLeftRadius": 9999,
  "borderTopRightRadius": 9999
},
'rounded-r-full': {
  "borderTopRightRadius": 9999,
  "borderBottomRightRadius": 9999
},
'rounded-b-full': {
  "borderBottomRightRadius": 9999,
  "borderBottomLeftRadius": 9999
},
'rounded-l-full': {
  "borderTopLeftRadius": 9999,
  "borderBottomLeftRadius": 9999
},
'rounded-tl-full': {
  "borderTopLeftRadius": 9999
},
'rounded-tr-full': {
  "borderTopRightRadius": 9999
},
'rounded-br-full': {
  "borderBottomRightRadius": 9999
},
'rounded-bl-full': {
  "borderBottomLeftRadius": 9999
},
'shadow-0': {
  "shadowColor": "rgba(0, 0, 0 / 0.5)",
  "shadowOffset": {
    "width": 0,
    "height": 1
  },
  "shadowOpacity": 0.18,
  "shadowRadius": 1,
  "elevation": 1
},
'shadow-1': {
  "shadowColor": "rgba(0, 0, 0 / 0.5)",
  "shadowOffset": {
    "width": 0,
    "height": 1
  },
  "shadowOpacity": 0.2,
  "shadowRadius": 1.41,
  "elevation": 2
},
'shadow-2': {
  "shadowColor": "rgba(0, 0, 0 / 0.5)",
  "shadowOffset": {
    "width": 0,
    "height": 1
  },
  "shadowOpacity": 0.22,
  "shadowRadius": 2.22,
  "elevation": 3
},
'shadow-3': {
  "shadowColor": "rgba(0, 0, 0 / 0.5)",
  "shadowOffset": {
    "width": 0,
    "height": 2
  },
  "shadowOpacity": 0.23,
  "shadowRadius": 2.62,
  "elevation": 4
},
'shadow-4': {
  "shadowColor": "rgba(0, 0, 0 / 0.5)",
  "shadowOffset": {
    "width": 0,
    "height": 2
  },
  "shadowOpacity": 0.25,
  "shadowRadius": 3.84,
  "elevation": 5
},
'shadow-5': {
  "shadowColor": "rgba(0, 0, 0 / 0.5)",
  "shadowOffset": {
    "width": 0,
    "height": 3
  },
  "shadowOpacity": 0.27,
  "shadowRadius": 4.65,
  "elevation": 6
},
'shadow-6': {
  "shadowColor": "rgba(0, 0, 0 / 0.5)",
  "shadowOffset": {
    "width": 0,
    "height": 3
  },
  "shadowOpacity": 0.29,
  "shadowRadius": 4.65,
  "elevation": 7
},
'shadow-7': {
  "shadowColor": "rgba(0, 0, 0 / 0.5)",
  "shadowOffset": {
    "width": 0,
    "height": 4
  },
  "shadowOpacity": 0.3,
  "shadowRadius": 4.65,
  "elevation": 8
},
'shadow-8': {
  "shadowColor": "rgba(0, 0, 0 / 0.5)",
  "shadowOffset": {
    "width": 0,
    "height": 4
  },
  "shadowOpacity": 0.32,
  "shadowRadius": 5.46,
  "elevation": 9
},
'shadow-9': {
  "shadowColor": "rgba(0, 0, 0 / 0.5)",
  "shadowOffset": {
    "width": 0,
    "height": 5
  },
  "shadowOpacity": 0.34,
  "shadowRadius": 6.27,
  "elevation": 10
},
'bg-transparent': {
  "backgroundColor": "transparent"
},
'text-transparent': {
  "color": "transparent"
},
'bg-white': {
  "backgroundColor": "#FFFFFF"
},
'text-white': {
  "color": "#FFFFFF"
},
'bg-black': {
  "backgroundColor": "#000000"
},
'text-black': {
  "color": "#000000"
},
'bg-gray1': {
  "backgroundColor": "#7B6F72"
},
'text-gray1': {
  "color": "#7B6F72"
},
'bg-gray2': {
  "backgroundColor": "#ADA4A5"
},
'text-gray2': {
  "color": "#ADA4A5"
},
'bg-gray3': {
  "backgroundColor": "#DDDADA"
},
'text-gray3': {
  "color": "#DDDADA"
},
'bg-gray4': {
  "backgroundColor": "#27272a"
},
'text-gray4': {
  "color": "#27272a"
},
'bg-gray5': {
  "backgroundColor": "#F7F8F8"
},
'text-gray5': {
  "color": "#F7F8F8"
},
'bg-pink': {
  "backgroundColor": "#ec4899"
},
'text-pink': {
  "color": "#ec4899"
},
'bg-fuchsia': {
  "backgroundColor": "#d946ef"
},
'text-fuchsia': {
  "color": "#d946ef"
},
'bg-purple': {
  "backgroundColor": "#a855f7"
},
'text-purple': {
  "color": "#a855f7"
},
'bg-violet': {
  "backgroundColor": "#8b5cf6"
},
'text-violet': {
  "color": "#8b5cf6"
},
'bg-indigo': {
  "backgroundColor": "#6366f1"
},
'text-indigo': {
  "color": "#6366f1"
},
'bg-blue': {
  "backgroundColor": "#007AFF"
},
'text-blue': {
  "color": "#007AFF"
},
'bg-cyan': {
  "backgroundColor": "#5AC8FA"
},
'text-cyan': {
  "color": "#5AC8FA"
},
'bg-teal': {
  "backgroundColor": "#64D2FF"
},
'text-teal': {
  "color": "#64D2FF"
},
'bg-emerald': {
  "backgroundColor": "#64D2FF"
},
'text-emerald': {
  "color": "#64D2FF"
},
'bg-green': {
  "backgroundColor": "#4CD964"
},
'text-green': {
  "color": "#4CD964"
},
'bg-lime': {
  "backgroundColor": "#A4C400"
},
'text-lime': {
  "color": "#A4C400"
},
'bg-yellow': {
  "backgroundColor": "#FFCC00"
},
'text-yellow': {
  "color": "#FFCC00"
},
'bg-amber': {
  "backgroundColor": "#f59e0b"
},
'text-amber': {
  "color": "#f59e0b"
},
'bg-orange': {
  "backgroundColor": "#f97316"
},
'text-orange': {
  "color": "#f97316"
},
'bg-red': {
  "backgroundColor": "#ef4444"
},
'text-red': {
  "color": "#ef4444"
},
'font-smallCap': {
  "fontSize": 10
},
'font-caption': {
  "fontSize": 12
},
'font-body': {
  "fontSize": 14
},
'font-subheading': {
  "fontSize": 16
},
'font-title': {
  "fontSize": 20
},
'font-headline': {
  "fontSize": 24
},
'font-display1': {
  "fontSize": 28
},
'font-display2': {
  "fontSize": 32
},
'font-display3': {
  "fontSize": 36
},
'font-display4': {
  "fontSize": 40
},
'font-xs': {
  "fontSize": 8
},
'font-sm': {
  "fontSize": 12
},
'font-md': {
  "fontSize": 16
},
'font-lg': {
  "fontSize": 20
},
'font-xl': {
  "fontSize": 24
},
'font-2xl': {
  "fontSize": 28
},
'font-3xl': {
  "fontSize": 32
},
'font-4xl': {
  "fontSize": 36
},
'font-5xl': {
  "fontSize": 40
},
'font-6xl': {
  "fontSize": 44
},
'font-7xl': {
  "fontSize": 48
},
'font-8xl': {
  "fontSize": 52
},
'font-9xl': {
  "fontSize": 56
},
'font-10xl': {
  "fontSize": 60
},
'font-11xl': {
  "fontSize": 64
},
'font-12xl': {
  "fontSize": 68
},
});

export type Atom = keyof typeof ApplicationStyle;

interface IStyle extends ViewStyle, TextStyle {}

export const cn = ({ atomic = [], styles = [] }: { atomic?: Atom[]; styles?: IStyle[] }): StyleProp<IStyle> => {
  return [...atomic.map((value) => ApplicationStyle[value] as IStyle), ...styles]
}
