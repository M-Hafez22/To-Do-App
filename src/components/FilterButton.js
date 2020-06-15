import React from 'react';
import { activeColor } from '../helper/colors';

export default function FilterButton({type, onClick, current}){
  return(
    <button
      style={{color: current && activeColor}}
      onClick={onClick}>{type}</button>
  )
}
