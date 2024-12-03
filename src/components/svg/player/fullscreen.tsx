import React from 'react'
import { Svg, G, Defs, Path, Rect, ClipPath } from 'react-native-svg'
import { ISVGProps } from '../type'

export const FullscreenIcon: React.FC<ISVGProps> = ({ size = 24, color = '#1C1C1E', fillOpacity = 1 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <G clipPath="url(#clip0_911_14191)">
        <Path
          d="M6 5H9C9.53125 5 10 5.46875 10 6C10 6.5625 9.53125 7 9 7H7V9C7 9.5625 6.53125 10 6 10C5.4375 10 5 9.5625 5 9V6C5 5.46875 5.4375 5 6 5ZM7 15V17H9C9.53125 17 10 17.4688 10 18C10 18.5625 9.53125 19 9 19H6C5.4375 19 5 18.5625 5 18V15C5 14.4688 5.4375 14 6 14C6.53125 14 7 14.4688 7 15ZM15 5H18C18.5312 5 19 5.46875 19 6V9C19 9.5625 18.5312 10 18 10C17.4375 10 17 9.5625 17 9V7H15C14.4375 7 14 6.5625 14 6C14 5.46875 14.4375 5 15 5ZM19 15V18C19 18.5625 18.5312 19 18 19H15C14.4375 19 14 18.5625 14 18C14 17.4688 14.4375 17 15 17H17V15C17 14.4688 17.4375 14 18 14C18.5312 14 19 14.4688 19 15Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_911_14191">
          <Rect
            width="24"
            height="24"
            rx="5"
            fill="white"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
