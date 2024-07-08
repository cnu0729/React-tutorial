import React, { useEffect, useState } from 'react';
import './TicTapToe.css';

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const TicTapToe= () => {
  const [numbers, setNumbers] = useState(shuffleArray([...Array(9).keys()].map(n => n + 1)));
  const [nextNumber, setNextNumber] =useState(1); //1 부터시작
  const [message, setMessage] = useState(''); //빈공간으로 놓기

  const handleNumberClick = (number) => {
    if ( number === nextNumber ) {
      if (  nextNumber  === 9) { 
        //맞추면 메세지내용 맞췄습니다.! 로 변경하기
        setMessage('축하해요~! 맞췄습니다!')
      } else {
        setNextNumber(nextNumber + 1);
        setMessage('');
      }
    } else {
     //틀렸을경우 메세지 보여주기
     setMessage('틀렸습니다! 다시 시도하세요.')
    }
  };

  const handleRestart = () => {
    setNumbers(shuffleArray([...Array(9).keys()].map(n => n + 1)));
    //번호초기화 
    setNextNumber(1);
    //메세지 초기화
    setMessage('');
  };

  return (
    <div className="tic-tap-container">
      <h1>TicTapToe</h1>
      <div className="grid">
        { numbers.map((number) => (
          <button key={number} onClick={() =>  handleNumberClick(number)} className="number-button">
            {number}
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
      <button onClick={handleRestart} className="restart-button">게임 재시작</button>
    </div>
  );
};

export default TicTapToe;
