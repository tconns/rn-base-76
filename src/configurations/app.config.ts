import { convertEnvNumber } from './util/convertEnvNumber.util'
import { IAppConfig } from './interfaces'
import DeviceInfo from 'react-native-device-info'
// import { isAndroid } from 'react-native-utils-scale'

// process.env.{{name}}

let deviceId: string = ''
let deviceName: string = ''
let osVersion: string = ''

const initInfo = async () => {
  deviceId = await DeviceInfo.getUniqueId()
  deviceName = await DeviceInfo.getDeviceName()
  osVersion = await DeviceInfo.getSystemVersion()
}

initInfo()

export default (): {
  APP_CONFIG: IAppConfig
} => ({
  APP_CONFIG: {
    getDeviceId: () => {
      return deviceId
    },
    getDeviceName: () => {
      return deviceName
    },
    getOSVersion: () => {
      return osVersion
    },
    platform: 5,
    dtId: 10,
    spId: 1,
    deviceType: 1,
    versionCode: 20241118,
    appSecret: 'rcuy)WA7[gwSW/Pu[#A_:W#[7~mnhjDh',
  },
})
