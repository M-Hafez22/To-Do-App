import React from 'react';
import { activeColor, deleteColor, bgColor} from '../helper/colors';

export default function TodoItem({text, toggleItem, deleteItem, complete }){
  return(
    <div
      className='todoItem'
      style={{ backgroundColor: complete ? activeColor : bgColor, color: complete && bgColor  }}>

      <li
        className='text'
        onClick={toggleItem}> 
        {text}
      </li>

      <div className='buttons'>
        <button
          className='item-button'
          style={{ backgroundColor: complete ? bgColor : activeColor }}
          onClick={toggleItem}>
          {complete ? 'Undone' : 'Done'}
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
