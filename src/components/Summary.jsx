import React from 'react'
import completeQuiz from "../assets/quiz-complete.png"
import questions from '../../questions'


function Summary({userAnswers}) {
    return (
        <div id="summary">
            <img src={completeQuiz} alt="quiz complete" />
            <h2>Quiz Completed!</h2>
            <div className="summary-stats">
                <p>
                    <span className='number'>10% </span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>60% </span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>30% </span>
                    <span className='text'>answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer,index)=>{
                    return (
                        <li key={index}>
                    <h3>{index+1}</h3>
                    <p className='question'>{questions[index].text}</p>
                    <p className='user-answer'>{answer}</p>
                </li>
                    )
                })}
                
            </ol>
        </div>
    )
}

export default Summary