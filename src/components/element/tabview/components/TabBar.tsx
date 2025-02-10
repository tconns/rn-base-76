import React, { useCallback, useMemo, useRef, useState } from 'react'
import type { TabBarProps } from '../types/TabBar'
import { FlatList } from 'react-native-gesture-handler'
import type { FlatListProps, LayoutChangeEvent } from 'react-native'
import type { Route } from '../types/common'
import { View } from 'react-native'
import TabBarItem from './TabBarItem'
import { StyleSheet } from 'react-native'
import { useTabBarAutoScroll } from '../hooks/useTabBarAutoScroll'
import TabIndicator from './TabIndicator'
import { TAB_BAR_HEIGHT, TAB_BAR_PADDING_VERTICAL } from '../constants/tabBar'
import Tab from './Tab'
import { convertArrayTransform, DataTransform } from '../helpers/transform.style'
import { useTabLayoutContext } from '../providers/TabLayout'
import Animated, { runOnJS, useAnimatedReaction, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

const TabBar = (props: TabBarProps) => {
  const {
    navigationState,
    routeIndex: currentRouteIndex,
    scrollEnabled = false,
    bounces,
    layout,
    animatedRouteIndex,
    activeColor,
    inactiveColor,
    type = 'secondary',
    jumpTo,
    getLabelText,
    renderTabBarItem,
    onTabPress,
    onTabLongPress,
    tabBarItemStyle,
    labelStyle,
    indicatorStyle,
    contentContainerStyle,
    style,
  } = props

  const flatListRef = useRef<FlatList>(null)
  const [itemSizes, setItemSizes] = useState<{ width: number }[]>([])
  const [width, setWidth] = useState(0)

  const scrollX = useSharedValue(0);
  const scrollViewRef = useRef<Animated.ScrollView>(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const data: NonNullable<FlatListProps<Route>['data']> = useMemo(
    () => navigationState.routes,
    [navigationState.routes],
  )

  const handleItemLayout = useCallback((event: LayoutChangeEvent, index: number) => {
    const { width } = event.nativeEvent.layout
    setItemSizes((prevSizes) => {
      const newSizes: any[] = [...prevSizes]
      newSizes[index] = { width }
      return newSizes
    })
  }, [])

  const allPositions = useMemo(
    () =>
      convertArrayTransform({
        data: data as any[],
        itemSizes: itemSizes,
        viewport: width,
      }) as DataTransform[],
    [data, itemSizes, width],
  )

  // console.log('itemSizes', itemSizes, allPositions)

  const { autoScrollToRouteIndex, handleScrollToIndexFailed } = useTabBarAutoScroll(
    flatListRef,
    currentRouteIndex,
    allPositions,
    scrollViewRef,
  )

  const renderItem: NonNullable<FlatListProps<Route>['renderItem']> = useCallback(
    ({ item, index: routeIndex }) => {
      const route = item
      const scene = { route }
      const focused = routeIndex === navigationState.index
      const handlePressTab = () => {
        onTabPress?.(scene)
        autoScrollToRouteIndex(routeIndex)
      }
      if (renderTabBarItem) {
        return (
          <Tab
            key={routeIndex}
            index={routeIndex}
            noOfRoutes={navigationState.routes.length}
            style={styles.tab}
            onLayout={(event) => handleItemLayout(event, routeIndex)}
          >
            {renderTabBarItem({
              index: routeIndex,
              route,
              focused,
              activeColor,
              inactiveColor,
              animatedRouteIndex,
              getLabelText,
              jumpTo,
              onTabPress: handlePressTab,
              onTabLongPress,
              style: [styles.tabBarItem, tabBarItemStyle],
              labelStyle,
            })}
          </Tab>
        )
      }
      if (scrollEnabled) {
        return (
          <Tab
            key={routeIndex}
            index={routeIndex}
            noOfRoutes={navigationState.routes.length}
            style={styles.tab}
            onLayout={(event) => handleItemLayout(event, routeIndex)}
          >
            <TabBarItem
              index={routeIndex}
              route={route}
              focused={focused}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              animatedRouteIndex={animatedRouteIndex}
              getLabelText={getLabelText}
              jumpTo={jumpTo}
              onTabPress={handlePressTab}
              onTabLongPress={onTabLongPress}
              style={[styles.tabBarItem, tabBarItemStyle]}
              labelStyle={labelStyle}
            />
          </Tab>
        )
      }
      const width = layout.width / navigationState.routes.length
      const _tabStyle = { width }
      return (
        <Tab
          key={routeIndex}
          index={routeIndex}
          noOfRoutes={navigationState.routes.length}
          style={[styles.tab, _tabStyle]}
          onLayout={(event) => handleItemLayout(event, routeIndex)}
        >
          <TabBarItem
            index={routeIndex}
            route={route}
            focused={focused}
            animatedRouteIndex={animatedRouteIndex}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
            getLabelText={getLabelText}
            jumpTo={jumpTo}
            onTabPress={handlePressTab}
            onTabLongPress={onTabLongPress}
            style={[styles.tabBarItem, tabBarItemStyle]}
            labelStyle={labelStyle}
          />
        </Tab>
      )
    },
    [
      navigationState.index,
      navigationState.routes.length,
      renderTabBarItem,
      scrollEnabled,
      layout.width,
      animatedRouteIndex,
      activeColor,
      inactiveColor,
      getLabelText,
      jumpTo,
      onTabLongPress,
      tabBarItemStyle,
      labelStyle,
      onTabPress,
      autoScrollToRouteIndex,
      handleItemLayout,
    ],
  )

  const tabIndicatorComponent = useMemo(() => {
    return (
      <TabIndicator
        type={type}
        animatedRouteIndex={animatedRouteIndex}
        style={indicatorStyle}
        allPositions={allPositions}
      />
    )
  }, [type, animatedRouteIndex, indicatorStyle, allPositions])

  const { routeIndexToTabWidthMap, routeIndexToTabOffsetMap, routeIndexToTabBarItemWidthMap } = useTabLayoutContext()

  const scrollToOffset = (translateX) => {
    // if (flatListRef.current) {
    //   flatListRef.current.scrollToOffset({
    //     offset: translateX,
    //     animated: false,
    //   })
    // }
    scrollViewRef.current?.scrollTo?.({
      x: translateX,
      animated: true,
    })
  }

  useAnimatedReaction(
    () => animatedRouteIndex.value,
    (animatedRouteIndexValue) => {
      const animatedRouteIndexFloor = Math.floor(animatedRouteIndexValue)
      const animatedRouteIndexCeil = animatedRouteIndexFloor + 1

      const translateXFloor = routeIndexToTabOffsetMap.value[animatedRouteIndexFloor] ?? 0

      const translateXCeil = routeIndexToTabOffsetMap.value[animatedRouteIndexCeil] ?? 0

      const translateX =
        translateXFloor * (1 - (animatedRouteIndexValue - animatedRouteIndexFloor)) +
        translateXCeil * (1 - (animatedRouteIndexCeil - animatedRouteIndexValue))

      const dataPos = allPositions[animatedRouteIndexFloor]
      const offset = !dataPos ? 0 : translateX + dataPos.size / 2 - dataPos.width / 2

      // const dataPos1 = allPositions[animatedRouteIndexCeil]
      // const offset1 = !dataPos1 ? 0 : dataPos1.start + dataPos1.size / 2 - dataPos1.width / 2

      // console.log('translateX', translateXFloor, translateXCeil, translateX, dataPos?.start||0, offset)

      runOnJS(scrollToOffset)(offset)
      scrollX.value = withTiming(offset);
    },
    [type, allPositions],
  )

  const handleItemLayoutTab = useCallback((event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout
    setWidth(width)
  }, [])

  return (
    <View
      style={[styles.tabBarContainer, style]}
      onLayout={handleItemLayoutTab}
    >
      {/* <FlatList
        ref={flatListRef}
        horizontal
        data={data}
        renderItem={renderItem}
        bounces={bounces}
        removeClippedSubviews={false}
        scrollEnabled={scrollEnabled}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}
        onScrollToIndexFailed={handleScrollToIndexFailed}
        ListHeaderComponent={tabIndicatorComponent}
      /> */}
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        bounces={bounces}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}
      >
        {(data as any).map((item, index) => renderItem({ item, index } as any))}
        {tabIndicatorComponent}
      </Animated.ScrollView>
    </View>
  )
}

export default React.memo(TabBar)

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: '#25A0F6',
    height: TAB_BAR_HEIGHT,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  tabBarItem: {
    paddingVertical: TAB_BAR_PADDING_VERTICAL,
  },
})
