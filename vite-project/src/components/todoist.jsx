import React from 'react'

function todoist({todo}) {
  return (
    <div className="todo">
        <div className="actions">
          <input type="checkbox" />
        </div>
        <p>{todo}</p>
        <div className="actions">
          <button>Delete</button>
        </div>
      </div>
  )
}

export default todoist