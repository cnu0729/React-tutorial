import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../TicTapToe.css';
// 현재 폴더에서 가져온 파일 동일한 폴더 위치에서 다른 파일을 가져오는 것
// 현재 폴더를 감싸고 있는 상위 폴더에서 다른 파일을 가지고 오는 것

//     ↓ 배열랜덤섞기   배열
const shuffleArray = (array) => {
  // sort = 가지런히 정렬하다 할 때 정렬 , 랜덤으로 나온 값을 정렬
  // Math.radom()-0.5 : 배열을 랜덤으로 섞을 때 자주 사용 -0.5 ~ 0.5 사이 생성
  // -0.5 없으면 0.0 ~ 0.99999999.. 사이 값 반환 (0.5 => 범위 지정)
  return array.sort(() => Math.random() - 0.5);
};

const TicTapToe= () => {
  // numbers : 1~9 숫자 섞인 배열     
  // ...Array(9) 숫자가 담길 그릇을 9개 만듬 숫자가 담길 그릇이 9개
  // .keys() 숫자를 가지고 옴
  // 어떤 숫자를 가지고 오냐면 0=>0+1 1~9까지 생성
  // 1~9까지 생성된 수를 shuffleArray(배열랜덤섞기)를 이용해서 숫자가 담긴 그릇을 섞는 것                                  
  const [numbers, setNumbers] = useState(shuffleArray([...Array(9).keys()].map(n => n + 1)));

  // 사용자가 클릭해야 하는 다음 숫자를 나타냄
  const [nextNumber, setNextNumber] =useState(1); // 사용자가 클릭해야한느 처음 수 1 부터시작

  // 게임 상태에 따라 사용자한테 보여줄 메세지 표현
  const [message, setMessage] = useState(''); //빈공간으로 놓기 (처음에는 할 말 없기 떄문)
  //사용자가 정답을 확인하면 다음단계로 이동하는 버튼이 보이게 생성
  const [timer, setTimer] = useState(5);
  const [isCorrect, setIsCorrect] = useState(false); //정답확인 전이라 false

  useEffect(() => {
    let countdown; // count = 숫자 down = 내림 숫자가 점점 내려간다는 영어
    if( timer > 0 ){ // 남은 시간이 0보다 크다면 숫자를 점점 줄이겠다
        //점점 시간이 줄어드는 효과를 만들어서 적용
        countdown = setTimeout(() => {
            setTimer(timer - 1);
        }, 1000);

    } else if (timer === 0) { //남은 시간이 없다면
        alert("시간초과 ! 게임이 종료되었습니다.");
    }
    
});
  //     ↓ 숫자 클릭하기
  const handleNumberClick = (number) => {
  // 만약에 현재 사용자가 클릭해야하는 숫자와 사용자가 클릭한 숫자가 서로 일치하는가?
    if ( number === nextNumber ) {
      if (  nextNumber  === 9) { 
        //맞추면 메세지내용 맞췄습니다.! 로 변경하기
        setMessage('축하해요~! 모든 숫자를 순서대로 클릭했습니다!');
        setIsCorrect(true);
      } else {
        setNextNumber(nextNumber + 1);
        setTimer(5);
      }
    } else {
     //틀렸을경우 메세지 보여주기
     setMessage('틀렸습니다! 다시 시도하세요.')
    }
  };

  //    ↓ 재시작버튼
  const handleRestart = () => {
    setNumbers(shuffleArray([...Array(9).keys()].map(n => n + 1))); // 다시 초기 숫자 세팅
    // 다음 숫자 & 메세지 셋팅
    //번호초기화 
    setNextNumber(1);
    //메세지 초기화
    setMessage('');
    setTimer(5);
    setIsCorrect(false);
  };

  return (
    <div className="tictaptoe-container">
      <h1>TicTapToe</h1>
      <div className='timer'>남은시간 : {timer}초</div>
      <div className="tictaptoe-grid">
        {/*       map(= system.out.print) */}
        { numbers.map((number) => ( //          ↓ 숫자클릭하기
          <button key={number} onClick={() =>  handleNumberClick(number)} className="tictaptoe-button">
            {number}
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
      {/* 예를 들어 수를 모두 맞출 경우에만 다음 단계로 이동 버튼 보여주기 */}
      { isCorrect ? 
                        (<Link to="/TTTTwoStep"><button className="restart-button">다음 단계로 이동</button></Link>) 
                        : 
                        ( <button onClick={handleRestart} className="restart-button">게임 재시작</button> ) }
    </div>
  );
};

export default TicTapToe;
