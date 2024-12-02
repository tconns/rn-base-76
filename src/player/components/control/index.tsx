import { cmToPx } from '@src/modules/util-scale'
import { TypePlayerShow } from '@src/player/provider'
import { usePlayer } from '@src/player/usePlayer'
import React, { useEffect, useRef, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Animated, { runOnJS } from 'react-native-reanimated'
import Video, { VideoRef, OnLoadData, OnProgressData } from 'react-native-video'
import { VideoLoading } from '../loading'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { Text } from '@src/components/common'
import { cn } from '@src/theme'

export const Control: React.FC<{ enable?: boolean }> = ({ enable }) => {
  return (
    <Animated.View
      style={cn({
        atomic: ['flex-1', 'flex-col', 'justify-between', 'items-center'],
        styles: [StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(0,0,0 / 0.48)' }],
      })}
    >
      <View
        style={cn({
          atomic: [],
          styles: [],
        })}
      >
        <Text type="xl-bold-24">ShowControllll</Text>
      </View>
      <View
        style={cn({
          atomic: [],
          styles: [],
        })}
      >
        <Text type="xl-bold-24">ShowControllll</Text>
      </View>
    </Animated.View>
  )
}
