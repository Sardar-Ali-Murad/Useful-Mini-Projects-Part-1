import { Card } from "@mui/material"
import React from "react"

import "./test.css"
import quizess from "./data"
import { CircleOutlined, QueryStats } from "@mui/icons-material"
import quiz from "./quiz"
import quizzes from "./data"

const Test = () => {
    let [questions,setQuestions]=React.useState(quizess)
    let [currentQuestion,setCurrentQuestion]=React.useState(questions[0])
    let [showResult,setShowResult]=React.useState(false)
    
    
    let [count,setCount]=React.useState(0)

    let [correct,setCorrect]=React.useState(0)

    function next(){
        if(count<=11){
            setCount((pre)=>pre+1)
        }
    }

    function optionHandler(question,option){
        setQuestions((pre)=>{
            return pre.map((all)=>all?.question===question?{...all,selected:option,isTrue:option===all?.correct?true:false}:all)
        })
        setCurrentQuestion(quizess[count])
    }

    React.useEffect(()=>{
       setCurrentQuestion(questions[count])
    },[questions])
    
    React.useEffect(()=>{
        if(count<=11){
            setCurrentQuestion(questions[count])
        }
        if(count===11){
           setShowResult(true)
        }

    },[count])
    
    React.useEffect(()=>{
       if(showResult){
          questions.forEach((all)=>{
             if(all?.isTrue){
                 setCorrect((pre)=>pre+1)
            }
          })
       }
    },[showResult])

    function reset(){
        setQuestions(quizess)
        setCurrentQuestion(questions[0])
        setCount(0)
        setCorrect(0)
        setShowResult(false)
    }

    console.log(questions)
    


  return (
     <div className="testMain">
        <Card className="card">
            <h1>{currentQuestion.question}</h1>
            <div className="options">
                <p className={`light ${currentQuestion.a==currentQuestion.selected?"activeOption":""}`} onClick={()=>optionHandler(currentQuestion.question,currentQuestion.a)}>{currentQuestion.a}</p>

                <p className={`light ${currentQuestion.b==currentQuestion.selected?"activeOption":""}`} onClick={()=>optionHandler(currentQuestion.question,currentQuestion.b)}>{currentQuestion.b}</p>

                <p className={`light ${currentQuestion.c==currentQuestion.selected?"activeOption":""}`} onClick={()=>optionHandler(currentQuestion.question,currentQuestion.c)}>{currentQuestion.c}</p>

                <p className={`light ${currentQuestion.d==currentQuestion.selected?"activeOption":""}`} onClick={()=>optionHandler(currentQuestion.question,currentQuestion.d)}>{currentQuestion.d}</p>
            </div>
            <div className="buttons">
               <button className="dark" onClick={reset}>Reset</button>
               <button className="dark" onClick={next}>Next</button>
               <button className="dark">Exit</button>
            </div>
            {
                showResult && <p className="light">You have an answered {correct} correct options now Reset to play again</p>
            }
        </Card>
     </div>
  )
}

export default Test
