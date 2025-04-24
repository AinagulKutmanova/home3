
import React from 'react'
import TodoListItem from '../todoListItem/TodoListItem'

const TodoList = ({ todo, onDel, onDone, onImportant }) => {
  return (
    <ul className='list-group mt-1 mb-1'>
      {todo.map(el => (
        <TodoListItem 
          key={el.id} 
          {...el} 
          onDel={onDel} 
          onDone={onDone} 
          onImportant={onImportant} 
        />
      ))}
    </ul>
  )
}

export default TodoList
