import { cmToPx } from '@src/modules/util-scale'
import { TypePlayerShow } from '@src/player/provider'
import { usePlayer } from '@src/player/usePlayer'
import { cn, commonColor, dimensions } from '@src/theme'
import React, { useEffect } from 'react'
import { StatusBar, View } from 'react-native'
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
import { PlayerContainer } from '../player-container'
import { useOrientation } from '@src/modules/orientation'
import { SafeAreaView } from 'react-native-safe-area-context'

const RATIO_ASPECT = 16 / 9

const widthDevice = dimensions.screen.width
const heightDevice = dimensions.screen.height

const minWidth = widthDevice / RATIO_ASPECT

const PADDING_BOTTOM = 50

const MIN_SCALE = 0.6
const MIN_DELTA_TRANS_Y = 40
const BOUNCE_DELTA_TRANS_Y = 100
const BOUNCE_DELTA_TRANS_X = 100
const BORDER_WIDTH = 2

export const PlayerGestureView = () => {
  const { showState, setShowState, isFullScreen, setIsFullScreen } = usePlayer()

  const { lockToLandscape, lockToPortrait } = useOrientation()

  const { bottom, top, left, right } = useSafeAreaInsets()

  const isNormal = showState === TypePlayerShow.BIG

  useEffect(() => {
    switch (showState) {
      case TypePlayerShow.NONE:
      case TypePlayerShow.BIG:
        playerHeight.value = withTiming(widthDevice / RATIO_ASPECT)
        playerWidth.value = withTiming(widthDevice)
        playerTransY.value = withTiming(top)
        playerTransX.value = withTiming(0)
        playerScale.value = withTiming(1)
        borderPlayer.value = withTiming(0)
        break
      case TypePlayerShow.MINI:
        playerHeight.value = withTiming(widthDevice / RATIO_ASPECT)
        playerWidth.value = withTiming(widthDevice)
        playerTransX.value = withTiming((widthDevice - minWidth) / 2 - 4 * BORDER_WIDTH)
        playerScale.value = withTiming(MIN_SCALE)
        borderPlayer.value = withTiming(BORDER_WIDTH)
        break
      case TypePlayerShow.FULL:
        playerHeight.value = withTiming(widthDevice)
        playerWidth.value = withTiming(heightDevice - left - right)
        playerTransX.value = withTiming(0)
        playerTransY.value = withTiming(0)
        playerScale.value = withTiming(1)
        borderPlayer.value = withTiming(0)
        break
      default:
        break
    }
  }, [showState])

  const playerHeight = useSharedValue(widthDevice / RATIO_ASPECT)
  const playerWidth = useSharedValue(widthDevice)

  const playerScale = useSharedValue(1)
  const playerTransY = useSharedValue(top)
  const playerTransX = useSharedValue(0)
  const borderPlayer = useSharedValue(0)

  const panIsVertical = useSharedValue(false)
  const doubleTapIsAlive = useSharedValue(false)

  const defaultPanGesture = Gesture.Pan()
    .onStart(({ velocityY, velocityX }) => {
      panIsVertical.value = Math.abs(velocityY) > Math.abs(velocityX)
    })
    .onUpdate(({ translationY, translationX }) => {
      const deltaHeight = (widthDevice - minWidth) / RATIO_ASPECT
      const minY = heightDevice - PADDING_BOTTOM - playerHeight.value - deltaHeight / 2

      switch (showState) {
        case TypePlayerShow.BIG:
          if (translationY > 0 && Math.abs(translationY) > MIN_DELTA_TRANS_Y) {
            playerTransY.value = Math.min(translationY, minY)
          }
          break
        case TypePlayerShow.MINI:
          if (!panIsVertical.value) {
            playerTransX.value = playerTransX.value + 0.02 * translationX
            return
          }
          if (translationY < 0 && Math.abs(translationY) > MIN_DELTA_TRANS_Y) {
            playerTransY.value = minY + Math.max(translationY, -minY)
          }
          break
        default:
          break
      }
    })
    .onEnd(({ translationY, translationX }, success) => {
      if (!panIsVertical.value && !success) {
        return
      }
      const deltaHeight = (widthDevice - minWidth) / RATIO_ASPECT
      const minY = heightDevice - PADDING_BOTTOM - playerHeight.value - deltaHeight / 2

      switch (showState) {
        case TypePlayerShow.BIG:
          if (translationY > BOUNCE_DELTA_TRANS_Y) {
            runOnJS(setShowState)(TypePlayerShow.MINI)
            playerTransY.value = withTiming(minY)
            return
          }
          playerHeight.value = withTiming(widthDevice / RATIO_ASPECT)
          playerWidth.value = withTiming(widthDevice)
          playerTransY.value = withTiming(top)
          playerTransX.value = withTiming(0)
          playerScale.value = withTiming(1)
          borderPlayer.value = withTiming(0)
          break
        case TypePlayerShow.MINI:
          if (!panIsVertical.value) {
            if (translationX < -BOUNCE_DELTA_TRANS_X || translationX > BOUNCE_DELTA_TRANS_X) {
              runOnJS(setShowState)(TypePlayerShow.NONE)
              return
            }
            playerHeight.value = withTiming(widthDevice / RATIO_ASPECT)
            playerWidth.value = withTiming(widthDevice)
            playerTransY.value = withTiming(minY)
            playerTransX.value = withTiming((widthDevice - minWidth) / 2 - 4 * BORDER_WIDTH)
            playerScale.value = withTiming(MIN_SCALE)
            borderPlayer.value = withTiming(BORDER_WIDTH)
            return
          }
          if (translationY < -BOUNCE_DELTA_TRANS_Y) {
            runOnJS(setShowState)(TypePlayerShow.BIG)
            return
          }
          playerHeight.value = withTiming(widthDevice / RATIO_ASPECT)
          playerWidth.value = withTiming(widthDevice)
          playerTransY.value = withTiming(minY)
          playerTransX.value = withTiming((widthDevice - minWidth) / 2 - 4 * BORDER_WIDTH)
          playerScale.value = withTiming(MIN_SCALE)
          borderPlayer.value = withTiming(BORDER_WIDTH)
          break
        default:
          break
      }
    })

  const doubleTapHandle = Gesture.Tap()
    .numberOfTaps(2)
    .maxDuration(500)
    .onStart(({ x }) => {
      doubleTapIsAlive.value = true
    })
    .onEnd(({ x, y, numberOfPointers }, success) => {
      if (success) {
        if (numberOfPointers !== 1) {
          doubleTapIsAlive.value = false
          return
        }

        switch (showState) {
          case TypePlayerShow.MINI:
            runOnJS(setShowState)(TypePlayerShow.BIG)
            break
          default:
            break
        }
      }
    })

  const gesture = Gesture.Race(doubleTapHandle, defaultPanGesture)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: playerTransY.value }, { translateX: playerTransX.value }, { scale: playerScale.value }],
      height: playerHeight.value,
      width: playerWidth.value,
      borderWidth: borderPlayer.value,
    }
  })

  useEffect(() => {
    'worklet'
    runOnJS(setShowState)(isFullScreen ? TypePlayerShow.FULL : TypePlayerShow.BIG)
    if (isFullScreen) {
      runOnJS(StatusBar.setHidden)(true)
      runOnJS(lockToLandscape)()
      return
    }
    runOnJS(StatusBar.setHidden)(false)
    runOnJS(lockToPortrait)()
  }, [isFullScreen])

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
              backgroundColor: commonColor.black,
              borderColor: commonColor.gray1,
            },
            animatedStyle,
          ],
        })}
      >
        <PlayerContainer />
      </Animated.View>
    </GestureDetector>
  )
}