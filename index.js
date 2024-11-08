import { AppRegistry } from 'react-native'
import App from '@src/container'
import { name as appName } from './app.json'
import { enableFreeze } from 'react-native-screens'
import 'react-native-gesture-handler'

enableFreeze(true)

AppRegistry.registerComponent(appName, () => App)
