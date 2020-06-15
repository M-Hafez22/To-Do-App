import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem'
import fliterListItem from '../helper/filterListItems'


export default function TodosList(){

    const todos = useSelector(state => state.todos);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    // Get filtered list
    const visiableItems = fliterListItem(filter, todos);


    const todosList = visiableItems.map(todo => (
      <TodoItem
        key={todo.id}
        text={todo.text}
        complete={todo.complete}
        toggleItem={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
        deleteItem={() => dispatch({ type: 'DELETE', id: todo.id })}
      />
    ));

    const message = "You're all done";
  return(
    <div className="list-section">
      <ul className='todoList'>
        {todosList.length
          ? todosList
          : <p className='message'>{message}</p> }
      </ul>
    </div>
  )
}
