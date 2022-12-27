import { useState, useEffect } from 'react'

const useStorageListener = (synchronizeItem) => {
  const [storageChange, setStorageChange] = useState(false)

  useEffect(() => {
    const onChange = change => {
      if (change.key === 'TODOS_V1') {
        setStorageChange(true)
      }
    }
    window.addEventListener('storage', onChange)
    return (
      window.removeEventListener('storage', onChange)
    )
  }, [])


  const toggleShow = () => {
    setStorageChange(false)
    synchronizeItem()
  }

  return {
    show: storageChange,
    toggleShow
  }

}


export { useStorageListener }