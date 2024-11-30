import React, { memo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ChannelScreen, HomeScreen, MoreScreen, CompetitionScreen, ExploreScreen } from '@src/screens'
import { cn, useTheme } from '@src/theme'
import { EnumRouterName } from '../types'
import { Text } from '@src/components/common'
import { DefineI18n, useTranslation } from '@src/i18n'
import { ChannelIcon, HomeIcon, ExploreIcon, CompetitionIcon, MoreIcon } from '@src/components/svg'
import { fontScale } from '@src/modules/util-scale'

const Tab = createBottomTabNavigator()

const TabScreen = () => {
  const { t } = useTranslation()
  const { themeColors, commonColors, spacing } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: themeColors.menuBottom,
          height: 65,
          paddingTop: spacing['sm-4'],
          borderTopWidth: 0,
          // borderTopColor: `rgba(0,0,0 / 0.1)`,
          // shadowColor: colors.border,
          // shadowOffset: {
          //   width: 0,
          //   height: 4,
          // },
          // shadowOpacity: 0.3,
          // shadowRadius: 6,
          // elevation: 14,
          // borderTopRightRadius: fontScale(20),
          // borderTopLeftRadius: fontScale(20)
        },
        tabBarActiveTintColor: themeColors.primary,
        tabBarInactiveTintColor: commonColors.gray2,
        tabBarLabelStyle: {
          marginBottom: spacing['sm-4'],
          height: 0,
        },
        tabBarIconStyle: {
          marginBottom: spacing['sm-2'],
        },
      }}
    >
      <Tab.Screen
        name={EnumRouterName.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <HomeIcon
                color={color}
                size={32}
              />
            )
          },
          tabBarLabel: ({ color, position }) => {
            return (
              <Text
                type="smallCap-medium-10"
                style={cn({
                  atomic: [],
                  styles: [{ color, marginLeft: position === 'beside-icon' ? spacing['sm-16'] : 0 }],
                })}
              >
                {t(DefineI18n.tabs.home)}
              </Text>
            )
          },
        }}
      />
      <Tab.Screen
        name={EnumRouterName.CHANNEL}
        component={ChannelScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <ChannelIcon
                color={color}
                size={32}
              />
            )
          },
          tabBarLabel: ({ color, position }) => {
            return (
              <Text
                type="smallCap-medium-10"
                style={cn({
                  atomic: [],
                  styles: [{ color, marginLeft: position === 'beside-icon' ? spacing['sm-16'] : 0 }],
                })}
              >
                {t(DefineI18n.tabs.channel)}
              </Text>
            )
          },
        }}
      />

      <Tab.Screen
        name={EnumRouterName.EXPLORE}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <ExploreIcon
                color={color}
                size={32}
              />
            )
          },
          tabBarLabel: ({ color, position }) => {
            return (
              <Text
                type="smallCap-medium-10"
                style={cn({
                  atomic: [],
                  styles: [{ color, marginLeft: position === 'beside-icon' ? spacing['sm-16'] : 0 }],
                })}
              >
                {t(DefineI18n.tabs.explore)}
              </Text>
            )
          },
        }}
      />
      <Tab.Screen
        name={EnumRouterName.COMPETITION}
        component={CompetitionScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <CompetitionIcon
                color={color}
                size={32}
              />
            )
          },
          tabBarLabel: ({ color, position }) => {
            return (
              <Text
                type="smallCap-medium-10"
                style={cn({
                  atomic: [],
                  styles: [{ color, marginLeft: position === 'beside-icon' ? spacing['sm-16'] : 0 }],
                })}
              >
                {t(DefineI18n.tabs.competition)}
              </Text>
            )
          },
        }}
      />
      <Tab.Screen
        name={EnumRouterName.MORE}
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MoreIcon
                color={color}
                size={32}
              />
            )
          },
          tabBarLabel: ({ color, position }) => {
            return (
              <Text
                type="smallCap-medium-10"
                style={cn({
                  atomic: [],
                  styles: [{ color, marginLeft: position === 'beside-icon' ? spacing['sm-16'] : 0 }],
                })}
              >
                {t(DefineI18n.tabs.more)}
              </Text>
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default memo(TabScreen)
