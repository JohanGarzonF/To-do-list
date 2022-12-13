import React from 'react'
import { Modal } from './components/Modal'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { TodoForm } from './components/TodoForm'
import { CreateTodoButton } from './components/CreateTodoButton'
import { useTodos } from './hooks/useTodos'
import { TodosError } from './components/TodosError'
import { EmptyTodos } from './components/EmptyTodos'
import { TodosLoading } from './components/TodosLoading'
import './App.css'

function App() {

  const {
    searchedTodos,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    completeTodo,
    deleteTodo,
    addTodo,
    loading,
    error,
  } = useTodos()

  return (
    <div className="App">
      <div className="header-container">
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>

      <TodoList
        searchedTodos={searchedTodos}
        error={error}
        onError={() => <TodosError />}
        loading={loading}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        render={(todo, i) => (
          <TodoItem 
            key={i}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        )}
      />

      {/* <TodoList
        loading={loading}
        searchedTodos={searchedTodos}
      >
        {loading && }
        {error && (
          
        )}
        {(!loading && !searchedTodos.length) && (
          
        )}
        {searchedTodos.map((todo, i) => (
          <TodoItem
            key={i}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </TodoList> */}

      <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
    </div>
  )
}

export default App
