import { convertEnvNumber } from './util/convertEnvNumber.util'
import { IAppConfig } from './interfaces'
// import DeviceInfo from 'react-native-device-info'
// import { isAndroid } from 'react-native-utils-scale'

// process.env.{{name}}

let deviceId: string = ''

const initInfo = async () => {
  // deviceId = await DeviceInfo.getUniqueId()
}

initInfo()

export default (): {
  APP_CONFIG: IAppConfig
} => ({
  APP_CONFIG: {
    getDeviceId: () => {
      return deviceId
    },
    platform: 'android',
    versionCode: 20240419,
  },
})
