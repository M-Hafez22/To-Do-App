import React from 'react';
import AddTodoItem from './components/AddTodoItem'
import TodosList from './components/TodosList'
import Filters from './components/Filters'
import './styles/main.scss';


function App() {
  return (
    <div className="App">
      <AddTodoItem />
      <Filters />
      <TodosList />
    </div>
  );
}

export default App;
