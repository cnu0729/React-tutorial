import React, {useState} from "react";

const GameTwoStep = () => {
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState(Math.floor(Math.random()*30)+1);
    const [attempts, setAttempts] = useState(0);

    const handleChange = (e) => {
        setGuess(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userGuess = parseInt(guess, 10);

        setAttempts(attempts + 1);

        if(userGuess === number){
            setMessage('축하합니다. 맞추셨습니다.');
        }else if(userGuess > number){
            setMessage('DOWN↓');
        }else{
            setMessage('UP↑');
        }

        setGuess('');
    }
    const handleRestart = (e) => {

    }
    return(
        <div>
            <h1>GAMETWOSTEP</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                    value={guess}
                    onChange={handleChange}
                    placeholder="1~30 까지 숫자 입력"
                />
                <button type="submit">추측하기</button>
            </form>
            <p>{message}</p>
            <button onClick={handleRestart}>재시작버튼</button>
        </div>
    )
}
export default GameTwoStep;