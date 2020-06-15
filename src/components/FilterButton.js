import React from 'react';

export default function FilterButton({type, onClick}){
  return(
    <button onClick={onClick}>{type}</button>
  )
}
