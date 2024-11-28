/* eslint-disable react/prop-types */
import React, { memo, useCallback, useEffect } from 'react'
import { style } from './styles'
import { cn, useTheme, useThemedStyles } from '@src/theme'
import { BaseScreenComponent, IPropsScreen } from '../screen.base'
import { ScrollView } from 'react-native-gesture-handler'
import { Text, View } from '@src/components/common'
import Orientation from '@src/modules/orientation'

const Screen: React.FC<IPropsScreen> = ({ route }) => {
  const styles = useThemedStyles(style)

  const { commonColors } = useTheme()

  useEffect(() => {
    console.log('Hello, World!', Orientation.getInitialOrientation())
    Orientation.addDeviceOrientationListener((ori) => {
      console.log(ori)
    })
  }, [])

  return (
    <BaseScreenComponent routerName={route.name}>
      <View style={cn({ atomic: ['flex-row', 'justify-between', 'items-center'], styles: [] })}>
        <View>
          <Text>Welcome Back, Fuck</Text>
        </View>
      </View>
    </BaseScreenComponent>
  )
}

export default memo(Screen)
