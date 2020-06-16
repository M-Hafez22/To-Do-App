const messageReducer = (state = 'You have not enter any todos', action) => {
	switch (action.type) {
		case 'SHOW_ZERO_TODOS_MESSAGE' :
			return state = "You have not enter any todos"
		case 'SHOW_ALL_TODOS_MESSAGE':
			return state = "You're all done";
		case 'SHOW_COMPLETED_TODOS_MESSAGE':
			return state = "You have tasks to do";
		case 'SHOW_ACTIVE_TODOS_MESSAGE':
			return state = "You complete all tasks";
		default:
			return state;
	}
}


export default messageReducer;
