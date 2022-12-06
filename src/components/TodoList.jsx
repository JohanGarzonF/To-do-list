import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { TodoItem } from './TodoItem'
import '/src/styles/TodoList.css'

const TodoList = () => {

  const { searchedTodos, completeTodo, deleteTodo, loading, error } = useContext(TodoContext)

  return (
    <section className="SectionTodoList">
      <ul className={`list-container ${loading && 'list-container-img-loading'} ${searchedTodos && 'list-container-img-loading'}`}>
        {loading && <img className='img-loading' src="/public/svg-loading.svg" />}
        {error && (
          <div className='todoList-none-task'>
            <p>Error! try again</p>
          </div>
        )}
        {(!loading && !searchedTodos.length) && (
          <div className='todoList-none-task'>
            <h2>Wow, you don't have tasks!</h2>
            <p>Use <button>+</button> button to add new tasks</p>
          </div>
        )}
        {searchedTodos.map((todo, i) => (
          <TodoItem
            key={i}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <div className="triangle-decoration"></div>
      <div className="triangle-decoration2"></div>
      <div className="triangle-decoration3"></div>
    </section>
  )
}

export { TodoList }