import React, { useCallback, useRef, useState } from 'react'
import QUESTIONS from "../../questions.js"
import completeQuiz from "../assets/quiz-complete.png"
import QuestionTimer from './QuestionTimer.jsx';
function Quiz() {
    const shuffledAnswers=useRef;
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState,setAnswerState]=useState("");
    const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length-1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswers = useCallback((selectedAnswers) => {
        setAnswerState("answered")
        setUserAnswers((prevUserAnswers) => {//take a variable to store prevUserAnswers
            return [...prevUserAnswers, selectedAnswers]//to also store the previous answers of the user by using spread operator
        })
        setTimeout(()=>{
            if(selectedAnswers===QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState("correct")
            }else{
                setAnswerState("wrong")
            }
            setTimeout(()=>{
                setAnswerState("")
            },2000)
        },1000)
    },[]) 
    
    const handleSkipAnswers=useCallback(()=>handleSelectAnswers(null),[handleSelectAnswers])//this is called even when the answers is selected so that this reruns and for new answer new timer is set

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={completeQuiz} alt="quiz complete" />
                <h2>Quiz Completed!</h2>
            </div>
        )

    }
    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex]?.answers]//spread orerator gives a new array by spreading all 
       shuffledAnswers.current.sort(() => Math.random() - 0.5)//shuffling answers
    }

    return (
        <div id="quiz">
            {/* handleSelectAnswers is a function hence a js object and is recreated everytime while object has new reference everytime */}
            <QuestionTimer 
            key={activeQuestionIndex}
            timeOut={10000} 
            onTimeOut={handleSkipAnswers}/>
            <div id='question'>
                <h3>{QUESTIONS[activeQuestionIndex]?.text}</h3>
                <ul id='answers'>
                    {
                        shuffledAnswers.current?.map((answer, index) => {
                            const isSelected=userAnswers[userAnswers.length-1]===answer;//the recent or last one stored is equal to the user selected one answer
                            let cssClass='';
                            if(answerState==='answered' && isSelected){
                                cssClass="selected"
                            }

                            if((answerState==="correct" || answerState==="wrong") && isSelected){
                                cssClass=answerState;
                            }
                            return (
                                <li key={index} className='answer'>
                                    <button className={cssClass} onClick={() => { handleSelectAnswers(answer) }}>
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