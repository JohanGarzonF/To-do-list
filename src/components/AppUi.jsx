import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
import { CreateTodoButton } from './CreateTodoButton'
import { Modal } from './Modal'


const AppUi = () => {

  const { searchedTodos, openModal, setOpenModal } = useContext(TodoContext)

  return (
    <div className="App">
      <div className="header-container">
        <TodoCounter />
        <TodoSearch />
      </div>
      <TodoList />
      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  )
}

export default AppUi