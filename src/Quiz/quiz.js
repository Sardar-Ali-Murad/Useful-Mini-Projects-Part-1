import React from 'react'
import "./quiz.css"
import { Link } from 'react-router-dom'

const quiz = () => {
  return (
    <div className='quizMain'>
        <div className='quizBox'>
            <h1 className='dark'>Quizicall</h1>
           <p className='light'>Welcome! to the quiz challange</p>
           <Link to="/test" style={{color:"gray"}}>
              <button className='dark'>Start Quiz</button>
           </Link>
        </div>
    </div>
  )
}

export default quiz
