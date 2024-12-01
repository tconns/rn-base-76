import { useTheme } from '@src/theme'
import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

type Props = {
  loading?: boolean
}

// eslint-disable-next-line react/prop-types
export const VideoLoading = React.memo<Props>(function VideoLoader({ loading }) {
  const { themeColors } = useTheme()
  if (!loading) return null
  return (
    <View style={loaderStyle.container}>
      <ActivityIndicator
        size="large"
        color={themeColors.primary}
      />
    </View>
  )
})
const loaderStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
})
