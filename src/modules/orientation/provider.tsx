import React, { useEffect, useState } from 'react'
import Orientation, { OrientationType } from './orientation'

export interface IOrientationData {
  isPortrait: boolean
  status: OrientationType
}

export interface OrientationSetting {
  orientation: OrientationType
  isLocked: () => boolean
  unlockAllOrientations: () => void
  lockToPortrait: () => void
  lockToLandscape: () => void
}

export const OrientationContext = React.createContext({
  orientation: Orientation.getInitialOrientation() as OrientationType,
  isLocked: Orientation.isLocked,
  unlockAllOrientations: Orientation.unlockAllOrientations,
  lockToPortrait: Orientation.lockToPortrait,
  lockToLandscape: Orientation.lockToLandscape,
})

export const OrientationProvider: React.FC<any> = ({ children }) => {
  const [orientation, setOrientation] = useState<OrientationType>(
    (Orientation.getInitialOrientation() as OrientationType) || OrientationType.UNKNOWN,
  )

  const orientationSetting: OrientationSetting = {
    orientation,
    isLocked: Orientation.isLocked,
    unlockAllOrientations: Orientation.unlockAllOrientations,
    lockToPortrait: Orientation.lockToPortrait,
    lockToLandscape: Orientation.lockToLandscape,
  }

  useEffect(() => {
    Orientation.lockToPortrait()
    const onOrientationChange = (orientation) => {
      if (Orientation.isLocked()) return
      setOrientation(orientation)
    }
    Orientation.addDeviceOrientationListener(onOrientationChange)
    return () => {
      Orientation.addDeviceOrientationListener(onOrientationChange)
    }
  }, [])

  return <OrientationContext.Provider value={orientationSetting}>{children}</OrientationContext.Provider>
}
