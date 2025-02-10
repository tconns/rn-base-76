import { DeviceEventEmitter, NativeAppEventEmitter, NativeEventEmitter, NativeModules, Platform } from 'react-native'

const isIOS = Platform.OS === 'ios'

const { WorkerTimer } = NativeModules
const Emitter = isIOS ? new NativeEventEmitter(WorkerTimer) : new NativeEventEmitter()

class BackgroundTimer {
  private uniqueId: number
  private callbacks: any = {}
  private backgroundListener: any
  private backgroundTimer: number = 0
  constructor() {
    this.uniqueId = 0
    this.callbacks = {}
    Emitter.addListener('backgroundTimer.timeout', (id) => {
      if (this.callbacks[id]) {
        const callbackById = this.callbacks[id]
        const { callback } = callbackById
        if (!this.callbacks[id].interval) {
          delete this.callbacks[id]
        } else {
          WorkerTimer.setTimeout(id, this.callbacks[id].timeout)
        }
        callback()
      }
    })
  }

  // Original API
  public start(delay = 0) {
    return WorkerTimer.start(delay)
  }

  public stop() {
    return WorkerTimer.stop()
  }

  public runBackgroundTimer(callback: { (): Promise<void>; (): void }, delay: number) {
    const EventEmitter = isIOS ? NativeAppEventEmitter : DeviceEventEmitter
    this.start(0)
    this.backgroundListener = EventEmitter.addListener('backgroundTimer', () => {
      this.backgroundListener.remove()
      this.backgroundClockMethod(callback, delay)
    })
  }

  public backgroundClockMethod(callback: () => void, delay: number) {
    this.backgroundTimer = this.setTimeout(() => {
      callback()
      this.backgroundClockMethod(callback, delay)
    }, delay)
  }

  public stopBackgroundTimer() {
    this.stop()
    this.clearTimeout(this.backgroundTimer)
  }

  public setTimeout(callback: () => void, timeout: number) {
    this.uniqueId += 1
    const timeoutId = this.uniqueId
    this.callbacks[timeoutId] = {
      callback,
      interval: false,
      timeout,
    }
    WorkerTimer.setTimeout(timeoutId, timeout)
    return timeoutId
  }

  public clearTimeout(timeoutId: number) {
    if (this.callbacks[timeoutId]) {
      delete this.callbacks[timeoutId]
      // RNBackgroundTimer.clearTimeout(timeoutId);
    }
  }

  public setInterval(callback: any, timeout: number) {
    this.uniqueId += 1
    const intervalId = this.uniqueId
    this.callbacks[intervalId] = {
      callback,
      interval: true,
      timeout,
    }
    WorkerTimer.setTimeout(intervalId, timeout)
    return intervalId
  }

  public clearInterval(intervalId: string | number) {
    if (this.callbacks[intervalId]) {
      delete this.callbacks[intervalId]
      // RNBackgroundTimer.clearTimeout(intervalId);
    }
  }
}

export default new BackgroundTimer()
