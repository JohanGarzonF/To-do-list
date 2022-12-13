import React, { useState } from "react";
import '../styles/TodoForm.css'

const TodoForm = ({ addTodo, setOpenModal }) => {

  const [newTodoValue, setNewTodoValue] = useState('')
  const [isError, setIsError] = useState(false)

  const onChange = e => {
    setNewTodoValue(e.target.value)
  }

  const onCancel = () => {
    setOpenModal(false)
  }
  
  const onSubmit = e => {
    e.preventDefault()
    if(newTodoValue !== ''){
      addTodo(newTodoValue)
      setNewTodoValue('')
      setOpenModal(false)
    } else {
      setIsError(!isError)
      setTimeout(() => {
        setIsError(isError)
      }, 2000)
    }
  }

  return (
    <form onSubmit={onSubmit} className="form-todo">
      <label className="form-label">Add a new Todo</label>
      {isError && (
        <p className="form-error-message">This field can not be empty!</p>
      )}
      <textarea
        className="form-text-area"
        placeholder="Type a new task"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="form-button-container">
        <button
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="form-add-button"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export { TodoForm }