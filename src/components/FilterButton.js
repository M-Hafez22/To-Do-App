import React from 'react';
import { activeColor } from '../helper/colors';

export default function FilterButton({type, onClick, current}){

  const currentFilterStyle = {
    color : activeColor,
    borderColor : activeColor
  }

  return(
    <button
      style={ current ?  currentFilterStyle : null}
      onClick={onClick}>{type}
    </button>
  )
}
