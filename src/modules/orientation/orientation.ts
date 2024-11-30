import { NativeModules, Platform, NativeEventEmitter } from 'react-native'

const LINKING_ERROR =
  `The package 'react-native-neo-orientation' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n'

const NeoOrientation = NativeModules.NeoOrientation
  ? NativeModules.NeoOrientation
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR)
        },
      },
    )

const IS_ANDROID = Platform.OS === 'android'

let LocalEventEmitter: NativeEventEmitter | null = IS_ANDROID ? null : new NativeEventEmitter(NeoOrientation)

export type OrientationCallback = (orientation: OrientationType) => void
export type AutoRotateCallback = (state: boolean) => void

export enum OrientationType {
  PORTRAIT = 'portrait',
  PORTRAIT_UPSIDEDOWN = 'portraitUpsideDown',
  LANDSCAPE_LEFT = 'landscapeLeft',
  LANDSCAPE_RIGHT = 'landscapeRight',
  FACE_UP = 'faceUp',
  FACE_DOWN = 'faceDown',
  UNKNOWN = 'unknown',
}

export interface Listeners {
  [key: string]: any
}

let listeners: Listeners = {}
let id = 0
const META = '__listener_id'
let locked = false

function getKey(listener: any): string {
  if (!listener.hasOwnProperty(META)) {
    if (!Object.isExtensible(listener)) {
      return 'F'
    }
    Object.defineProperty(listener, META, {
      value: 'L' + ++id,
    })
  }
  return listener[META]
}

export default class Orientation {
  static configure = (options: any): void => {
    if (IS_ANDROID) {
      return
    }
    NeoOrientation.configure(options)
  }

  static getOrientation = (cb: OrientationCallback): void => {
    NeoOrientation.getOrientation((orientation: OrientationType) => {
      cb(orientation)
    })
  }

  static getDeviceOrientation = (cb: OrientationCallback): void => {
    NeoOrientation.getDeviceOrientation((orientation: OrientationType) => {
      cb(orientation)
    })
  }

  static isLocked = (): boolean => {
    return locked
  }

  static lockToPortrait = (): void => {
    locked = true
    NeoOrientation.lockToPortrait()
  }

  static lockToPortraitUpsideDown = (): void => {
    locked = true
    NeoOrientation.lockToPortraitUpsideDown()
  }

  static lockToLandscape = (): void => {
    locked = true
    NeoOrientation.lockToLandscape()
  }

  static lockToLandscapeRight = (): void => {
    locked = true
    NeoOrientation.lockToLandscapeRight()
  }

  static lockToLandscapeLeft = (): void => {
    locked = true
    NeoOrientation.lockToLandscapeLeft()
  }

  static unlockAllOrientations = (): void => {
    locked = false
    NeoOrientation.unlockAllOrientations()
  }

  static addOrientationListener = (cb: OrientationCallback): void => {
    const key = getKey(cb)
    if (IS_ANDROID) {
      LocalEventEmitter = LocalEventEmitter ?? new NativeEventEmitter(NeoOrientation)
    }
    listeners[key] = LocalEventEmitter?.addListener(
      'orientationDidChange',
      (body: { orientation: OrientationType }) => {
        cb(body.orientation)
      },
    )
  }

  static removeOrientationListener = (cb: OrientationCallback): void => {
    const key = getKey(cb)
    if (!listeners[key]) {
      return
    }
    listeners[key].remove()
    listeners[key] = null
  }

  static addDeviceOrientationListener = (cb: OrientationCallback): void => {
    const key = getKey(cb)
    if (IS_ANDROID) {
      LocalEventEmitter = LocalEventEmitter ?? new NativeEventEmitter(NeoOrientation)
    }
    listeners[key] = LocalEventEmitter?.addListener(
      'deviceOrientationDidChange',
      (body: { deviceOrientation: OrientationType }) => {
        cb(body.deviceOrientation)
      },
    )
  }

  static removeDeviceOrientationListener = (cb: OrientationCallback): void => {
    const key = getKey(cb)
    if (!listeners[key]) {
      return
    }
    listeners[key].remove()
    listeners[key] = null
  }

  static addLockListener = (cb: OrientationCallback): void => {
    const key = getKey(cb)
    if (IS_ANDROID) {
      LocalEventEmitter = LocalEventEmitter ?? new NativeEventEmitter(NeoOrientation)
    }
    listeners[key] = LocalEventEmitter?.addListener('lockDidChange', (body: { orientation: OrientationType }) => {
      cb(body.orientation)
    })
  }

  static removeLockListener = (cb: OrientationCallback): void => {
    const key = getKey(cb)
    if (!listeners[key]) {
      return
    }
    listeners[key].remove()
    listeners[key] = null
  }

  static removeAllListeners = (): void => {
    for (const key in listeners) {
      if (!listeners[key]) {
        continue
      }
      listeners[key].remove()
      listeners[key] = null
    }
  }

  static getInitialOrientation = (): string => {
    return NeoOrientation.initialOrientation
  }

  static getAutoRotateState = (cb: AutoRotateCallback): void => {
    if (!IS_ANDROID) {
      cb(true)
      return
    }
    NeoOrientation.getAutoRotateState((state: boolean) => {
      cb(state)
    })
  }
}
