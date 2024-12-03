import { cmToPx } from '@src/modules/util-scale'
import { TypePlayerShow } from '@src/player/provider'
import { usePlayer } from '@src/player/usePlayer'
import React, { useEffect, useRef, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Animated, { runOnJS } from 'react-native-reanimated'
import Video, { VideoRef, OnLoadData, OnProgressData } from 'react-native-video'
import { VideoLoading } from '../loading'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { TapController, Text } from '@src/components/common'
import { cn, useTheme } from '@src/theme'
import { ExitFullscreenIcon, FullscreenIcon, PauseIcon, PlayIcon } from '@src/components/svg'
import { calculateProgress, formatTime } from '@src/player/utils/time'

interface ControlProps {
  enable?: boolean
  paused?: boolean
  isEnd?: boolean
  currentTime?: number
  duration?: number
  onPause?: () => void
  onPlay?: () => void
  onEnd?: () => void
}

export const Control: React.FC<ControlProps> = ({
  enable,
  currentTime = 0,
  duration = 0,
  paused = true,
  isEnd = false,
  onPlay,
  onPause,
  onEnd
}) => {
  const { isFullScreen, setIsFullScreen, showControl, setShowControl, showState } = usePlayer()

  const { spacing, fontSize, themeColors, commonColors } = useTheme()

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
      <View>
        <TapController
          onPress={() => {
            if (isEnd) {
              onEnd?.()
              return
            }
            paused ? onPlay?.() : onPause?.()
          }}
        >
          {paused ? (
            <PlayIcon
              size={55}
              color={commonColors.white}
            />
          ) : (
            <PauseIcon
              size={55}
              color={commonColors.white}
            />
          )}
        </TapController>
      </View>
      <View
        style={cn({
          atomic: ['flex-row', 'justify-between', 'items-center', 'py-sm-8'],
          styles: [
            {
              backgroundColor: 'rgba(0,0,0 / 0.64)',
              width: '100%',
              paddingHorizontal: isFullScreen ? spacing['sm-16'] : spacing['sm-8'],
              marginHorizontal: spacing['sm-16'],
            },
          ],
        })}
      >
        <View
          style={cn({
            atomic: ['flex-row', 'flex-1', 'justify-between', 'items-center'],
            styles: [],
          })}
        >
          <Text
            type="subheading-medium-16"
            style={cn({
              atomic: ['justify-center', 'items-center', 'text-center'],
              styles: [{ width: 60 }],
            })}
          >
            {formatTime(currentTime)}
          </Text>
          <Text type="subheading-medium-16">{calculateProgress(currentTime, duration)}</Text>
          <Text
            type="subheading-medium-16"
            style={cn({
              atomic: ['justify-center', 'items-center', 'text-center'],
              styles: [{ width: 60 }],
            })}
          >
            {formatTime(duration)}
          </Text>
        </View>
        <View>
          <TapController onPress={() => setIsFullScreen(!isFullScreen)}>
            <View>
              {isFullScreen ? (
                <ExitFullscreenIcon
                  size={35}
                  color={commonColors.white}
                />
              ) : (
                <FullscreenIcon
                  size={35}
                  color={commonColors.white}
                />
              )}
            </View>
          </TapController>
        </View>
      </View>
    </Animated.View>
  )
}
