import React from 'react';

export default function FilterButton({type, onClick, current}){

  return(
    <button
    className={`${current && "currentFilter"}`}
      onClick={onClick}>{type}
    </button>
  )
}
