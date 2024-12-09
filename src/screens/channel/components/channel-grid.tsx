import { Text, View } from '@src/components/common'
import { DetailChannelCatalog } from '@src/redux/service/channel/type'
import { cn, dimensions, useTheme } from '@src/theme'
import React, { useCallback } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import TurboImage from 'react-native-turbo-image'

export const GridChannel: React.FC<{ channels: DetailChannelCatalog[] }> = ({ channels }) => {
  const { spacing } = useTheme()
  const numColumns = 3
  const width = dimensions.screen.width
  const itemWidth = (width - 2 * spacing['sm-16'] - spacing['sm-8'] * (numColumns - 1)) / numColumns

  const renderItem = useCallback(
    ({ item }: { item: DetailChannelCatalog }) => {
      const widthImage = itemWidth - spacing['sm-16']
      return (
        <View
          style={cn({
            atomic: [],
            styles: [
              {
                width: itemWidth + spacing['sm-8'],
              },
            ],
          })}
        >
          <View
            style={
              cn({
                atomic: ['rounded-md', 'mb-sm-8', 'bg-gray4', 'justify-center', 'items-center'],
                styles: [
                  {
                    width: itemWidth,
                    height: itemWidth * 0.6,
                  },
                ],
              }) as any
            }
          >
            <TurboImage
              source={{ uri: item.logo }}
              style={
                cn({
                  atomic: ['rounded-md'],
                  styles: [
                    {
                      width: widthImage,
                      height: widthImage * 0.6,
                    },
                  ],
                }) as any
              }
              resizeMode="contain"
            />
          </View>
        </View>
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [channels],
  )

  return (
    <View
      style={cn({
        atomic: ['flex-1'],
        styles: [],
      })}
    >
      <FlatList<DetailChannelCatalog>
        data={channels || []}
        style={{ paddingHorizontal: spacing['sm-16'], marginTop: spacing['sm-12'] }}
        renderItem={renderItem}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
