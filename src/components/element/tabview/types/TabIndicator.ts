import type { ViewProps } from 'react-native'
import type { SceneRendererProps, TabBarType } from './common'
import { DataTransform } from '../helpers/transform.style'

export type TabIndicatorProps = Omit<ViewProps, 'children'> &
  Omit<SceneRendererProps, 'layout' | 'jumpTo'> & {
    type: TabBarType
    allPositions: DataTransform[]
  }
