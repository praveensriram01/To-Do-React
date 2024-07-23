import React from 'react'

function Inputing({inputVal, writeToDo, addTodo}) {
  return (
    <div className="input-container">
      <input type="text" placeholder='to-do..?' value={inputVal} onChange={writeToDo}/>
      <button onClick={addTodo}>+</button>
    </div>
  )
}

export default Inputing