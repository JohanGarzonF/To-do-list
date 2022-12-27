import React from 'react'
import { useStorageListener } from './useStorageListener'
import '../styles/ChangeAlert.css'

const ChangeAlert = ({ synchronizeItem }) => {

  const { show, toggleShow } = useStorageListener(synchronizeItem)

  if(show){
    return (
      <div className='alert-changes'>
        <p>Hubo cambios</p>
        <button
          className='button-changes'
          onClick={toggleShow}
        >
          Volver a cargar la información
        </button>
      </div>
    )
  } else {
    null
  }
}

export { ChangeAlert }