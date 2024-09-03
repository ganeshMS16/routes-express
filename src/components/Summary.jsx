import React from 'react'
import completeQuiz from "../assets/quiz-complete.png"
import questions from '../../questions'


function Summary({userAnswers}) {
    const skippedAnswers=userAnswers.filter((answer)=>answer===null);
    const correctAnswers=userAnswers.filter((answer,index)=>answer===questions[index].answers[0]);
    const skipPercentage=Math.round((skippedAnswers.length/userAnswers.length*100))
    const correctPercentage=Math.round((correctAnswers.length/userAnswers.length)*100)
    const incorrectPercentage=100-skipPercentage-correctPercentage;
    return (
        <div id="summary">
            <img src={completeQuiz} alt="quiz complete" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>{skipPercentage}%</span>
                    <span className='text'>skipped Questions</span>
                </p>
                <p>
                    <span className='number'>{correctPercentage}%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>{incorrectPercentage}%</span>
                    <span className='text'>answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer,index)=>{
                    let cssClass="user-answer";
                    if(answer===null){
                        cssClass+=" skipped"
                    }
                    else if(answer===questions[index].answers[0]){
                        cssClass+=" correct"
                    }
                    else{
                        cssClass+=" wrong"
                    }
                    return (
                        <li key={index}>
                    <h3>{index+1}</h3>
                    <p className='question'>{questions[index].text}</p>
                    <p className={cssClass}>{answer ?? "skipped"}</p>
                </li>
                    )
                })}
                
            </ol>
        </div>
    )
}

export default Summary