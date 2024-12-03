// import { convertEnvNumber } from './util/convertEnvNumber.util'
import { IUrlConfig } from './interfaces'

// process.env.{{name}}

export default (): {
  URL_CONFIG: IUrlConfig
} => ({
  URL_CONFIG: {
    baseUrl: 'https://apigwon.gviet.vn',
  },
})
