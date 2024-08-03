import React from 'react'
import quiz from "../assets/quiz-logo.png"

function Header() {
  return (
    <header>
      <img src={quiz} alt="quiz-logo" />
      <h1>REACT QUIZ</h1>  
    </header>
  )
}

export default Header