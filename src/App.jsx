import { useState } from 'react'
import AppTodo from './components/appTodo/AppTodo'
import TodoSearch from './components/todoSearch/TodoSearch'
import TodoList from './components/todoList/TodoList'
import TodoAdd from './components/addTodo/TodoAdd'

import './App.css'

const App = () => {
  const [todoData, setTodoData] = useState([
    { title: 'Read a book', done: false, important: false, id: 1 },
    { title: 'Learn React', done: false, important: false, id: 2 },
    { title: 'Go to gym', done: false, important: false, id: 3 },
    { title: 'Have a dinner', done: false, important: false, id: 4 }
  ])

  const [btnStatus, setBtnStatus] = useState('All')
  const [text, setText] = useState('')

  const onSetText = (name) => {
    setText(name)
  }

  const search = (todos, textSearch) => {
    if (textSearch.length === 0) return todos
    return todos.filter(todo =>
      todo.title.toLowerCase().includes(textSearch.toLowerCase())
    )
  }

  const onSetBtn = (name) => {
    setBtnStatus(name)
  }

  const filter = (todos, btnSt) => {
    switch (btnSt) {
      case 'All':
        return todos
      case 'Active':
        return todos.filter(todo => !todo.done)
      case 'Done':
        return todos.filter(todo => todo.done)
      default:
        return todos
    }
  }

  const onDelTodo = (id) => {
    const filteredTodo = todoData.filter(todo => todo.id !== id)
    setTodoData(filteredTodo)
  }

  const onDone = (id) => {
    const updatedTodos = todoData.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
    setTodoData(updatedTodos)
  }

  const onImportant = (id) => {
    const updatedTodos = todoData.map(todo =>
      todo.id === id ? { ...todo, important: !todo.important } : todo
    )
    setTodoData(updatedTodos)
  }

  const onEditTodo = (id, newTitle) => {
  const updatedTodos = todoData.map(todo =>
    todo.id === id ? { ...todo, title: newTitle } : todo
  );
  setTodoData(updatedTodos);
}


  const onAddTodo = (text) => {
    const ids = todoData.map(el => el.id)
    const newId = ids.length > 0 ? ids.at(-1) + 1 : 1
    const newTodo = { title: text, done: false, important: false, id: newId }
    setTodoData([...todoData, newTodo])
  }

  const doneCount = todoData.filter(todo => todo.done).length
  const todoCount = todoData.length - doneCount

  const filteredData = filter(todoData, btnStatus)
  const data = search(filteredData, text)

  return (
    <div className='container'>
      <AppTodo doneCount={doneCount} todoCount={todoCount} />
      <TodoSearch btnStatus={btnStatus} onSetBtn={onSetBtn} onSetText={onSetText} />
      <TodoList todo={data} onDel={onDelTodo} onDone={onDone} onImportant={onImportant} onEdit={onEditTodo}/>
      <TodoAdd onAdd={onAddTodo} />
    </div>
  )
}

export default App

