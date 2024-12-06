export interface IAppConfig {
  getDeviceId(): string
  getDeviceName(): string
  getOSVersion(): string
  versionCode: number
  platform: number
  dtId: number
  spId: number
  deviceType: number
  appSecret: string
}
