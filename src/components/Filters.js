import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilterButton from './FilterButton';
import { filter } from '../actions';

export default function Filters() {

  const currentFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filterTypes = ['ALL', 'ACTIVE', 'COMPLETED'];


  const filters = filterTypes.map(type =>
      <FilterButton
          key={type}
          type={type}
          current={type === currentFilter}
          onClick={() => dispatch(filter(type))}
      />
  )

  return(
    <div className='filters'>
      {filters}
    </div>
  )
}
