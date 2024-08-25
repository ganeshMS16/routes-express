import React, { useCallback, useRef, useState } from 'react'
import QUESTIONS from "../../questions.js"
import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';
import Summary from './Summary.jsx';
function Quiz() {
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
      return <Summary userAnswers={userAnswers}/>
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
                <Answers  
                key={activeQuestionIndex} 
                answers={QUESTIONS[activeQuestionIndex].answers} 
                selectedAnswers={userAnswers[userAnswers.length-1]}
                answerState={answerState} 
                onSelect={handleSelectAnswers}
                />
            </div>
        </div>
    )
}

export default Quiz