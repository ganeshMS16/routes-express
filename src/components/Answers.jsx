import React, { useEffect, useState } from 'react';

function Answers({ answers, selectedAnswers, answerState, onSelect, questionId }) {
    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    // Shuffle answers every time the question changes
    useEffect(() => {
        const shuffled = [...answers].sort(() => Math.random() - 0.5);
        setShuffledAnswers(shuffled);
    }, [answers, questionId]); 

    return (
        <ul id='answers'>
            {shuffledAnswers.map((answer, index) => {
                const isSelected = selectedAnswers === answer;
                let cssClass = '';
                if (isSelected) {
                    if (answerState === 'answered') {
                        cssClass = 'selected';
                    } else if (answerState === 'correct') {
                        cssClass = 'correct';
                    } else if (answerState === 'wrong') {
                        cssClass = 'wrong';
                    }
                }
                return (
                    <li key={index} className='answer'>
                        <button className={cssClass} onClick={() => onSelect(answer)}>
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default Answers;
