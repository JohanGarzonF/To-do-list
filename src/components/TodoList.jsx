import React from 'react'
import '/src/styles/TodoList.css'

const TodoList = ({ children, error, onError, searchText, loading, onLoading, searchedTodos, totalTodos, onEmptyTodos, onEmptySearch, render }) => {

  const renderFunct = children || render

  return (
    <section className="SectionTodoList">
      <ul className={`list-container ${loading && searchedTodos && 'list-container-img-loading'} ${!loading && !searchedTodos.length && 'todoList-none-task'}`}>
        {error && onError()}
        {loading && onLoading()}
        {(!loading && !totalTodos) && onEmptyTodos()}
        {(!!totalTodos && !searchedTodos.length) && onEmptySearch(searchText)}
        {(!loading && !error) && searchedTodos.map(renderFunct)}
      </ul>
      <div className="triangle-decoration"></div>
      <div className="triangle-decoration2"></div>
      <div className="triangle-decoration3"></div>
    </section>
  )
}

export { TodoList }