import React from 'react'
import PortalReactDOM from 'react-dom'
import '../styles/Modal.css'

export const Modal = ({ children }) => {

  return PortalReactDOM.createPortal(
    <div className='ModalBackground'>
      {children}
    </div>,
    document.getElementById('modal')
  )
}

