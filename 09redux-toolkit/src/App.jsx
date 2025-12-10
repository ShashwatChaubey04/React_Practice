import { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-blue-900'>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
