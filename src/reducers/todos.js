const todos = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          complete: false
        }
      ]

    case 'TOGGLE_TODO':
      return (
        state.map(
          (todo) => todo.id === action.id
            ? { ...todo, complete: !todo.complete }
            : todo
        )
      )

    case 'DELETE':
      return (
        state.filter(todo => todo.id !== action.id)
    )

    default:
      return state
  }
}

export default todos
