export interface IConfigRes {
  home?: Home
  event?: Event
  userValidation?: UserValidation
  common?: Common
  spilotPartnerId?: string
  newRelic?: any
  p2p?: P2p[]
  adsServerHost?: string
  adsServerHostV2?: string
  isTVAllowQRLogin?: number
  isInReview: number
  HBOGoConfig?: {
    limitScreenBaseUrl: string
    maxDeviceMessage: string
  }
}

export interface Home {
  about: string
  homeBackground: string
  menuBackground: string
  menuColor: string
  profileImage: string
  privacy: string
  refreshTime: number
  maxChannelNumber: number
  topRightImage: string
}

export interface Event {
  name: string
  data: DataEvent[]
}

export interface DataEvent {
  image: string
  name: string
  info: string
  target: any
}

export interface UserValidation {
  username: Username
  password: Password
  otp: Otp
}

export interface Username {
  regex: string
  regexJava: string
  failMessage: string
}

export interface Password {
  regex: string
  regexJava: string
  failMessage: string
}

export interface Otp {
  length: number
  failMessage: string
}

export interface Common {
  channelRefreshTime: number
  drmUrls: string[]
  hotline: string
  ignoreAdsTime: number
  inReview: number
  waitNextAdTime: number
  waitNextAdTimeForChannel: 60
  waitNextNotificationTime: number
  enableCast: number
  buyReviewMessage: string
  multiUrl: string
}

export interface P2p {
  type: string
  key: string
  isSetTopBox: number
  minFreeMemPercent: number
}

export interface IAgeLimitRes {
  age: number
  title: string
}
export interface ILogItem {
  id: string
  initTimeToPlayMs: number
  playerName?: 'SIGMA' | 'SHAKA' | 'DEFAULT'
  playerVersion?: string
  status?: 'success' | 'fail' | 'pending'
  title: string
  error?: string
}
