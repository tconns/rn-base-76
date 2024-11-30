import React, { memo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '@src/screens'
import { cn,  useTheme } from '@src/theme'
import { EnumRouterName } from '../types'
import { Text } from '@src/components/common'
import { DefineI18n, useTranslation } from '@src/i18n'
import { HomeIcon } from '@src/components/svg'

const fontScale = (size: number) => size

const IconSize = fontScale(23)

const Tab = createBottomTabNavigator()

const TabScreen = () => {
  const { t } = useTranslation()
  const { themeColors, commonColors } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: themeColors.background,
          height: fontScale(70),
          paddingTop: fontScale(10),
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
          marginBottom: 5,
          height: 0,
          // marginBottom: 0
        },
        tabBarIconStyle: {
          marginBottom: 0,
          // marginBottom: fontScale(5),
        },
      }}
    >
      <Tab.Screen
        name={EnumRouterName.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <HomeIcon color={color} size={32} />
            )
          },
          tabBarLabel: ({ color, position }) => {
            return (
              <Text
                type="caption-regular-12"
                style={cn({
                  atomic: [],
                  styles: [{ color, marginLeft: position === 'beside-icon' ? fontScale(15) : 0 }],
                })}
              >
                {t(DefineI18n.tabs.home)}
              </Text>
            )
          },
        }}
      />
      <Tab.Screen
        name={EnumRouterName.PROFILE}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              null
            )
          },
          tabBarLabel: ({ color, position }) => {
            // return null
            return (
              <Text
                type="caption-regular-12"
                style={cn({
                  atomic: [],
                  styles: [{ color, marginLeft: position === 'beside-icon' ? fontScale(15) : 0 }],
                })}
              >
                {t(DefineI18n.tabs.account)}
              </Text>
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default memo(TabScreen)
