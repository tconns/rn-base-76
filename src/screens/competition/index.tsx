/* eslint-disable react/prop-types */
import React, { memo, useCallback, useEffect } from 'react'
import { style } from './styles'
import { cn, useTheme, useThemedStyles } from '@src/theme'
import { BaseScreenComponent, IPropsScreen } from '../screen.base'
import { ScrollView } from 'react-native-gesture-handler'
import { Text, View } from '@src/components/common'
import { useOrientation } from '@src/modules/orientation'
import { cmToPx, isTablet } from '@src/modules/util-scale'

const Screen: React.FC<IPropsScreen> = ({ route }) => {
  const styles = useThemedStyles(style)

  const { orientation } = useOrientation()

  const { commonColors } = useTheme()

  return (
    <BaseScreenComponent routerName={route.name}>
      <View style={cn({ atomic: ['flex-row', 'justify-between', 'items-center'], styles: [] })}>
        <View>
          <Text>Welcome Back, Competition</Text>
        </View>
        <View
          style={cn({
            styles: [
              {
                width: cmToPx(0.5),
                height: cmToPx(0.5),
                backgroundColor: commonColors.red
              },
            ],
          })}
        ></View>
      </View>
    </BaseScreenComponent>
  )
}

export default memo(Screen)
