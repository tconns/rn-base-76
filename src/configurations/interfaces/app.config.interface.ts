export interface IAppConfig {
  getDeviceId(): string
  versionCode: number
  platform: 'web' | 'android' | 'ios'
}
