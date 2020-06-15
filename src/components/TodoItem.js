import React from 'react';

export default function TodoItem({text, toggleItem }){
  return(
    <div>
      <li onClick={toggleItem}> {text} </li>
    </div>
  )
}
