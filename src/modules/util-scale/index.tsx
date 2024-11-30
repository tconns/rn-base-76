import { NativeModules, Platform, PixelRatio, Dimensions } from 'react-native'

const LINKING_ERROR =
  `The package 'react-native-dpi-metric' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n'

const DpiMetric = NativeModules.DpiMetric
  ? NativeModules.DpiMetric
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        },
      },
    )

const pixelDensity = PixelRatio.get()

const { deviceInch, dpi } = DpiMetric.getConstants()

const { width, height } = Dimensions.get('window')

const isTablet = (): boolean => {
  const adjustedWidth = width * pixelDensity
  const adjustedHeight = height * pixelDensity
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true
  } else {
    return pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
  }
}

const cmToPx = (cm: number): number => {
  return (cm * dpi) / PixelRatio.get() / 2.54
}

const fontScale = (number: number = 1): number => {
  if (deviceInch > 0) {
    const value = (deviceInch + pixelDensity) / 10
    const scale = number * Number(value.toFixed(1))
    return scale
  }
  return number
}

const scale = (number: number = 1): number => {
  if (deviceInch > 0) {
    const value = (deviceInch + (pixelDensity + 0.5)) / 10
    const scale = number * Number(value.toFixed(1))
    return scale
  }
  return number
}

const isAndroid = Platform.OS === 'android'
const isIOS = Platform.OS === 'ios'
const isSmallDevice = deviceInch < 4.8

export { deviceInch, cmToPx, isTablet, fontScale, isAndroid, isIOS, isSmallDevice, scale }
