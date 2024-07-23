import React from 'react'
import Todoist from './todoist'

function Todocont({todos, delTodo}) {
  return (
    <div className="container">
      {todos.map((todo, index) => (
        <Todoist todo={todo} index={index} delTodo={delTodo}/>
      ))}
    </div>
    );
}

export default Todocont