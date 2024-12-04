import { appConfig } from '@src/configurations'
import { LocalStorage } from '@src/modules/storage'

interface IAppInfo {
  deviceId: string
  deviceName: string
  osVersion: string
  dtId: number
  spId: string
  deviceType: number
  platform: number
  versionCode: number
}

class AppInfoManagerClass {
  private static _instance: AppInfoManagerClass | undefined
  private _accessToken: string | null = null
  private _refreshToken: string | null = null // private _storeRedux: Store;

  static getInstance(): AppInfoManagerClass {
    return this._instance ?? (this._instance = new AppInfoManagerClass())
  }

  static clear(): void {
    delete this._instance
  }

  constructor() {
    this._accessToken = this.getAccessToken()
    // console.log('AppInfoManager:', this._accessToken)
    this._refreshToken = this.getRefreshToken()
  }

  setAccessToken(accessToken: string): void {
    this._accessToken = accessToken
    LocalStorage.setItem(LocalStorage.DefineKeyStorage.ACCESS_TOKEN, accessToken)
  }

  getAccessToken(): string {
    const token = !!this._accessToken
      ? this._accessToken
      : LocalStorage.getItem(LocalStorage.DefineKeyStorage.ACCESS_TOKEN) || ''
    return token
  }

  setRefreshToken(refreshToken: string, force?: boolean): void {
    if (force) {
      this._refreshToken = refreshToken
      LocalStorage.setItem(LocalStorage.DefineKeyStorage.REFRESH_TOKEN, refreshToken)
      return
    }
    if (!refreshToken || refreshToken === 'undefined') return
    this._refreshToken = refreshToken
    LocalStorage.setItem(LocalStorage.DefineKeyStorage.REFRESH_TOKEN, refreshToken)
  }

  getRefreshToken(): string {
    return !!this._refreshToken
      ? this._refreshToken
      : LocalStorage.getItem(LocalStorage.DefineKeyStorage.REFRESH_TOKEN) || ''
  }
  isLoggedIn(): boolean {
    if (!!this._accessToken && !!this._refreshToken) return true
    return false
  }

  getAppInfo(): IAppInfo {
    const { platform, versionCode, deviceType, spId, dtId, getDeviceId, getDeviceName, getOSVersion } =
      appConfig().APP_CONFIG
    return {
      deviceId: getDeviceId(),
      deviceName: getDeviceName(),
      osVersion: getOSVersion(),
      dtId: dtId,
      spId: spId.toString(),
      deviceType: deviceType,
      platform: platform,
      versionCode: versionCode,
    }
  }
}

export const AppInfoManager = AppInfoManagerClass.getInstance()

export default AppInfoManager
