import React from 'react'
import Typewriter from 'typewriter-effect';
import quiz from "../assets/quiz-logo.png"

function Header() {
  return (
    <header>
    <img src={quiz} alt="quiz-logo" />
    <div id="main_heading">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('REACT QUIZ!')
              .callFunction(() => {
              })
              .pauseFor(2500)
              .start(); 
          }}
          options={{
            autoStart: true,
            loop: false,
            cursor:'|',
          }}
        />
      </div>
    </header>
   
  )
}

export default Header