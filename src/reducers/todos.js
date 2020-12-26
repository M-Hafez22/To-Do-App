let initi = JSON.parse(localStorage.getItem('Todos')) || [];
const todos = (state = initi, action) => {
  switch (action.type) {

    case 'ADD_TODO':
      state =[
        ...state,
        {
          id: action.id,
          text: action.text,
          complete: false
        }
      ]
      localStorage.setItem('Todos', JSON.stringify(state));
      return state
      
    case 'TOGGLE_TODO':
      state = state.map(
        (todo) => todo.id === action.id
          ? { ...todo, complete: !todo.complete }
          : todo
      )
      localStorage.setItem('Todos', JSON.stringify(state));
      return state

    case 'DELETE':
      state = state.filter(todo => todo.id !== action.id)
      localStorage.setItem('Todos', JSON.stringify(state));
      return state

    default:
      return state
  }
}

export default todos
