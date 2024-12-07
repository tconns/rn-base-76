import React, { createContext, useContext } from 'react'
import { useSharedValue, type SharedValue } from 'react-native-reanimated'
import type { RouteIndexToTabBarItemWidthMap, RouteIndexToTabOffsetMap, RouteIndexToTabWidthMap } from '../types/TabBar'

type TabLayoutContext = {
  routeIndexToTabWidthMap: SharedValue<RouteIndexToTabWidthMap>
  routeIndexToTabOffsetMap: SharedValue<RouteIndexToTabOffsetMap>
  routeIndexToTabBarItemWidthMap: SharedValue<RouteIndexToTabBarItemWidthMap>
}

const TabLayoutContext = createContext<TabLayoutContext>({
  routeIndexToTabWidthMap: { value: {} } as any,
  routeIndexToTabOffsetMap: { value: {} }as any,
  routeIndexToTabBarItemWidthMap: { value: {} } as any,
})

export const TabLayoutContextProvider: React.FC<{children}> = ({ children }) => {
  const routeIndexToTabWidthMap = useSharedValue({})
  const routeIndexToTabOffsetMap = useSharedValue({})
  const routeIndexToTabBarItemWidthMap = useSharedValue({})

  return (
    <TabLayoutContext.Provider
      value={{
        routeIndexToTabWidthMap,
        routeIndexToTabOffsetMap,
        routeIndexToTabBarItemWidthMap,
      }}
    >
      {children}
    </TabLayoutContext.Provider>
  )
}

export const useTabLayoutContext = () => useContext(TabLayoutContext)
