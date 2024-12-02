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
import { Control } from '../control'

export const PlayerContainer: React.FC<{ enable: boolean }> = ({ enable }) => {
  const { setIsFullScreen, isFullScreen, showControl, setShowControl, showState } = usePlayer()

  const [loading, setIsLoading] = useState(false)
  const [paused, setPaused] = useState(false)

  const videoPlayer = useRef<VideoRef>(null)

  const onLoadStart = () => {
    setIsLoading(true)
  }

  const onLoad = (data: OnLoadData) => {
    if (data.duration) {
      setIsLoading(false)
    }
  }

  const onProgress = (data: OnProgressData) => {}

  useEffect(() => {
    if (!enable) {
      videoPlayer.current?.pause()
    } else {
      videoPlayer.current?.resume()
    }
  }, [enable])

  const singleTapHandle = Gesture.Tap().onEnd((_e, success) => {
    if (success) {
      runOnJS(setShowControl)(!showControl)
    }
  })

  const gesture = Gesture.Race(singleTapHandle)

  return (
    <Animated.View style={StyleSheet.absoluteFillObject}>
      <Video
        style={StyleSheet.absoluteFillObject}
        source={{
          uri: 'https://s4.truyentot.com/media/video-clips/hhtq/Tien-Nghich/64/Tien-Nghich-64.m3u8',
        }}
        ref={videoPlayer}
        resizeMode={'contain'}
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        onProgress={onProgress}
        progressUpdateInterval={1000}
        // fullscreen={isFullScreen}
        paused={paused}
      />
      <VideoLoading loading={loading} />
      {showControl && (
        <GestureDetector gesture={gesture}>
          <Control />
        </GestureDetector>
      )}
    </Animated.View>
  )
}
