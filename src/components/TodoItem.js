import React from 'react';
import { activeColor, bgColor, deleteColor } from '../helper/colors';

export default function TodoItem({text, toggleItem, deleteItem }){
  return(
    <div className='todoItem'>

      <li onClick={toggleItem}> {text} </li>
      <div className='buttons'>
        <button
          className='item-button'
          style={{ backgroundColor: activeColor }}
          onClick={toggleItem}>
          Done
        </button>

        <button
          className='item-button'
          style={{ backgroundColor: deleteColor }}
          onClick={deleteItem}>
          Delete
        </button>
      </div>
    </div>
  )
}
