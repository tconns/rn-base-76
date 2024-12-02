import { cmToPx } from '@src/modules/util-scale'
import { TypePlayerShow } from '@src/player/provider'
import { usePlayer } from '@src/player/usePlayer'
import React, { useEffect, useRef, useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import Animated from 'react-native-reanimated'
import Video, { VideoRef, OnLoadData, OnProgressData } from 'react-native-video'
import { VideoLoading } from '../loading'

export const PlayerContainer = () => {
  const { setIsFullScreen, isFullScreen } = usePlayer()

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

  const onProgress = (data: OnProgressData) => { }
  
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
      />
      <VideoLoading loading={loading} />
      <Pressable onPress={() => setIsFullScreen(!isFullScreen)}>
        <Text style={{ color: 'white', marginTop: 60 }}>Press me</Text>
      </Pressable>
    </Animated.View>
  )
}
