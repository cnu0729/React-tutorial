import React, { useEffect, useState } from 'react';
import '../TTTTwoStep.css';

const 배열랜덤섞기 = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

/* TTTTwoStep 컴포넌트 시작 위치 */
const TTTTwoStep = () => {
    const [numbers, setnumbers] = useState(배열랜덤섞기([...Array(20).keys()].map( n => n + 1 )));
    const [nextNumber, setNextNumber] = useState(1);
    const [message, setMessage] = useState('');
    const [timer, setTimer] = useState(20); //처음 초기 시간 설정

    //useEffect( function 기능명  () => {어떤 기능이 동작해야하나요?  }, [어떤값이변경될때마다 function기능이 움직여야하나요?]);
    //useEffect(                  () => {},  []);
    //useEffect(                  () => {},  [numbers]); -> numbers 숫자가 변경될 때마다 fuction 기능 발생
    /*
    useEffect(() => {
    setTimer(3);
        console.log("useEffect Hook은 효과가 소비자의 눈으로 보이지 않기 때문에");
        console.log("F12 개발자모드 console 창에서 확인해야 함");
        console.log("useEffect 시작!");
    }, []);
    */
   /*
   useEffect(() => {
    // 소비자가 검색하고 싶은 검색어가 들어올 떄마다 일치하는 내용을 검색하기
    // 검색이 실시간으로 됨
    // 끝말잇기로 시작하는 단어를 보여주자
   }, [끝말잇기])
   */
   useEffect(() => {
    console.log("F12에서 자동으로 콘솔로그가 찍히는지 확인하자");
   }, []);
    useEffect(() => {
        let countdown; // count = 숫자 down = 내림 숫자가 점점 내려간다는 영어
        if( timer > 0 ){ // 남은 시간이 0보다 크다면 숫자를 점점 줄이겠다
            //점점 시간이 줄어드는 효과를 만들어서 적용
            countdown = setTimeout(() => {
                setTimer(timer - 1);
            }, 2000);

        } else if (timer === 0) { //남은 시간이 없다면
            alert("시간초과 ! 게임이 종료되었습니다.");
        }
        
    });

    const handleNumberClick = (number) => {
        if (number === nextNumber){
            if (nextNumber === 20){
                setMessage('우와~ 축하해요');
            } else {
                setNextNumber(nextNumber + 1);
            }
        }else{
            setMessage('땡 !!! 처음부터 다시 시도하세요.')
            setTimer(20);
        }
    }

    const handleRestart = () => {
        setnumbers(배열랜덤섞기([...Array(20).keys()].map(n => n + 1 )));
        setNextNumber(1);
        setMessage('');
        setTimer(20); // 재시작 버튼에도 timer 5초로 재설정
    };

    return (
        <div className="TTTTwoStep-container">
            <h1>TicTapToe LEVEL2</h1>
            <div className='timer'>남은시간 : {timer}초</div>
            <div className="TTTTwoStep-grid">
                {numbers.map((number) => (
                    <button key={number} onClick={() => handleNumberClick(number)} className="TTTTwoStep-button">
                        {number}
                    </button>
                ))}
            </div>
            <p className="message">{message}</p>
            <button onClick={handleRestart} className="restart-button">게임 재시작</button>
        </div>
    )
}

export default TTTTwoStep;