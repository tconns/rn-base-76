import React from 'react'
import { Svg, G, Defs, Path, Rect, ClipPath } from 'react-native-svg'
import { ISVGProps } from '../type'

export const ExitFullscreenIcon: React.FC<ISVGProps> = ({ size = 24, color = '#1C1C1E', fillOpacity = 1 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <G clipPath="url(#clip0_911_14194)">
        <Path
          d="M10 6V9C10 9.5625 9.53125 10 9 10H6C5.4375 10 5 9.5625 5 9C5 8.46875 5.4375 8 6 8H8V6C8 5.46875 8.4375 5 9 5C9.53125 5 10 5.46875 10 6ZM6 14H9C9.53125 14 10 14.4688 10 15V18C10 18.5625 9.53125 19 9 19C8.4375 19 8 18.5625 8 18V16H6C5.4375 16 5 15.5625 5 15C5 14.4688 5.4375 14 6 14ZM16 6V8H18C18.5312 8 19 8.46875 19 9C19 9.5625 18.5312 10 18 10H15C14.4375 10 14 9.5625 14 9V6C14 5.46875 14.4375 5 15 5C15.5312 5 16 5.46875 16 6ZM15 14H18C18.5312 14 19 14.4688 19 15C19 15.5625 18.5312 16 18 16H16V18C16 18.5625 15.5312 19 15 19C14.4375 19 14 18.5625 14 18V15C14 14.4688 14.4375 14 15 14Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_911_14194">
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
