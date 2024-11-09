import { Callback } from 'i18next'
import { useTranslation as originalUseTranslation } from 'react-i18next'

export const useTranslation = () => {
  const { t, i18n } = originalUseTranslation()

  return {
    t,
    locale: i18n.language,
    setLocale: (lang?: string, callback?: Callback) => i18n.changeLanguage(lang),
  }
}
