import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import '/src/styles/CreateTodoButton.css'

const CreateTodoButton = ({ openModal, setOpenModal }) => {

  const createTask = () => {
    setOpenModal(!openModal)
  }

  return (
    <button 
      className="CreateTodoButton" 
      title="add task"
      onClick={createTask}
    >
      <i className="fa-solid fa-plus"></i>
    </button>
  )
}

export { CreateTodoButton }