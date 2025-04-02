import { useEffect, useState } from "react"

const getStorageValue = (key: string, defaultValue: unknown) => {
  const data = localStorage.getItem(key)
  if (data) {
    const intialValue = JSON.parse(data)
    return intialValue
  }
  return defaultValue
}


export const useLocalStorage = (key: string, defaultValue: unknown) => {

  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]

}
