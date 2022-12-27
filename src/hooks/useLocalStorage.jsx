import React, { useEffect, useState } from 'react'

const useLocalStorage = (itemName, initialValue) => {
  const [synchronizedItem, setSynchronizedItem] = useState(true)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem)
        setLoading(false)
        setSynchronizedItem(true)
      } catch {
        setError(error)
      }
    }, 1000)

  }, [synchronizedItem])

  const saveItem = newItem => {
    try {
      const stringifyItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifyItem)
      setItem(newItem)
    } catch {
      setError(error)
    }
  }

  const synchronizeItem = () => {
    setLoading(true);
    setSynchronizedItem(false)
  }

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem
  }
}

export { useLocalStorage }