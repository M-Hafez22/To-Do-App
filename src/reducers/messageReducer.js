const messageReducer = (state = "You don't have a to-dos", action) => {
	switch (action.type) {
		case 'SHOW_ZERO_TODOS_MESSAGE' :
			return state = "You don't have a to-dos"
		case 'SHOW_ALL_TODOS_MESSAGE':
			return state = "You're all done";
		case 'SHOW_COMPLETED_TODOS_MESSAGE':
			return state = "You have tasks to do";
		case 'SHOW_ACTIVE_TODOS_MESSAGE':
			return state = "congratulations You have completed all tasks";
		default:
			return state;
	}
}


export default messageReducer;
