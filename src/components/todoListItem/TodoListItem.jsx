import { useState, useRef, useEffect } from 'react'
import './TodoListItem.css'

const TodoListItem = ({ id, title, done, important, onDel, onDone, onImportant, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  const inputRef = useRef(null) 

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select() 
    }
  }, [isEditing])

  let clazz = ''
  if (done) clazz += ' done'
  if (important) clazz += ' important'

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    onEdit(id, newTitle)
    setIsEditing(false)
  }

  return (
    <li className='list-group-item d-flex align-items-center'>
      {isEditing ? (
        <input
          type="text"
          className="form-control me-2"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          ref={inputRef} 
        />
      ) : (
        <span
          className={`${clazz} flex-grow-1`}
          onClick={() => onDone(id)}
        >
          {title}
        </span>
      )}

      <button className='btn btn-outline-danger' onClick={() => onDel(id)}>
        <i className="bi bi-trash3"></i>
      </button>

      <button className='btn btn-outline-warning mx-1' onClick={() => onImportant(id)}>
        <i className="bi bi-exclamation"></i>
      </button>

      {isEditing ? (
        <button className='btn btn-outline-success mx-1' onClick={handleSaveClick}>
          <i className="bi bi-check2"></i>
        </button>
      ) : (
        <button className='btn btn-outline-primary mx-1' onClick={handleEditClick}>
          <i className="bi bi-pencil"></i>
        </button>
      )}
    </li>
  )
}

export default TodoListItem
