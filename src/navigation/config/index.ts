import { SplashScreen } from '@src/screens'
import { EnumRouterName, IRouter } from '../types'
import TabScreen from '../router/tab.main'

export const RouterConfig: IRouter[] = [
  {
    key: EnumRouterName.SPLASH,
    component: SplashScreen,
    keepAlive: true,
  },
  {
    key: EnumRouterName.TAB,
    component: TabScreen,
    keepAlive: true,
  },
]

export const RouterObject = RouterConfig.reduce((acc, route) => {
  acc[route.key] = { screen: route.component }
  return acc
}, {} as { [key in EnumRouterName]: { screen: React.ComponentType<any> } })
