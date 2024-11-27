import { EventEmitter } from 'eventemitter3'
import {
  IConfigBack,
  IConfigNavigate,
  IConfigReset,
  INavigation,
  ParamList,
  ScreenParamsPair,
} from './navigation.interface'
import { NavigationContainerRefWithCurrent, NavigationState } from '@react-navigation/native'
import { useEffect } from 'react'
import Toast, { ToastShowParams } from 'react-native-toast-message'

enum EnumEventNavigation {
  ON_BACK_NAVIGATION = 'onBackNavigation',
  ON_LOGIN_CANCEL = 'onLoginCancel',
  ON_LOGIN_SUCCESS = 'onLoginSuccess',
  ON_LOGOUT_SUCCESS = 'onLogoutSuccess',
}

export const useListenLogin = () => {
  const dispatchEventLoginSuccess = () => {
    NavigationService.emit(EnumEventNavigation.ON_LOGIN_SUCCESS)
  }

  const dispatchEventLogoutSuccess = () => {
    NavigationService.emit(EnumEventNavigation.ON_LOGOUT_SUCCESS)
  }

  useEffect(() => {
    return () => {
      NavigationService.emit(EnumEventNavigation.ON_LOGIN_CANCEL)
    }
  }, [])

  return {
    dispatchEventLoginSuccess,
    dispatchEventLogoutSuccess,
  }
}

class NavigationServiceClass extends EventEmitter {
  private static instance: NavigationServiceClass | undefined
  private navigation: NavigationContainerRefWithCurrent<ParamList> | undefined
  private currentScreen: string = ''

  public static getInstance(): NavigationServiceClass {
    if (!this.instance) {
      this.instance = new NavigationServiceClass()
    }
    return this.instance
  }

  public static clear(config?: { callback?: Function }) {
    this.instance?.destroy()
    config?.callback?.()
    delete this.instance
  }

  constructor() {
    super()
  }

  public setNavigation(navigation?: NavigationContainerRefWithCurrent<ParamList>) {
    if (!navigation) {
      return
    }
    this.navigation = navigation
  }

  public setCurrentScreen(currentScreen: string) {
    this.currentScreen = currentScreen
  }

  public getCurrentScreen(): string {
    return this.currentScreen
  }

  private destroy() {}

  public getContainer(): INavigation | undefined {
    return this.navigation
  }

  public navigate<RouteName extends keyof ParamList>(options: ScreenParamsPair<ParamList, RouteName>): void {
    this.navigation?.navigate(options)
  }

  public reset(state: IConfigReset | NavigationState) {
    this.navigation?.resetRoot(state)
  }

  public goBack(config?: IConfigBack) {
    this.navigation?.goBack()
  }

  public showToast(config: ToastShowParams) {
    Toast.show(config)
  }
}

export const NavigationService = new NavigationServiceClass()
