import todos from './todos';
import filterReducer from './filterReducer';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    todos,
    filter: filterReducer
});
//export the Combined reducer
export default allReducers;
