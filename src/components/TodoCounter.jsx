import React, { Fragment } from 'react'
import '/src/styles/TodoCounter.css'

const TodoCounter = ({ totalTodos, completedTodos }) => {

  return (
    <Fragment>
      <h2 className="TitleCounter">Your Task</h2>
      <span className="counter-tasks">Completed {completedTodos} to {totalTodos}</span>
    </Fragment>
  )
}

export { TodoCounter }