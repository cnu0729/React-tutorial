import React, {useState} from "react";
import { Link } from "react-router-dom";
import './TicTapToe.css';

const GameTwoStep = () => {
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState(Math.floor(Math.random()*30)+1);
    const [attempts, setAttempts] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleChange = (e) => {
        setGuess(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userGuess = parseInt(guess, 10);

        setAttempts(attempts + 1);

        if(userGuess === number){
            setMessage('축하합니다. 맞추셨습니다.');
            setIsCorrect(true);
        }else if(userGuess > number){
            setMessage('DOWN↓');
        }else{
            setMessage('UP↑');
        }

        setGuess('');
    }
    const handleRestart = () => {
        const newNumber = Math.floor(Math.random()* 30) + 1;
        setNumber(newNumber);
        setAttempts(0);
        setMessage('');
        setGuess('');
        setIsCorrect(false);
    }
    return(
        <div className="Game">
            <h1>??GUESS NUMBER LEVEL2</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                    value={guess}
                    onChange={handleChange}
                    placeholder="1~30 까지 숫자 입력"
                    className="Game-input"
                />
                <button className="Game-button" type="submit">추측하기</button>
            </form>
            <p>{message}</p>
            { isCorrect ?
                        ( <Link to="/game"><button className="restart-button">1단계로 돌아가기</button></Link>)
                        :
                        ( <button className="restart-button" onClick={handleRestart}>재시작버튼</button> )}
            
        </div>
    )
}
export default GameTwoStep;