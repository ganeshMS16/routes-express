import React, { useRef } from 'react'

function Answers({ answers, selectedAnswers, answerState, onSelect }) {
    const shuffledAnswers = useRef();//whole component will not rerender while direct dom manupulation happens only the ref target will change directly

    if (!shuffledAnswers.current) {//when answers are not being selected initially only this is run
        shuffledAnswers.current = [...answers]//spread orerator gives a new array by spreading all 
        shuffledAnswers.current.sort(() => Math.random() - 0.5)//shuffling answers
    }
    return (
        <ul id='answers'>
            {
                shuffledAnswers.current?.map((answer, index) => {
                    const isSelected = selectedAnswers === answer;//the recent or last one stored is equal to the user selected one answer
                    let cssClass = '';
                    if (answerState === 'answered' && isSelected) {
                        cssClass = "selected"
                    }

                    if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                        cssClass = answerState;
                    }
                    return (
                        <li key={index} className='answer'>
                            <button className={cssClass} onClick={() => { onSelect(answer) }}>
                                {answer}
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Answers