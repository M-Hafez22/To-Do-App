import React,  { useState } from 'react'
import { useDispatch } from 'react-redux';
import Id from '../helper/id';
import { activeColor, deleteColor } from '../helper/colors';

export default function AddTodoItem() {

  // input holder
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();

  // get todo text from user
  const onChange = event => {
      setTodo(event.target.value);
  }

  // Clear the input field
  const cancel = () => setTodo('');

  // submit the todo to ToDo List
  const onSubmit = (event) => {
    event.preventDefault();
    todo !== '' && dispatch({
      type:'ADD_TODO',
      id:Id(),
      text:todo
    });
    setTodo('');
  };

  const massage = 'Add Task';

  return(
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="todo"
        autoComplete='off'
        placeholder={massage}
        value={todo}
        onChange={onChange}
      />
      <div className='buttons'>
          <button
            style={{ backgroundColor: activeColor }}
            type="submit"
          >{massage}
          </button>
          <button
            style={{ backgroundColor: deleteColor }}
            onClick={cancel}
          >cancel
          </button>
      </div>
    </form>
  )
}
