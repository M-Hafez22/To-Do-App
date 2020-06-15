import React from 'react';
import { useSelector } from 'react-redux';

export default function TodosList(){

    const todos = useSelector(state => state);
    const todosList = todos.map(todo => (
      <li key={todo.id} >{todo}</li>
    ));
  return(
    <div className="list-section">
      <ul>
        {todosList}
      </ul>
    </div>
  )
}
