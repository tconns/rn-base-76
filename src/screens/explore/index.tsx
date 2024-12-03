/* eslint-disable react/prop-types */
import React, { memo, useCallback, useEffect, useState } from 'react'
import { style } from './styles'
import { cn, dimensions, useTheme, useThemedStyles } from '@src/theme'
import { BaseScreenComponent, IPropsScreen } from '../screen.base'
import { Gesture, GestureDetector, ScrollView } from 'react-native-gesture-handler'
import { Text, View } from '@src/components/common'
import { useOrientation } from '@src/modules/orientation'
import { cmToPx, isTablet } from '@src/modules/util-scale'
import { FlatList } from 'react-native'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import TurboImage from 'react-native-turbo-image'

const heightDevice = dimensions.screen.height
const widthDevice = dimensions.screen.width

const Screen: React.FC<IPropsScreen> = ({ route }) => {
  const styles = useThemedStyles(style)

  const tmpTranslationY = useSharedValue(0)
  const opacity = useSharedValue(0.8)

  const [realIndex, setRealIndex] = useState(0)

  const refList = React.useRef<FlatList>(null)

  const refScrollPosition = React.useRef<number>(0)

  const [data, setData] = React.useState([
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
    { id: 5, name: 'E' },
    { id: 6, name: 'F' },
  ])

  const { orientation } = useOrientation()

  const { commonColors } = useTheme()

  const panIsVertical = useSharedValue(false)

  const handleScroll = (translationY: number) => {
    if (refList.current) {
      refList.current.scrollToOffset({
        offset: refScrollPosition.current - translationY * 0.012,
        animated: false,
      })
    }
  }

  const handleScrollIndex = (index: number) => {
    if (refList.current) {
      refList.current.scrollToIndex({ index: index, animated: true })
    }
  }

  const singleTapHandle = Gesture.Pan()
    .onStart(({ velocityY, velocityX }) => {
      panIsVertical.value = Math.abs(velocityY) > Math.abs(velocityX)
    })
    .onUpdate(({ translationY, translationX }) => {
      tmpTranslationY.value = translationY
      runOnJS(handleScroll)(translationY)
      opacity.value = 0
    })
    .onEnd(({ translationY, translationX }, success) => {
      if (!panIsVertical.value && !success) {
        return
      }
      opacity.value = withTiming(0.8)
      if (tmpTranslationY.value < -100) {
        const nextIndex = Math.min(data.length - 1, realIndex + 1)
        runOnJS(setRealIndex)(nextIndex)
        runOnJS(handleScrollIndex)(nextIndex)
        tmpTranslationY.value = 0
        return
      }
      if (tmpTranslationY.value > 100) {
        const prevIndex = Math.max(0, realIndex - 1)
        runOnJS(setRealIndex)(prevIndex)
        runOnJS(handleScrollIndex)(prevIndex)
        tmpTranslationY.value = 0
        return
      }
      runOnJS(handleScrollIndex)(realIndex)
      tmpTranslationY.value = withTiming(0)
    })

  const gesture = Gesture.Race(singleTapHandle)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    }
  })

  return (
    <BaseScreenComponent routerName={route.name}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={cn({ atomic: ['flex-row', 'justify-between', 'items-center'], styles: [] })}>
          <FlatList
            ref={refList}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={cn({ styles: [{ flex: 1, height: heightDevice }] })}>
                <TurboImage
                  source={{
                    uri: 'https://cloud.githubusercontent.com/assets/1567433/9781817/ecb16e82-57a0-11e5-9b43-6b4f52659997.jpg',
                  }}
                  cachePolicy="urlCache"
                  style={{ width: widthDevice, height: heightDevice }}
                  resizeMode='stretch'
                />
              </View>
            )}
            onScroll={(event) => {
              refScrollPosition.current = event.nativeEvent.contentOffset.y
            }}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
          <Animated.View
            style={cn({
              atomic: ['absolute', 'top-0', 'bottom-0', 'left-0', 'right-0', 'bg-black'],
              styles: [animatedStyle],
            })}
          />
        </Animated.View>
      </GestureDetector>
    </BaseScreenComponent>
  )
}

export default memo(Screen)
