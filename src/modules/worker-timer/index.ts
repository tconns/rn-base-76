import { useEffect } from 'react'
import BackgroundTimer from './bg-timer'
import { EventEmitter } from 'eventemitter3'

const ListEvents = {
  TIMER_APP: 'timer_app',
}

export interface IConfigTimerApp {
  now: number
  isAppActive: boolean
}

export class AppTimerManager extends EventEmitter {
  public static ListEvents = ListEvents
  private static instance: AppTimerManager | undefined
  private flagRunTimer: boolean = false
  public static getInstance(): AppTimerManager {
    if (!this.instance) {
      this.instance = new AppTimerManager()
    }
    return this.instance
  }

  public static clear(config?: { callback?: Function }) {
    this.instance?.destroy()
    config?.callback?.()
    delete this.instance
  }

  constructor() {
    super()
  }

  private destroy() {
    this.stop()
    this.removeAllListeners()
  }

  public start() {
    this.flagRunTimer = true
    BackgroundTimer.runBackgroundTimer(this.runCallback, 1000)
  }

  private runCallback = async () => {
    this.emit(ListEvents.TIMER_APP, {
      now: Date.now(),
      // isAppActive: store.getState()?.configReducer?.appState === 'active',
    } as IConfigTimerApp)
  }

  public stop() {
    if (!this.flagRunTimer) {
      return
    }
    BackgroundTimer.stopBackgroundTimer()
  }
}

export const useTimerApp = ({ onTimerApp }, ...args) => {
  useEffect(() => {
    AppTimerManager.getInstance().on(AppTimerManager.ListEvents.TIMER_APP, onTimerApp)
    return () => {
      AppTimerManager.getInstance().off(AppTimerManager.ListEvents.TIMER_APP, onTimerApp)
    }
  }, [onTimerApp, args])
}
