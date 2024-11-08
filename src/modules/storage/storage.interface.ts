export interface IStorage {
  getItem(key: string): string
  setItem(key: string, value: string): void
  removeItem(key: string): void
  clear(): void
}

const md5Key = (str: string): string => {
  return 'dev_' + str
}

export const DefineKeyStorage = {
  LANGUAGE: md5Key('language'),
  ACCESS_TOKEN: md5Key('access_token'),
  REFRESH_TOKEN: md5Key('refresh_token'),
  USER_INFO: md5Key('user_info'),
} as const

export type TypeKeyStorage = (typeof DefineKeyStorage)[keyof typeof DefineKeyStorage]
