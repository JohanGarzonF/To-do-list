import React from 'react'
import '/src/styles/TodoSearch.css'

const TodoSearch = ({ searchValue, setSearchValue, loading }) => {

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
        disabled={loading}
      />
    </div>
  )
}

export { TodoSearch }