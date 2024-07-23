import React from 'react'

function todoist({todo, index, delTodo}) {
  return (
    <div className="todo">
        <div className="actions">
          <input type="checkbox" />
        </div>
        <p>{todo}</p>
        <div className="actions">
          <button onClick={() => delTodo(index)}>Delete</button>
        </div>
      </div>
  )
}

export default todoist