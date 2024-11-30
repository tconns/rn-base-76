import { cmToPx } from '@src/modules/util-scale'
import { TypePlayerShow } from '@src/player/provider'
import { usePlayer } from '@src/player/usePlayer'
import { cn } from '@src/theme'
import React from 'react'
import { View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  cancelAnimation,
  runOnJS,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'

export const PlayerView = () => {
  const { showState } = usePlayer()

  const videoScale = useSharedValue(1)
  const videoTransY = useSharedValue(0)
  const panIsVertical = useSharedValue(false)

  const defaultPanGesture = Gesture.Pan()
    .onStart(({ velocityY, velocityX }) => {
      panIsVertical.value = Math.abs(velocityY) > Math.abs(velocityX)
      console.log('panIsVertical', panIsVertical.value)
    })
    .onUpdate(({ translationY, translationX }) => {
      console.log('panIsVertical', translationY, translationX)
      if (translationY < 0 && Math.abs(translationY) < 40) {
        videoScale.value = Math.abs(translationY) * 0.012 + 1
      }
    })
    .onEnd(({ translationY }, success) => {
      if (!panIsVertical.value && !success) {
        return
      }
      videoTransY.value = 0
      videoScale.value = withTiming(1)
    })

  const gesture = Gesture.Race(defaultPanGesture)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: videoTransY.value }, { scale: videoScale.value }],
    }
  })

  if (showState === TypePlayerShow.NONE) {
    return null
  }

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={cn({
          atomic: ['flex-1', 'absolute', 'z-10'],
          styles: [
            {
              backgroundColor: 'red',
              height: cmToPx(2),
              width: cmToPx(2),
            },
            animatedStyle,
          ],
        })}
      />
    </GestureDetector>
  )
}
