import { EnumRouterName } from '@src/navigation'
import {
  NavigationContainerRefWithCurrent,
  NavigationHelpers,
  NavigationState,
  // ParamListBase,
  PartialState,
  RouteProp,
} from '@react-navigation/native'

export type ParamListBase = Record<EnumRouterName, object | undefined>
export interface ParamList extends ParamListBase {
  [EnumRouterName.TAB]: {
    screen?: EnumRouterName
  }
  [EnumRouterName.HOME]: {
    id: number
  }
}

export type INavigation = NavigationContainerRefWithCurrent<ParamList>

export interface IConfigNavigate {
  routerName: EnumRouterName
  key?: string
  params?: ParamList[EnumRouterName]
  merge?: boolean
}
export interface IConfigBack {}

export interface IConfigReset extends PartialState<NavigationState> {}

export type ScreenParamsPair<ParamList extends ParamListBase, RouteName extends keyof ParamList> = {
  [Screen in keyof ParamList]: {
    name: Screen
    params: ParamList[Screen]
    path?: string
    merge?: boolean
  }
}[RouteName]
