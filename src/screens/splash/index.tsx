/* eslint-disable react/prop-types */
import React, { memo, useCallback, useEffect } from 'react'
import { style } from './styles'
import { cn, useTheme, useThemedStyles } from '@src/theme'
import { BaseScreenComponent, IPropsScreen } from '../screen.base'
import { Text, View } from '@src/components/common'
import { EnumRouterName, NavigationService } from '@src/navigation'
import { useGetConfigQuery } from '@src/redux/service/config'
import { useLazyGetChannelCatalogQuery } from '@src/redux/service/channel'

const Screen: React.FC<IPropsScreen> = ({ route }) => {
  const styles = useThemedStyles(style)

  const getConfigQuery = useGetConfigQuery({})

  const [runLazyGetChannelCatalogQuery] = useLazyGetChannelCatalogQuery({})

  const { commonColors } = useTheme()

  console.log('getConfigQuery', getConfigQuery)

  useEffect(() => {
    if (getConfigQuery.data?.data) {
      requestAnimationFrame(() => {
        runLazyGetChannelCatalogQuery({})
        NavigationService.reset({
          index: 0,
          routes: [
            {
              name: EnumRouterName.TAB,
            },
          ],
        })
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getConfigQuery.data])

  return (
    <BaseScreenComponent routerName={route.name}>
      <View style={cn({ atomic: ['flex-row', 'justify-between', 'items-center'], styles: [] })}>
        <View>
          <Text type="2xl-bold-28"></Text>
        </View>
      </View>
    </BaseScreenComponent>
  )
}

export default memo(Screen)
