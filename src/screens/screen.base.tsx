import React, { memo, useEffect, useCallback, useRef, createContext, useContext } from 'react'
import { cn, useTheme } from '@src/theme'
import { BackHandler, StyleSheet } from 'react-native'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'
// import { INavigation, IRoute, NavigationService } from '@src/navigation'
import { SafeAreaView } from 'react-native-safe-area-context'

export const useBaseScreen = (props: { onFocusScreen?: () => void; onBlurScreen: () => void }) => {
  useEffect(() => {
    props.onFocusScreen?.()
    return () => {
      props.onBlurScreen?.()
    }
  }, [props])
}

interface IConfigScreen {
  screen: string
}

export const ScreenContext = createContext<IConfigScreen>({ screen: 'root' })

export const useScreen = (): IConfigScreen => useContext(ScreenContext)

export interface IPropsScreen {
  navigation: any
  route: any
}

interface IPropsBaseScreen {
  routerName: string
  children: any
  isLoading?: boolean
  disableSafe?: boolean
  enableBackHandler?: boolean
}

export const BaseScreenComponent: React.FC<IPropsBaseScreen> = ({
  children,
  routerName,
  disableSafe,
  isLoading = false,
  enableBackHandler = false,
}) => {
  const isFocused = useIsFocused()

  const { themeColors } = useTheme()

  const refBackPress = useRef(false)

  useEffect(() => {
    // isFocused && NavigationService.setCurrentScreen(routerName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused])

  const backHandlerCallback = useCallback(() => {
    const onBackPress = () => {
      // if (NavigationService.getCurrentScreen() !== routerName) {
      //   return false
      // }

      // if (refBackPress.current) {
      //   BackHandler.exitApp() // Thoát app nếu nút back đã được bấm một lần trước đó
      //   return true
      // }

      // refBackPress.current = true

      // NavigationService.showToast({
      //   type: 'info',
      //   text1: 'Bấm Back thêm 1 lần nữa để thoát ứng dụng!',
      //   visibilityTime: 1000,
      //   autoHide: true,
      //   bottomOffset: 80,
      //   position: 'bottom',
      // })

      // setTimeout(() => {
      //   refBackPress.current = false
      // }, 1500)
      return true
    }

    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress)

    return () => subscription.remove()
  }, [])

  useFocusEffect(() => {
    if (!enableBackHandler) return
    backHandlerCallback()
  })

  return (
    <ScreenContext.Provider value={{ screen: routerName }}>
      <SafeAreaView
        edges={{ bottom: 'off', top: disableSafe ? 'off' : 'additive' }}
        style={cn({ atomic: ['flex-1'], styles: [{ backgroundColor: themeColors.background }] })}
      >
        {children}
      </SafeAreaView>
    </ScreenContext.Provider>
  )
}
