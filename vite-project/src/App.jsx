import { useState } from 'react';
import './App.css';
import Inputing from './components/Inputing';
import Todocont from './components/Todocont';

function App() {

  const [inputVal, setInputVal] = useState('')
  const [todos, setTodos] = useState([])

  function writeToDo(e) {
    setInputVal(e.target.value)
    console.log(e.target.value)
  }

  function addTodo() {
    setTodos((prevTodo) => [...prevTodo, inputVal])
    setInputVal('')
  }

  //console.log(todos)

  return (
    <main>
      <h1>To Do List</h1>
      <hr />
      <Inputing inputVal={inputVal} writeToDo={writeToDo} addTodo={addTodo}/>
      <Todocont todo={todos}/>

    </main>
  )
}

export default App
