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
  const [isEnd, setIsEnd] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const videoPlayer = useRef<VideoRef>(null)

  const onLoadStart = () => {
    setIsLoading(true)
    setIsEnd(false)
  }

  const onLoad = (data: OnLoadData) => {
    if (data.duration) {
      setIsLoading(false)
      setCurrentTime(data.currentTime)
      setDuration(data.duration)
    }
  }

  const onProgress = (data: OnProgressData) => {
    setCurrentTime(data.currentTime)
  }

  useEffect(() => {
    if (!enable) {
      videoPlayer.current?.pause()
    } else {
      videoPlayer.current?.resume()
    }
    // videoPlayer.current?.seek(17*60)
  }, [enable])

  const singleTapHandle = Gesture.Tap().onEnd((_e, success) => {
    if (success) {
      runOnJS(setShowControl)(false)
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
        onEnd={() => {
          setIsEnd(true)
          setPaused(true)
        }}
      />
      <VideoLoading loading={loading} />
      {(showState === TypePlayerShow.BIG || showState === TypePlayerShow.FULL) && showControl && (
        <GestureDetector gesture={gesture}>
          <Control
            currentTime={currentTime}
            duration={duration}
            paused={paused}
            isEnd={isEnd}
            onPlay={() => {
              setPaused(false)
            }}
            onPause={() => {
              setPaused(true)
            }}
            onEnd={() => {
              videoPlayer.current?.seek(0)
              setPaused(true)
              setIsEnd(false)
            }}
          />
        </GestureDetector>
      )}
    </Animated.View>
  )
}
