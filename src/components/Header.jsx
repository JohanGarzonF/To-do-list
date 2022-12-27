import React from 'react'

const Header = ({ children, loading }) => {

  return (
    <header className="header-container">
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, {loading}))
      }
    </header>
  )
}

export { Header }