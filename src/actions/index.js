import Id from '../helper/id';

export const filter = (filter) => ({
    type: 'SET_FILTER',
    filter
})

export const updateMessage = (type) => ({
    type
})

export const add_todo = (text) => ({
  type:'ADD_TODO',
  id:Id(),
  text
})
