import React from 'react'
import Header from './components/header/Header'
import TodoApp from './components/todo-app'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <TodoApp />
      </div>
    )
  }
}

export default App
