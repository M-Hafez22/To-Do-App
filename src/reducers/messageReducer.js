const messageReducer = (state = "you have no tasks", action) => {
	switch (action.type) {
		case 'SHOW_ALL_TODOS_MESSAGE':
			return state = "you have no tasks";

		case 'SHOW_COMPLETED_TODOS_MESSAGE':
			return state = "You have tasks to do";

		case 'SHOW_ACTIVE_TODOS_MESSAGE':
			return state = "congratulations You have completed all tasks";
			
		default:
			return state;
	}
}


export default messageReducer;
