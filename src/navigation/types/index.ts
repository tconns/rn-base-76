import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

export enum EnumRouterName {
  SPLASH = '/splash/',
  TAB = '/tab/',
  HOME = '/home/',
  CHANNEL = '/channel/',
  COMPETITION = '/competition/',
  EXPLORE = '/explore/',
  MORE = '/more/',
}

export interface IRoute {
  key: string
  name: string
}

export interface IRouterScene {
  key: string
  title: string
}

export interface IRouter {
  key: EnumRouterName
  component: any
  keepAlive?: boolean
  screenOptions?: NativeStackNavigationOptions | BottomTabNavigationOptions
}
