import React from 'react'
import { Svg, G, Defs, Path, Rect, ClipPath } from 'react-native-svg'
import { ISVGProps } from '../type'

export const HomeIcon: React.FC<ISVGProps> = ({ size = 33, color = '#CC0000', fillOpacity = 1 }) => {
  return (
    <Svg
      width={size}
      height={(size / 33) * 32}
      viewBox="0 0 33 32"
      fill="none"
    >
      <G clipPath="url(#clip0_4859_11320)">
        <Path
          d="M27.5267 14.9911C27.502 15.312 27.3786 15.5836 27.1564 15.8058C26.9342 16.028 26.6626 16.1514 26.3417 16.1761H25.1566L25.1937 22.1012C25.169 22.2 25.1566 22.2987 25.1566 22.3975V22.99C25.1566 23.4097 25.0085 23.7553 24.7123 24.0269C24.4407 24.3232 24.0951 24.4713 23.6754 24.4713H23.0828C23.0582 24.4713 23.0458 24.4713 23.0458 24.4713C23.0211 24.4466 22.9964 24.4466 22.9717 24.4713C22.9224 24.4466 22.8853 24.4466 22.8606 24.4713C22.836 24.4713 22.8236 24.4713 22.8236 24.4713H20.7128C20.2931 24.4713 19.9475 24.3232 19.6759 24.0269C19.3796 23.7553 19.2315 23.4097 19.2315 22.99V19.7312C19.2315 19.3856 19.1204 19.1016 18.8982 18.8794C18.676 18.6573 18.3921 18.5462 18.0465 18.5462H15.6764C15.3308 18.5462 15.0469 18.6573 14.8247 18.8794C14.6025 19.1016 14.4914 19.3856 14.4914 19.7312V22.99C14.4914 23.4097 14.3433 23.7553 14.047 24.0269C13.7754 24.3232 13.4298 24.4713 13.0101 24.4713H10.9363C10.8869 24.4713 10.8376 24.4713 10.7882 24.4713C10.7388 24.4713 10.6894 24.4713 10.6401 24.4713H10.0475C9.62785 24.4713 9.28221 24.3232 9.01065 24.0269C8.71439 23.7553 8.56626 23.4097 8.56626 22.99V18.8424C8.56626 18.8177 8.56626 18.7807 8.56626 18.7313V16.1761H7.38123C7.0356 16.1514 6.75169 16.028 6.5295 15.8058C6.3073 15.5836 6.19621 15.312 6.19621 14.9911C6.19621 14.6454 6.31965 14.3492 6.56653 14.1023L16.0467 5.80712C16.3183 5.58492 16.5899 5.48617 16.8615 5.51086C17.1577 5.51086 17.4293 5.59727 17.6762 5.77008L27.1193 14.1023C27.4156 14.3492 27.5514 14.6454 27.5267 14.9911Z"
          fill={color}
          fillOpacity={fillOpacity}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_4859_11320">
          <Rect
            x="0.5"
            width="32"
            height="32"
            rx="16"
            fill="white"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}