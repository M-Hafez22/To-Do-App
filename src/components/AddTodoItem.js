import React,  { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { activeColor, deleteColor } from '../helper/colors';
import { add_todo } from '../actions';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {BsMicFill} from 'react-icons/bs';
import Speech from './Speech'
export default function AddTodoItem() {

  // input holder
  const [todo, setTodo] = useState('');

  const { transcript, listening } = useSpeechRecognition();

  const dispatch = useDispatch();

  // Print the speech into the input field
  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("your browser is not supported!");
    }else{
      setTodo(transcript);
    }
  }, [transcript]);

  // get todo text from user
  const onChange = event => {
      setTodo(event.target.value);
  }

  // Clear the input field
  const cancel = () => setTodo('');

  // submit the todo to ToDo List
  const onSubmit = (event) => {
    event.preventDefault();
    // check the input & add a todo
    todo && dispatch(add_todo(todo));
    // clear the input field
    setTodo('');
  };

  const massage = 'Add Task';

  return(
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="todo"
        autoComplete='off'
        placeholder={massage}
        value={todo}
        onChange={onChange}
      />
      <div className='buttons'>
          <button
            style={{ backgroundColor: activeColor }}
            type="submit" >
            {massage}
          </button>
          <button
            style={{ backgroundColor: deleteColor }}
            onClick={cancel}
          >cancel
          </button>
      </div>
      <Speech todo={todo} massage={massage}/>
    </form>
  )
}
