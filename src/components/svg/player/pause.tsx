import React from 'react'
import { Svg, G, Defs, Path, Rect, ClipPath } from 'react-native-svg'
import { ISVGProps } from '../type'

export const PauseIcon: React.FC<ISVGProps> = ({ size = 24, color = '#1C1C1E', fillOpacity = 1 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <G clipPath="url(#clip0_911_14164)">
        <Path
          d="M15.9783 6.12677C16.3296 6.14711 16.6282 6.29966 16.874 6.58443C17.1024 6.86919 17.2253 7.21497 17.2429 7.62178V16.4088C17.2253 16.8156 17.1024 17.1614 16.874 17.4461C16.6282 17.7106 16.3296 17.8529 15.9783 17.8733L15.1353 17.8123C14.7841 17.8123 14.4855 17.6699 14.2396 17.3851C14.0113 17.1207 13.8884 16.7749 13.8708 16.3478V7.56076C13.8884 7.15395 14.0113 6.81834 14.2396 6.55392C14.4855 6.28949 14.7841 6.14711 15.1353 6.12677H15.9783ZM8.86466 6.12677C9.21591 6.14711 9.51448 6.29966 9.76035 6.58443C9.98867 6.86919 10.1116 7.21497 10.1292 7.62178V16.4088C10.1116 16.8156 9.98867 17.1614 9.76035 17.4461C9.51448 17.7106 9.21591 17.8529 8.86466 17.8733H8.02165C7.6704 17.8733 7.37183 17.7309 7.12596 17.4461C6.89764 17.1614 6.7747 16.8054 6.75714 16.3783V7.59127C6.7747 7.18446 6.89764 6.83868 7.12596 6.55392C7.37183 6.28949 7.6704 6.14711 8.02165 6.12677H8.86466Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_911_14161">
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
