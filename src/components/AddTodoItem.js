import React,  { useState } from 'react'

export default function AddTodoItem() {
  // input holder
  const [todo, setTodo] = useState('');

  // get todo text from user
  const onChange = event => {
      setTodo(event.target.value);
  }

  return(
    <form>
      <input
        type="text"
        name="todo"
        autoComplete='off'
        value={todo}
        onChange={onChange}
      />
      <p>{todo}</p>
    </form>
  )
}
