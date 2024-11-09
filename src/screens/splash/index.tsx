/* eslint-disable react/prop-types */
import React, { memo, useCallback, useEffect } from 'react'
import { style } from './styles'
import { cn, useTheme, useThemedStyles } from '@src/theme'
import { BaseScreenComponent, IPropsScreen } from '../screen.base'
import { ScrollView } from 'react-native-gesture-handler'
import { Text, View } from '@src/components/common'
import { EnumRouterName, NavigationService } from '@src/navigation'

const Screen: React.FC<IPropsScreen> = ({ route }) => {
  const styles = useThemedStyles(style)

  const { commonColors } = useTheme()

  useEffect(() => {
    console.log('Hello, World!')
    requestAnimationFrame(() => {
      NavigationService.navigate(EnumRouterName.TAB, {
        screen: EnumRouterName.HOME,
        params: {
          
        }
      })
    })
  }, [])

  return (
    <BaseScreenComponent routerName={route.name}>
      <View style={cn({ atomic: ['flex-row', 'justify-between', 'items-center'], styles: [] })}>
        <View>
          <Text type='text-2xl-bold'>Welcome Splash,</Text>
        </View>
      </View>
    </BaseScreenComponent>
  )
}

export default memo(Screen)
