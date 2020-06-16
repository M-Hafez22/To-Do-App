const filterReducer = (state = 'SHOW_ALL_TODOS', action) => {
    switch (action.type) {
        case 'SHOW_ALL_TODOS':
            return state
        case 'SET_FILTER':
            return action.filter
        default:
            return state
    }
}

export default filterReducer;
