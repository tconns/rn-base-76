import { AppRegistry } from 'react-native'
import App from '@src/container'
import { name as appName } from './app.json'
import { enableFreeze } from 'react-native-screens'
import 'react-native-gesture-handler'
import { DefineI18n } from '@src/i18n'

// import {setJSExceptionHandler, getJSExceptionHandler} from 'react-native-exception-handler';

enableFreeze(true)

DefineI18n.__init__()

AppRegistry.registerComponent(appName, () => App)
