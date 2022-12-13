import React from 'react'
import '../styles/TodosEmpty.css'

const EmptyTodos = () => {
  return (
    <div className='todoList-none-task'>
      <h2>Wow, you don't have tasks!</h2>
      <p>Use <button>+</button> button to add new tasks</p>
    </div>
  )
}

export { EmptyTodos }