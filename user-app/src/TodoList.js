import { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState([]); //빈 배열
  const [task, setTask] = useState(""); // 초기값 없음

  const 추가버튼 = () => {
    setTodos([...todos, task]); // , = + 기존 할 일에 추가
    setTask(''); //input창 비워주기
  }

  const 삭제버튼 = (index) => {           
    const 삭제후목록 = todos.filter((todos, i) => i !== index); 
    setTodos(삭제후목록);
  }

  return (
    <div className="App">
      <h1>할일 리스트</h1>
      <h3>할일 추가하기</h3>
      <input type='text' 
              value={task}   
              onChange={(e) => setTask(e.target.value)}        
      />
      <button onClick={추가버튼}>추가하기</button>
      <h3>할일 리스트 목록보기</h3>
      {todos.map( (todos, index) =>  (
       
        <li key={index}>
            {index}. {todos}
          <button  onClick={ () => 삭제버튼(index)} >삭제하기</button>
        </li>
      ) )}
    </div>
  );
}

export default TodoList;