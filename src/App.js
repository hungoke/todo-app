import React from 'react'
import Header from './components/header/Header'
import TodoApp from './components/todoApp'
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <TodoApp />
      </>
    )
  }
}

export default App
