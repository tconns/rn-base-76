import type { FlatList } from 'react-native-gesture-handler'
import { useCallback, type RefObject } from 'react'
import { useStateUpdatesListener } from './useStateUpdatesListener'
import { DataTransform } from '../helpers/transform.style'
import Animated from 'react-native-reanimated'

type AutoScrollToRouteIndexParams = {
  shouldScrollToIndex: boolean
  animated: boolean
}

export const useTabBarAutoScroll = (
  flatListRef: RefObject<FlatList>,
  currentRouteIndex: number,
  allPositions: DataTransform[],
  scrollViewRef: RefObject<Animated.ScrollView>,
) => {
  const autoScrollToRouteIndex = useCallback(
    (routeIndex: number, params?: Partial<AutoScrollToRouteIndexParams>) => {
      const { animated, shouldScrollToIndex } = {
        animated: true,
        shouldScrollToIndex: false,
        ...params,
      }
      const dataPos = allPositions[routeIndex]

      const offset = !dataPos ? 0 : dataPos.start + dataPos.size / 2 - dataPos.width / 2

      // flatListRef.current?.scrollToOffset({
      //   offset,
      //   animated,
      // })
      scrollViewRef.current?.scrollTo?.({
        x: offset,
        animated,
      })
    },
    [flatListRef, allPositions, scrollViewRef],
  )

  useStateUpdatesListener(
    currentRouteIndex,
    useCallback(() => {
      // setTimeout(() => {
      autoScrollToRouteIndex(currentRouteIndex)
      // }, 500)
    }, [autoScrollToRouteIndex, currentRouteIndex]),
  )

  const handleScrollToIndexFailed = useCallback(
    ({ index: routeIndex }: { index: number }) => {
      const dataPos = allPositions[routeIndex]
      const offset = !dataPos ? 0 : dataPos.start + dataPos.size / 2 - dataPos.width / 2

      // flatListRef.current?.scrollToOffset({
      //   offset,
      // })
      scrollViewRef.current?.scrollTo?.({
        x: offset,
      })
    },
    [allPositions, flatListRef, scrollViewRef],
  )

  return { autoScrollToRouteIndex, handleScrollToIndexFailed }
}
