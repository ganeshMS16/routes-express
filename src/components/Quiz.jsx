import React, { useCallback, useState } from 'react';
import QUESTIONS from "../../questions.js";
import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';
import Summary from './Summary.jsx';

function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState("");

    const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswers = useCallback((selectedAnswers) => {
        setAnswerState("answered");
        setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswers]);
        
        setTimeout(() => {
            if (selectedAnswers === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState("correct");
            } else {
                setAnswerState("wrong");
            }
            setTimeout(() => {
                setAnswerState("");
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex]);

    const handleSkipAnswers = useCallback(() => handleSelectAnswers(null), [handleSelectAnswers]);

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />;
    }

    return (
        <div id="quiz">
            <QuestionTimer 
                key={activeQuestionIndex}
                timeOut={30000} 
                onTimeOut={handleSkipAnswers} 
            />
            <div id='question'>
                <h3>{QUESTIONS[activeQuestionIndex]?.text}</h3>
                <Answers  
                    key={activeQuestionIndex} 
                    answers={QUESTIONS[activeQuestionIndex].answers} 
                    selectedAnswers={userAnswers[activeQuestionIndex]} // Pass the correct selected answer
                    answerState={answerState} 
                    onSelect={handleSelectAnswers}
                    questionId={QUESTIONS[activeQuestionIndex]?.id} // Pass questionId to reset on question change
                />
            </div>
        </div>
    );
}

export default Quiz;