import React from 'react'
import AppUI from './components/AppUi'
import { TodoProvider } from './context/TodoContext'
import './App.css'

// const defaultTodos = [
//   {
//     text: 'cortar cebolla',
//     completed: false
//   },
//   {
//     text: 'tomar curso de react',
//     completed: false
//   },
//   {
//     text: 'aprender react native',
//     completed: false
//   },
//   {
//     text: 'aprender python',
//     completed: false
//   },
// ]

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App
