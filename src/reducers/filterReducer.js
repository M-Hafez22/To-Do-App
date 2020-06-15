const filterReducer = (state = 'ALL', action) => {
    switch (action.type) {
        case 'ALL':
            return state
        case 'SET_FILTER':
            return action.filter
        default:
            return state
    }
}

export default filterReducer;
