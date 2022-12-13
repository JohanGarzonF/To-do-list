import React from 'react'
import '/src/styles/TodoList.css'

const TodoList = ({ error, onError, loading, onLoading, searchedTodos, onEmptyTodos, render }) => {

  return (
    <section className="SectionTodoList">
      <ul className={`list-container ${loading && searchedTodos && 'list-container-img-loading'} ${!loading && !searchedTodos.length && 'todoList-none-task'}`}>
        {error && onError()}
        {loading && onLoading()}
        {(!loading && !searchedTodos.length) && onEmptyTodos()}
        {searchedTodos.map((todo, i) => render(todo, i))}
      </ul>
      <div className="triangle-decoration"></div>
      <div className="triangle-decoration2"></div>
      <div className="triangle-decoration3"></div>
    </section>
  )
}

export { TodoList }