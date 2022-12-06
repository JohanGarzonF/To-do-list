import React, { useContext } from 'react'
import PortalReactDOM from 'react-dom'
import { TodoContext } from '../context/TodoContext'
import '../styles/Modal.css'

export const Modal = ({ children }) => {


  return PortalReactDOM.createPortal(
    <div className='ModalBackground'>
      {children}
    </div>,
    document.getElementById('modal')
  )
}

