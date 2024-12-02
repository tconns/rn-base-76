import React from 'react'
import { cn, ThemeProvider, useTheme } from '@src/theme'
import { StatusBar, View, Text, FlatList } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { GestureDetectorProvider } from 'react-native-screens/gesture-handler'
// import { Provider } from 'react-redux'
import { KeyboardProvider } from 'react-native-keyboard-controller'

import { FlashList } from '@shopify/flash-list'
import TurboImage from 'react-native-turbo-image'
import { AppNavigationContainer } from '@src/navigation'
import { OrientationProvider } from '@src/modules/orientation'
import { PlayerProvider, PlayerGestureView } from '@src/player'

const App: React.FC<{}> = () => {
  const { themeColors, isDarkTheme } = useTheme()
  return (
    <>
      <StatusBar
        backgroundColor={themeColors.background}
        barStyle={!isDarkTheme ? 'dark-content' : 'light-content'}
      />
      <AppNavigationContainer />
      {/* <View
        style={cn({
          atomic: ['flex-row', 'h-screen', 'w-screen'],
        })}
      >
        <View
          style={cn({
            atomic: ['h-screen'],
            styles: [
              {
                width: '50%',
              },
            ],
          })}
        >
          <FlashList
            data={Array.from({ length: 1000 })}
            renderItem={({ item, index }) => (
              <TurboImage
                source={{
                  uri: `https://picsum.photos/200/300?random=${index}`,
                }}
                style={{ width: 300, height: 300 }}
              />
            )}
            estimatedItemSize={300}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View
          style={cn({
            atomic: ['h-screen'],
            styles: [
              {
                width: '50%',
              },
            ],
          })}
        >
          <FlatList
            data={Array.from({ length: 1000 })}
            renderItem={({ item, index }) => (
              <TurboImage
                source={{
                  uri: `https://picsum.photos/200/300?random=${index}`,
                }}
                style={{ width: 300, height: 300 }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View> */}
    </>
  )
}

const AppContainer = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <GestureHandlerRootView>
          <KeyboardProvider statusBarTranslucent>
            <GestureDetectorProvider>
              <PlayerProvider>
                <OrientationProvider>
                  <App />
                  <PlayerGestureView />
                </OrientationProvider>
              </PlayerProvider>
            </GestureDetectorProvider>
          </KeyboardProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default AppContainer
