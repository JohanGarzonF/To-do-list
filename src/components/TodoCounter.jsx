import React, { Fragment, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import '/src/styles/TodoCounter.css'

const TodoCounter = () => {

  const { totalTodos, completedTodos } = useContext(TodoContext)
  
  return (
    <Fragment>
      <h2 className="TitleCounter">Your Task</h2>
      <span className="counter-tasks">Completed {completedTodos} to {totalTodos}</span>
    </Fragment>
  )
}

export { TodoCounter }