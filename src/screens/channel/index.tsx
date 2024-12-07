/* eslint-disable react/prop-types */
import React, { memo, useCallback, useEffect } from 'react'
import { style } from './styles'
import { cn, dimensions, useTheme, useThemedStyles } from '@src/theme'
import { BaseScreenComponent, IPropsScreen } from '../screen.base'
import { ScrollView } from 'react-native-gesture-handler'
import { Text, View } from '@src/components/common'
import { useOrientation } from '@src/modules/orientation'
import { cmToPx, isTablet } from '@src/modules/util-scale'
import { TabView } from '@src/components/element/tabview'
import { useTypedSelector } from '@src/redux/store'
import { selectAllChannel, selectChannelCatalog } from '@src/redux/slice/channel/selector'
import { DetailChannelCatalog } from '@src/redux/service/channel/type'
import { GridChannel } from './components/channel-grid'
import TabBar from '@src/components/element/tabview/components/TabBar'
import TabBarItem from '@src/components/element/tabview/components/TabBarItem'

const Screen: React.FC<IPropsScreen> = ({ route }) => {
  const styles = useThemedStyles(style)

  const { orientation } = useOrientation()

  const channelCatalog = useTypedSelector(selectChannelCatalog)

  const { commonColors, themeColors } = useTheme()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState(
    channelCatalog?.map?.((item) => ({ key: item.id, title: item.name, channels: item.channels })) || [],
  )

  const renderScene = useCallback(
    ({ route }) => {
      const channels = (route.channels as DetailChannelCatalog[]) || []
      return <GridChannel channels={channels} />
    },
    [routes],
  )

  return (
    <BaseScreenComponent routerName={route.name}>
      <View style={cn({ atomic: ['flex-row', 'justify-between', 'items-center', 'flex-1'], styles: [] })}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: dimensions.screen.width }}
          // mode="lazy"
          renderTabBar={(props) => {
            return (
              <TabBar
                {...props}
                style={{ backgroundColor: themeColors.background }}
                activeColor={themeColors.primary}
                inactiveColor={commonColors.white}
                indicatorStyle={cn({
                  atomic: ['rounded-lg'],
                  styles: [
                    {
                      backgroundColor: themeColors.primary,
                      height: cmToPx(0.05),
                    },
                  ],
                })}
                renderTabBarItem={(props) => {
                  return (
                    <TabBarItem
                      {...props}
                      labelStyle={cn({
                        atomic: ['font-body'],
                        styles: [
                          {
                            fontWeight: props.focused ? 'bold' : '500',
                          },
                        ],
                      })}
                    />
                  )
                }}
              />
            )
          }}
        />
      </View>
    </BaseScreenComponent>
  )
}

export default memo(Screen)
