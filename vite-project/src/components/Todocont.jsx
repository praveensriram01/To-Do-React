import React from 'react'
import Todoist from './todoist'

function Todocont({todo}) {
  return (
    <div className="container">
      {todo.map((todos) => {
        return (
          <Todoist todo={todo}/>
        )
      })}
    </div>
  )
}

export default Todocont