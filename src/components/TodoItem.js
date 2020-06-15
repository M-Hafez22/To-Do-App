import React from 'react';
import { activeColor, deleteColor } from '../helper/colors';

export default function TodoItem({text, toggleItem, deleteItem }){
  return(
    <div className='todoItem'>

      <li
        className='text'
        onClick={toggleItem}
        > {text}
      </li>

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
