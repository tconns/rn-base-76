export interface IChannelCatalogRes {
  channels: ChannelCatalogT[]
  favoriteChannels: ChannelCatalogT[]
}

export type ChannelCatalogT = {
  id: string
  name: string
  channels: DetailChannelCatalog[]
  orderIndex: number
}

export interface DetailChannelCatalog {
  id: string
  realIndex: number
  name: string
  categories: string[]
  logo: string
  thumbnail: string
  thumbnailCircle: string
  pressedIndex: number
  catchUpDays: number
  orderIndex: number
  direction?: 'start' | 'end' | 'all'
  currentProgram?: ICurProgram
}
export interface IScheduleItem {
  id: string
  title: string
  channelId: string
  startTime: string
  endTime: string
  duration: string
  startDate: string
  endDate: string
  livedAt: string
  isLive: number
  isPlayable: number
  isAllowRemind: number
}

export interface IDataEPGRes {
  [key: string]: IScheduleItem[]
}
export interface ICurProgram {
  endIsoTime: string
  name: string
  progressPercent: number
  startIsoTime: string
}
