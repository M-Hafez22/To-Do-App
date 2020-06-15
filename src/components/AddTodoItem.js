import React,  { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function AddTodoItem() {

  // input holder
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();

  // get todo text from user
  const onChange = event => {
      setTodo(event.target.value);
  }

  // submit the todo to ToDo List
  const onSubmit = (event) => {
    event.preventDefault();
    todo !== '' && dispatch({
      type:'ADD_TODO',
      id:todo,
      text:todo
    });
    setTodo('');
  };
  
  return(
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="todo"
        autoComplete='off'
        value={todo}
        onChange={onChange}
      />
      <button
        type="submit">
        Add Task
      </button>
    </form>
  )
}
