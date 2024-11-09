import { EnumRouterName } from '@src/navigation'
import {
  NavigationContainerRefWithCurrent,
  NavigationHelpers,
  NavigationState,
  ParamListBase,
  PartialState,
  RouteProp,
} from '@react-navigation/native'

export interface ParamList extends ParamListBase {
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
  [Screen in keyof ParamList]: undefined extends ParamList[Screen] // Params are either undefined or a union with undefined
    ?
        | [screen: Screen] // if the params are optional, we don't have to provide it
        | [screen: Screen, params: ParamList[Screen]]
    : [screen: Screen, params: ParamList[Screen]]
}[RouteName]
