import React from 'react';

export default function TodoItem({text, toggleItem, deleteItem }){
  return(
    <div>
      <li onClick={toggleItem}> {text} </li>
      <button onClick={deleteItem}>Delete </button>
    </div>
  )
}
