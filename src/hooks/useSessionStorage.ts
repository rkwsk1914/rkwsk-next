import { SessionStorageDataKeyType } from '@/types/SessionStorageDataType'

export const useSessionStorage = () => {
  const setSessionStorage =  (key: SessionStorageDataKeyType, value: any) => {
    const serializedValue = JSON.stringify(value)
    sessionStorage.setItem(key, serializedValue)
  }

  const getSessionStorage = (key: SessionStorageDataKeyType) => {
    const serializedValue = sessionStorage.getItem(key)
    if (serializedValue) {
      return JSON.parse(serializedValue)
    }
    return null
  }

  return {
    setSessionStorage,
    getSessionStorage
  }
}
