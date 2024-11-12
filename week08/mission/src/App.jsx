import React from 'react';
import TodoCard from './components/todocard';
import { useState } from 'react';

function App() { 
  const[title, setTitle] = useState();
  const[detail, setDtail] = useState();

  const handelTitle = (event) => {
    setTitle(event.target.value);
  }

  const handelDetail = (event) => {
    setDtail(event.target.value);
  }

  return (
    <>
      <h1>⚡ UMC ToDoList ⚡</h1>

      <form>
        <input 
          type='text'
          placeholder='제목 입력' 
          onChange={handelTitle} 
          value={title}
        />
        <input 
          type='text' 
          placeholder='내용 입력' 
          onChange={handelDetail} 
          value={detail}
        />
        <input type='submit'>ToDo 생성</input>
      </form>

      <TodoCard/>
    </>
  );
}

export default App;
