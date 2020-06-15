import React from 'react';
import { activeColor, mainColor } from '../helper/colors';

export default function FilterButton({type, onClick, current}){

  const currentFilterStyle = {
    color: mainColor,
    backgroundColor : activeColor,
    borderColor : activeColor
  }
  return(
    <button
      style={ current ?  currentFilterStyle : null}
      onClick={onClick}>{type}</button>
  )
}
