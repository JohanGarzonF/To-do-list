import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import '/src/styles/TodoSearch.css'

const TodoSearch = () => {

  const { searchValue, setSearchValue } = useContext(TodoContext)

  const onSearchValueChange = (evt) => {
    setSearchValue(evt.target.value)
  }

  return (
    <div className="input-container">
      <input
        className="inputSearch" 
        placeholder="Filter your tasks"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  )
}

export { TodoSearch }