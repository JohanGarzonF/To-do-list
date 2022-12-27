import React, { Fragment } from 'react'
import '/src/styles/TodoCounter.css'

const TodoCounter = ({ totalTodos, completedTodos, loading }) => {

  return (
    <div className={`${loading && "todoCounter--loading"}`}>
      <h2 className="TitleCounter">Your Task</h2>
      <span className="counter-tasks">Completed {completedTodos} to {totalTodos}</span>
    </div>
  )
}

export { TodoCounter }