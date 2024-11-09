import { NativeModules, Platform } from 'react-native'
import i18n, { LanguageDetectorModule } from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './locates/en-US/index.json'
import viTranslation from './locates/vi-VN/index.json'
import { convertObj } from './utils'
import {LocalStorage} from '@src/modules/storage'
export * from './hooks'

const isIOS = Platform.OS === 'ios'

export enum LanguageEnum {
  EN = 'en',
  VN = 'vn',
}
const resources = {
  [LanguageEnum.EN]: {
    translation: enTranslation,
  },
  [LanguageEnum.VN]: {
    translation: viTranslation,
  },
}

const STORE_LANGUAGE_KEY = 'settings.lang'

type Locale = string | undefined

function detectUserLanguage(): Locale {
  const language = LocalStorage.getItem(STORE_LANGUAGE_KEY)
  if (language) {
    return language
  }
  try {
    const locale: Locale = isIOS
      ? NativeModules.SettingsManager.settings?.AppleLanguages?.[0]
      : NativeModules.I18nManager.localeIdentifier
    return locale?.split('_')?.[0]
  } catch (error: unknown) {
    console.error('Failed to detect user language:', error instanceof Error ? error.message : error)
    return undefined
  }
}

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  detect: detectUserLanguage,
  cacheUserLanguage: (language: string) => {
    LocalStorage.setItem(STORE_LANGUAGE_KEY, language)
  },
}

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    compatibilityJSON: 'v3',
    lng: LocalStorage.getItem(STORE_LANGUAGE_KEY) || LanguageEnum.VN,
    detection: {},
    // keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export const DefineI18n = {
  ...viTranslation,
  __init__: function () {
    let object = convertObj(this)
    for (const property in object) {
      this[property] = object[property]
    }
  },
}

export default i18n
