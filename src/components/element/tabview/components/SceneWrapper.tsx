import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle, type SharedValue } from 'react-native-reanimated'

type SceneWrapperProps = {
  routeIndex: number
  smoothJump: boolean
  prevRouteIndexSharedValue: SharedValue<number>
  prevRouteTranslationX: SharedValue<number>
  routeIndexToJumpToSharedValue: SharedValue<number | null>
  children: any
}

const SceneWrapper: React.FC<SceneWrapperProps> = ({
  routeIndex,
  smoothJump,
  prevRouteIndexSharedValue,
  prevRouteTranslationX,
  routeIndexToJumpToSharedValue,
  children,
}) => {
  const sceneWrapperAnimatedStyle = useAnimatedStyle(() => {
    if (!smoothJump) {
      return { transform: [{ translateX: 0 }], opacity: 1 }
    }
    const isPrevRoute = routeIndex === prevRouteIndexSharedValue.value
    const isInBetweenPrevAndJumpRoute =
      routeIndexToJumpToSharedValue.value == null
        ? false
        : routeIndex > Math.min(prevRouteIndexSharedValue.value, routeIndexToJumpToSharedValue.value) &&
          routeIndex < Math.max(prevRouteIndexSharedValue.value, routeIndexToJumpToSharedValue.value)
    return {
      transform: [{ translateX: isPrevRoute ? prevRouteTranslationX.value : 0 }],
      opacity: !isInBetweenPrevAndJumpRoute ? 1 : 0,
    }
  }, [routeIndex, smoothJump, prevRouteTranslationX])
  return <Animated.View style={[styles.prevRouteSceneWrapper, sceneWrapperAnimatedStyle]}>{children}</Animated.View>
}

const styles = StyleSheet.create({
  prevRouteSceneWrapper: {
    width: '100%',
    height: '100%',
  },
})

export default React.memo(SceneWrapper)
