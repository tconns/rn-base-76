import { DefineKeyStorage, IStorage } from './storage.interface'
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV({
  id: 'app-base',
  encryptionKey: 'app-base-encryption-key',
})

class LocalStorageClass implements IStorage {
  readonly DefineKeyStorage = DefineKeyStorage
  constructor() {}

  getItem(key: string): string {
    return storage.getString(key) || ''
  }

  setItem(key: string, value: string): void {
    storage.set(key, value)
  }

  removeItem(key: string): void {
    storage.delete(key)
  }

  clear(): void {
    storage.clearAll()
  }
}

export const LocalStorage = new LocalStorageClass()
