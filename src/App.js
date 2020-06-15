import React from 'react';
import AddTodoItem from './components/AddTodoItem'
import TodosList from './components/TodosList'

function App() {
  return (
    <div className="App">
      <AddTodoItem />
      <TodosList />
    </div>
  );
}

export default App;
