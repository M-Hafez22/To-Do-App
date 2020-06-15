import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem'

export default function TodosList(){

    const todos = useSelector(state => state);
    const dispatch = useDispatch();

    const todosList = todos.map(todo => (
      <TodoItem
        key={todo.id}
        text={todo.text}
        toggleItem={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
        deleteItem={() => dispatch({ type: 'DELETE', id: todo.id })}
      />
    ));
  return(
    <div className="list-section">
      <ul>
        {todosList}
      </ul>
    </div>
  )
}
