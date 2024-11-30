import { useContext } from 'react'
import { PlayerContext, PlayerSetting } from './provider'

export const usePlayer = (): PlayerSetting => {
  return useContext(PlayerContext)
}
