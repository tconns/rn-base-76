import React, { ReactNode, useEffect, useState, createContext } from 'react'
import EventEmitter from 'eventemitter3'

const emitter = new EventEmitter()

export enum TypePlayerShow {
  NONE = 'NONE',
  MINI = 'MINI',
  BIG = 'BIG',
  FULL = 'FULL',
}

let currentShowState = TypePlayerShow.NONE

export const PlayerController = {
  open: () => {
    emitter.emit('open')
  },
  close: () => {
    emitter.emit('close')
  },
}

export interface PlayerSetting {
  showState: TypePlayerShow
  setShowState: (state: TypePlayerShow) => void
  isFullScreen: boolean
  setIsFullScreen: (state: boolean) => void
  showControl: boolean
  setShowControl: (state: boolean) => void
}

export const PlayerContext = createContext({
  showState: TypePlayerShow.NONE,
  setShowState: (state: TypePlayerShow) => { },
  isFullScreen: false,
  setIsFullScreen: (state: boolean) => { },
  showControl: false,
  setShowControl: (state: boolean) => { },
})

export const PlayerProvider = ({ children }: { children: JSX.Element | ReactNode | null }) => {
  const [showState, setShowState] = useState<TypePlayerShow>(TypePlayerShow.NONE)
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
  const [showControl, setShowControl] = useState<boolean>(false)

  const theme: PlayerSetting = {
    showState,
    setShowState,
    isFullScreen,
    setIsFullScreen,
    showControl,
    setShowControl,
  }

  useEffect(() => {
    const open = () => {
      setShowState(TypePlayerShow.BIG)
    }
    const close = () => {
      setShowState(TypePlayerShow.NONE)
    }
    emitter.on('open', open)
    emitter.on('close', close)
    return () => {
      emitter.removeAllListeners()
    }
  }, [])

  useEffect(() => {
    currentShowState = showState
  }, [showState])

  return <PlayerContext.Provider value={theme}>{children}</PlayerContext.Provider>
}
