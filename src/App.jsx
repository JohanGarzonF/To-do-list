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
import { Header } from './components/Header'
import { ChangeAlert } from './hooks/ChangeAlert'

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
    synchronizeItem
  } = useTodos()

  return (
    <div className="App">
      <Header 
        loading={loading}
      >
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Header>

      <TodoList
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        error={error}
        onError={() => <TodosError />}
        loading={loading}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearch={(searchText) => (
          <p>No results for {searchText}</p>
        )}
        render={(todo, i) => (
          <TodoItem 
            key={i}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        )}
      >
        {/* {
          (todo, i) => (
            <TodoItem 
              key={i}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          )
        } */}
      </TodoList>

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

      <ChangeAlert
        synchronizeItem={synchronizeItem}
      />

    </div>
  )
}

export default App
