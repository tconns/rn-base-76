import React from 'react'
import { Svg, Path } from 'react-native-svg'
import { ISVGProps } from '../type'

export const ChannelIcon: React.FC<ISVGProps> = ({ size = 33, color = '#CC0000', fillOpacity = 1 }) => {
  return (
    <Svg
      width={size}
      height={(size / 33) * 32}
      viewBox="0 0 33 32"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.15299 22.4333H25.5969C27.0593 22.4333 28.2083 21.3526 28.2083 19.9771V9.95613C28.2083 8.5807 27.0593 7.5 25.5969 7.5H8.15299C6.69063 7.5 5.54163 8.5807 5.54163 9.95613V19.9771C5.54163 21.3526 6.69063 22.4333 8.15299 22.4333ZM14.4204 18.1105V12.5105C14.4204 11.9211 15.0471 11.6263 15.5694 11.9211L20.1654 14.5737C20.5832 14.8684 20.5832 15.5561 20.1654 15.8509L15.6739 18.7C15.1516 19.093 14.4204 18.7 14.4204 18.1105Z"
        fill={color}
        fillOpacity={fillOpacity}
      />
      <Path
        d="M21.7321 24.5H12.0178C11.6 24.5 11.2866 24.2053 11.2866 23.8123C11.2866 23.4193 11.6 23.1246 12.0178 23.1246H21.7321C22.1499 23.1246 22.4633 23.4193 22.4633 23.8123C22.4633 24.2053 22.1499 24.5 21.7321 24.5Z"
        fill={color}
        fillOpacity={fillOpacity}
      />
    </Svg>
  )
}
