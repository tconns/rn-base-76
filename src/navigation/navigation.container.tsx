import * as React from 'react'
import { createNavigationContainerRef, Theme } from '@react-navigation/native'
import { INavigation, ParamList } from './navigation.interface'
import { NavigationService } from './navigation.service'
import { cn, KEYS_FONT, useTheme } from '@src/theme'
import { View } from '@src/components/common'
import { Navigation } from './router/stack.main'

export const AppNavigationContainer = () => {
  const navigationRef: INavigation = createNavigationContainerRef<ParamList>()

  const { commonColors, themeColors, isDarkTheme } = useTheme()

  const customTheme: Theme = {
    dark: isDarkTheme,
    colors: {
      primary: themeColors.primary,
      background: themeColors.background,
      card: commonColors.cyan,
      text: themeColors.text,
      border: commonColors.gray1,
      notification: commonColors.green,
    },
    fonts: {
      regular: {
        fontFamily: KEYS_FONT.regular,
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: KEYS_FONT.medium,
        fontWeight: '500',
      },
      bold: {
        fontFamily: KEYS_FONT.bold,
        fontWeight: 'bold',
      },
      heavy: {
        fontFamily: KEYS_FONT.semiBold,
        fontWeight: '800',
      },
    },
  }

  React.useEffect(() => {
    NavigationService.setNavigation(navigationRef as INavigation)
  }, [navigationRef])

  return (
    //FIX-NOTED: Bọc bằng View để xử lý vấn đề màu mặc định Navigation
    <View style={cn({ atomic: ['flex-1'], styles: [{ backgroundColor: themeColors.background }] })}>
      <Navigation
        ref={navigationRef as any}
        theme={customTheme}
        onReady={() => NavigationService.setNavigation(navigationRef as INavigation)}
      />
    </View>
  )
}
