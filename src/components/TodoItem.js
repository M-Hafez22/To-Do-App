import React from 'react';

export default function TodoItem({text, toggleItem, deleteItem }){
  return(
    <div className='todoItem'>

      <li onClick={toggleItem}> {text} </li>
      <div className='buttons'>
        <button className='item-button' onClick={toggleItem}>Done </button>
        <button className='item-button' onClick={deleteItem}>Delete </button>
      </div>
    </div>
  )
}
