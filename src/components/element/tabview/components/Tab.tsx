import React from 'react'
import type { ViewStyle } from 'react-native'
import type { StyleProp } from 'react-native'
import { View } from 'react-native'
import { useHandleTabLayout } from '../hooks/useTabLayout'

type TabProps = {
  index: number
  noOfRoutes: number
  style?: StyleProp<ViewStyle>
  children?: any
  onLayout: (event: any) => void
}
const Tab: React.FC<TabProps> = ({ index, noOfRoutes, style, children, onLayout }) => {
  const { handleTabLayout } = useHandleTabLayout(index, noOfRoutes, onLayout)

  return (
    <View
      onLayout={handleTabLayout}
      style={style}
    >
      {children}
    </View>
  )
}

export default React.memo(Tab)
