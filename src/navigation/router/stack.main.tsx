import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RouterObject } from '../config'
import { createStaticNavigation } from '@react-navigation/native'
import { ParamList } from '../navigation.interface'
import { EnumRouterName } from '../types'

export const RootStack = createNativeStackNavigator<ParamList>({
  screenOptions: {
    headerShown: false,
    animation: 'default',
    freezeOnBlur: true,
    gestureEnabled: true,
    gestureDirection: 'horizontal', 
  },
  screens: {
    ...RouterObject,
    [EnumRouterName.TAB]: {
      screen: RouterObject[EnumRouterName.TAB].screen,
      initialParams: {
        screen: EnumRouterName.HOME,
      },
      options: (props) => {
        return {
          headerShown: false,
        }
      },
    },
  },
})

export const Navigation = createStaticNavigation(RootStack)
