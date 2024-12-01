import { cmToPx } from '@src/modules/util-scale'
import { TypePlayerShow } from '@src/player/provider'
import { usePlayer } from '@src/player/usePlayer'
import { cn, dimensions } from '@src/theme'
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
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const RATIO_ASPECT = 16 / 9

const widthDevice = dimensions.screen.width
const heightDevice = dimensions.screen.height

const minWidth = widthDevice / RATIO_ASPECT

const PADDING_BOTTOM = 60

const MIN_SCALE = 0.6
const MIN_DELTA_TRANS_Y = 40
const BOUNCE_DELTA_TRANS_Y = 200

export const PlayerView = () => {
  const { showState, setShowState } = usePlayer()

  const { bottom, top } = useSafeAreaInsets()

  const isNormal = showState === TypePlayerShow.BIG

  const playerHeight = useSharedValue(widthDevice / RATIO_ASPECT)

  const playerScale = useSharedValue(1)
  const playerTransY = useSharedValue(top)
  const playerTransX = useSharedValue(0)
  const panIsVertical = useSharedValue(false)

  const defaultPanGesture = Gesture.Pan()
    .onStart(({ velocityY, velocityX }) => {
      panIsVertical.value = Math.abs(velocityY) > Math.abs(velocityX)
    })
    .onUpdate(({ translationY, translationX }) => {
      const deltaHeight = (widthDevice - minWidth) / RATIO_ASPECT / 2
      const minY = heightDevice - PADDING_BOTTOM - playerHeight.value - bottom - top+ deltaHeight
      
      switch (showState) {
        case TypePlayerShow.BIG:
          if (translationY > 0 && Math.abs(translationY) > MIN_DELTA_TRANS_Y) {
            playerTransY.value = Math.min(translationY, 300)
            playerScale.value = Math.max(1 - Math.abs(translationY) / 600, MIN_SCALE)
          }
          break
        case TypePlayerShow.MINI:
          if (translationY < 0 && Math.abs(translationY) > MIN_DELTA_TRANS_Y) {
            playerTransY.value = minY + Math.max(translationY, -300)
          }
          break
        default:
          break
      }
    })
    .onEnd(({ translationY }, success) => {
      if (!panIsVertical.value && !success) {
        return
      }
      const deltaHeight = (widthDevice - minWidth) / RATIO_ASPECT / 2
      const minY = heightDevice - PADDING_BOTTOM - playerHeight.value - bottom - top + deltaHeight

      switch (showState) {
        case TypePlayerShow.BIG:
          if (translationY > BOUNCE_DELTA_TRANS_Y) {
            runOnJS(setShowState)(TypePlayerShow.MINI)
            playerHeight.value = withTiming(widthDevice / RATIO_ASPECT)
            playerTransY.value = withTiming(minY)
            playerTransX.value = withTiming((widthDevice - minWidth) / 2)
            playerScale.value = withTiming(MIN_SCALE)
            return
          }
          playerHeight.value = withTiming(widthDevice / RATIO_ASPECT)
          playerTransY.value = withTiming(top)
          playerTransX.value = withTiming(0)
          playerScale.value = withTiming(1)
          break
        case TypePlayerShow.MINI:
          if (translationY < -BOUNCE_DELTA_TRANS_Y) {
            runOnJS(setShowState)(TypePlayerShow.BIG)
            playerHeight.value = withTiming(widthDevice / RATIO_ASPECT)
            playerTransY.value = withTiming(top)
            playerTransX.value = withTiming(0)
            playerScale.value = withTiming(1)
            return
          }
          playerHeight.value = withTiming(widthDevice / RATIO_ASPECT)
          playerTransY.value = withTiming(minY)
          playerTransX.value = withTiming((widthDevice - minWidth) / 2)
          playerScale.value = withTiming(MIN_SCALE)
          break
        default:
          break
      }
    })

  const gesture = Gesture.Race(defaultPanGesture)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: playerTransY.value }, { translateX: playerTransX.value }, { scale: playerScale.value }],
      height: playerHeight.value,
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
              width: widthDevice,
            },
            animatedStyle,
          ],
        })}
      />
    </GestureDetector>
  )
}
