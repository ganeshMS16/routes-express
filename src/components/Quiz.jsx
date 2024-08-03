import React, { useState } from 'react'
import QUESTIONS from "../../questions.js"
function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    const handleSelectAnswers = (selectedAnswers) => {
        setUserAnswers((prevUserAnswers) => {//take a variable to store prevUserAnswers
            return [...prevUserAnswers, selectedAnswers]//to also store the previous answers of the user
        })
    }
    return (
        <div id="quiz">
            <div id='question'>
                <h3>{QUESTIONS[activeQuestionIndex].text}</h3>
                <ul id='answers'>
                    {
                        QUESTIONS[activeQuestionIndex].answers.map((answer, index) => {
                            return (
                                <li key={index} className='answer'>
                                    <button className='answer' onClick={() => { handleSelectAnswers(answer) }}>
                                        {answer}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Quiz