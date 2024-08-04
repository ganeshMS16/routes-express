import React, { useState } from 'react'
import QUESTIONS from "../../questions.js"
import completeQuiz from "../assets/quiz-complete.png"
function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswers = (selectedAnswers) => {
        setUserAnswers((prevUserAnswers) => {//take a variable to store prevUserAnswers
            return [...prevUserAnswers, selectedAnswers]//to also store the previous answers of the user by using spread operator
        })
    }

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={completeQuiz} alt="quiz complete" />
                <h2>Quiz Completed!</h2>
            </div>
        )

    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex]?.answers]//spread orerator gives a new array by spreading all 
    shuffledAnswers.sort(() => Math.random() - 0.5)//shuffling answers

    return (
        <div id="quiz">
            <div id='question'>
                <h3>{QUESTIONS[activeQuestionIndex]?.text}</h3>
                <ul id='answers'>
                    {
                        shuffledAnswers?.map((answer, index) => {
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