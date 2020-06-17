import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import fliterListItem from '../helper/filterListItems';
import { updateMessage } from '../actions';

export default function TodosList(){

  // Get states from the store
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);
  const message = useSelector(state => state.message);

  const dispatch = useDispatch();

  // Get filtered list
  const visiableItems = fliterListItem(filter, todos);

  // Update the message depending on the todo list state
  todos.length > 0
    ? dispatch(updateMessage(`${filter}_MESSAGE`))
    : dispatch(updateMessage('SHOW_ZERO_TODOS_MESSAGE'))

  const todosList = visiableItems.map(todo => (
    <TodoItem
      key={todo.id}
      text={todo.text}
      complete={todo.complete}
      deleteItem={() => dispatch({ type: 'DELETE', id: todo.id })}
      toggleItem={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
    />
  ));

  return(
    <div className="list-section">
      <ul className='todoList'>
        {visiableItems.length
          ? todosList
          :<h3 className="message"> {message}</h3>
        }
      </ul>
    </div>
  )
}
