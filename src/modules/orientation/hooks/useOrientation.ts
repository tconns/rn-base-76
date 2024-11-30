import { useContext } from 'react'
import { OrientationContext } from '../provider'

export const useOrientation = () => {
  return useContext(OrientationContext)
}
