import todos from './todos';
import filterReducer from './filterReducer';
import messageReducer from './messageReducer'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    todos,
    filter: filterReducer,
    message : messageReducer
});

export default allReducers;
