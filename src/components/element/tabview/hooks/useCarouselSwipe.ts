import { useCallback, useMemo, type Dispatch, type SetStateAction } from 'react'
import { Gesture } from 'react-native-gesture-handler'
import {
  useSharedValue,
  type SharedValue,
  runOnJS,
  withTiming,
  Easing,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { AUTO_SWIPE_COMPLETION_DURATION } from '../constants/carousel'
import type { Route } from '../types/common'
import { dimensions } from '@src/theme'

export const useCarouselSwipePanGesture = (
  currentRouteIndexSharedValue: SharedValue<number>,
  swipeTranslationX: SharedValue<number>,
  updateCurrentRouteIndex: (value: number) => void,
  sceneContainerWidth: number,
  noOfRoutes: number,
  handleSwipeStart: () => void,
  handleSwipeEnd: () => void,
  _swipeEnabled = true,
  setPrevRouteIndex: (index: number) => void,
  prevRouteIndexSharedValue: SharedValue<number>,
  isJumping: boolean,
  animatedRouteIndex: SharedValue<number>,
) => {
  const preSwipeStartSwipeTranslationX = useSharedValue(0)
  const panIsVertical = useSharedValue(false)

  const minRouteIndex = 0
  const maxRouteIndex = noOfRoutes - 1
  const minSwipeTranslationX = minRouteIndex * sceneContainerWidth
  const maxSwipeTranslationX = maxRouteIndex * sceneContainerWidth

  const swipeEnabled = !isJumping && _swipeEnabled

  const swipePanGesture = Gesture.Pan()
    .enabled(swipeEnabled)
    .activeOffsetX([-10, 10])
    .onStart(({ velocityY, velocityX }) => {
      panIsVertical.value = Math.abs(velocityY) > Math.abs(velocityX)
      preSwipeStartSwipeTranslationX.value = swipeTranslationX.value
      runOnJS(handleSwipeStart)()
    })
    .onUpdate(({ translationX }) => {
      if (panIsVertical.value) {
        return
      }
      const boundedTranslationX = Math.min(Math.max(translationX, -sceneContainerWidth), sceneContainerWidth)
      swipeTranslationX.value = Math.min(
        Math.max(preSwipeStartSwipeTranslationX.value + boundedTranslationX, -1 * maxSwipeTranslationX),
        -1 * minSwipeTranslationX,
      )
      animatedRouteIndex.value = -swipeTranslationX.value / sceneContainerWidth
    })
    .onEnd(({ translationX, velocityX }, success) => {
      const BOUNCE_DELTA_TRANS_X = Math.max(sceneContainerWidth * 0.1, 50)

      if (panIsVertical.value || (!panIsVertical.value && !success)) {
        return
      }

      const currentRouteIndex = currentRouteIndexSharedValue.value
      const isToRight = translationX < -BOUNCE_DELTA_TRANS_X
      const isToLeft = translationX > BOUNCE_DELTA_TRANS_X

      if (!isToRight && !isToLeft) {
        swipeTranslationX.value = withTiming(-currentRouteIndex * sceneContainerWidth)
        animatedRouteIndex.value = withTiming(currentRouteIndex)
        runOnJS(updateCurrentRouteIndex)(currentRouteIndex)
        runOnJS(handleSwipeEnd)()
        return
      }

      const handleSwipe = (routeIndexToInertiallySnap: number) => {
        animatedRouteIndex.value = withTiming(routeIndexToInertiallySnap, {
          duration: AUTO_SWIPE_COMPLETION_DURATION,
          easing: Easing.out(Easing.ease),
        })
        prevRouteIndexSharedValue.value = routeIndexToInertiallySnap
        swipeTranslationX.value = withTiming(-routeIndexToInertiallySnap * sceneContainerWidth, {
          duration: AUTO_SWIPE_COMPLETION_DURATION,
          easing: Easing.out(Easing.ease),
        })
        runOnJS(setPrevRouteIndex)(routeIndexToInertiallySnap)
        currentRouteIndexSharedValue.value = routeIndexToInertiallySnap
        runOnJS(updateCurrentRouteIndex)(routeIndexToInertiallySnap)
      }

      if (isToRight && currentRouteIndex !== maxRouteIndex) {
        handleSwipe(Math.min(maxRouteIndex, currentRouteIndex + 1))
      } else if (isToLeft && currentRouteIndex !== minRouteIndex) {
        handleSwipe(Math.max(minRouteIndex, currentRouteIndex - 1))
      }
    })

  return Gesture.Race(swipePanGesture)
}

export const useCarouselJumpToIndex = (
  routes: Route[],
  currentRouteIndexSharedValue: SharedValue<number>,
  swipeTranslationX: SharedValue<number>,
  sceneContainerWidth: number,
  noOfRoutes: number,
  updateCurrentRouteIndex: (value: number) => void,
  prevRouteTranslationX: SharedValue<number>,
  setPrevRouteIndex: (value: number) => void,
  prevRouteIndexSharedValue: SharedValue<number>,
  routeIndexToJumpToSharedValue: SharedValue<number | null>,
  smoothJump: boolean,
  setIsJumping: Dispatch<SetStateAction<boolean>>,
  animatedRouteIndex: SharedValue<number>,
) => {
  const minRouteIndex = 0
  const maxRouteIndex = noOfRoutes - 1

  const jumpToRoute = useCallback(
    (key: string) => {
      const currentRouteIndex = currentRouteIndexSharedValue.value
      const routeIndexToJumpTo = routes.findIndex((route) => route.key === key)
      /** Only jump if route is in between the min and max ranges,
       * and not equal to current route index
       */
      if (
        routeIndexToJumpTo === -1 ||
        routeIndexToJumpTo < minRouteIndex ||
        routeIndexToJumpTo > maxRouteIndex ||
        routeIndexToJumpTo === currentRouteIndex
      ) {
        return
      }

      setIsJumping(true)
      routeIndexToJumpToSharedValue.value = routeIndexToJumpTo

      if (smoothJump) {
        const shouldJumpLeft = routeIndexToJumpTo > currentRouteIndex
        let tempRouteIndexToJumpTo: number
        if (shouldJumpLeft) {
          tempRouteIndexToJumpTo = routeIndexToJumpTo - 1
        } else {
          tempRouteIndexToJumpTo = routeIndexToJumpTo + 1
        }
        swipeTranslationX.value = -tempRouteIndexToJumpTo * sceneContainerWidth
        prevRouteTranslationX.value = (tempRouteIndexToJumpTo - currentRouteIndex) * sceneContainerWidth
      }

      currentRouteIndexSharedValue.value = routeIndexToJumpTo
      updateCurrentRouteIndex(routeIndexToJumpTo)

      animatedRouteIndex.value = withTiming(routeIndexToJumpTo, {
        duration: AUTO_SWIPE_COMPLETION_DURATION,
        easing: Easing.ease,
      })

      swipeTranslationX.value = withTiming(
        -routeIndexToJumpTo * sceneContainerWidth,
        {
          duration: AUTO_SWIPE_COMPLETION_DURATION,
          easing: Easing.ease,
        },
        () => {
          routeIndexToJumpToSharedValue.value = null
          prevRouteIndexSharedValue.value = routeIndexToJumpTo
          prevRouteTranslationX.value = 0
          runOnJS(setPrevRouteIndex)(routeIndexToJumpTo)
          runOnJS(setIsJumping)(false)
        },
      )
    },
    [
      animatedRouteIndex,
      currentRouteIndexSharedValue,
      maxRouteIndex,
      prevRouteIndexSharedValue,
      prevRouteTranslationX,
      routeIndexToJumpToSharedValue,
      routes,
      sceneContainerWidth,
      setIsJumping,
      setPrevRouteIndex,
      smoothJump,
      swipeTranslationX,
      updateCurrentRouteIndex,
    ],
  )

  return jumpToRoute
}

export const useCarouselSwipeTranslationAnimatedStyle = (swipeTranslationX: SharedValue<number>) => {
  const swipeTranslationAnimatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: swipeTranslationX.value }],
    }),
    [swipeTranslationX],
  )
  return swipeTranslationAnimatedStyle
}
