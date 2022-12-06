import React from "react";
import '/src/styles/TodoItem.css'

const TodoItem = ({ todo, completeTodo, deleteTodo }) => {

  const onComplete = () => {
    completeTodo(todo.text)
  }

  const onDelete = () => {
    deleteTodo(todo.text)
  }

  return (
    <li className={`item-list ${todo.completed && 'check-item-list--active'}`}>
      <div className="check-button-container">
        <button
          className={`check-button ${todo.completed && 'check-button--active'}`}
          onClick={onComplete}
        >
          <i className="fa-solid fa-check"></i></button>
      </div>
      <p className={`${todo.completed && 'check-p--active'}`}>{todo.text}</p>
      <button
        className={`trash-button ${todo.completed && 'check-trash--active'}`}
        onClick={onDelete}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </li>
  )
}

export { TodoItem }