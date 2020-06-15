import React from 'react';
import { useDispatch } from 'react-redux';
import FilterButton from './FilterButton';
import { filter } from '../actions';

export default function Filters() {
  const dispatch = useDispatch();
  const filterTypes = ['ALL', 'ACTIVE', 'COMPLETED'];


  const filters = filterTypes.map(type =>
      <FilterButton
          key={type}
          type={type}
          onClick={() => dispatch(filter(type))}
      />
  )

  return(
    <div>
      {filters}
    </div>
  )
}
