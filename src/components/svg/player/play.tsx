import React from 'react'
import { Svg, G, Defs, Path, Rect, ClipPath } from 'react-native-svg'
import { ISVGProps } from '../type'

export const PlayIcon: React.FC<ISVGProps> = ({ size = 24, color = '#1C1C1E', fillOpacity = 1 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <G clipPath="url(#clip0_911_14161)">
        <Path
          d="M18.3726 10.7245C18.8309 11.037 19.0705 11.4641 19.0913 12.0058C19.0705 12.5683 18.8309 12.9849 18.3726 13.2558L9.37257 18.7558C8.87257 19.0683 8.37257 19.0891 7.87257 18.8183C7.37257 18.5266 7.11216 18.0891 7.09132 17.5058V6.50578C7.11216 5.92245 7.37257 5.48495 7.87257 5.19328C8.37257 4.92245 8.87257 4.93287 9.37257 5.22453L18.3726 10.7245Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_911_14164">
          <Rect
            width="24"
            height="24"
            rx="12"
            fill="white"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
