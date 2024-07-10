import React, { useEffect, useState } from 'react';
import './TTTTwoStep.css';

const 배열랜덤섞기 = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const TTTTwoStep = () => {
    const [numbers, setnumbers] = useState(배열랜덤섞기([...Array(20).keys()].map( n => n + 1 )));
    const [nextNumber, setNextNumber] = useState(1);
    const [message, setMessage] = useState('');

    const handleNumberClick = (number) => {
        if (number === nextNumber){
            if (nextNumber === 20){
                setMessage('우와~ 축하해요');
            } else {
                setNextNumber(nextNumber + 1);
            }
        }else{
            setMessage('땡 !!! 처음부터 다시 시도하세요.')
        }
    }

    const handleRestart = () => {
        setnumbers(배열랜덤섞기([...Array(20).keys()].map(n => n + 1 )));
        setNextNumber(1);
        setMessage('');
    };

    return (
        <div className="TTTTwoStep-container">
            <h1>TicTapToe LEVEL2</h1>
            <div className="TTTTwoStep-grid">
                {numbers.map((number) => (
                    <button key={number} onClick={() => handleNumberClick(number)} className="TTTTwoStep-button">
                        {number}
                    </button>
                ))}
            </div>
            <p className="message">{message}</p>
        </div>
    )
}

export default TTTTwoStep;