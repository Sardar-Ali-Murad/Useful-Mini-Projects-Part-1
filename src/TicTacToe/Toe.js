import { LocationSearchingRounded } from '@mui/icons-material'
import { refType } from '@mui/utils'
import React from 'react'
import arr from "./data"
import "./toe.css"

const Toe = () => {
    let [state,setState]=React.useState(false)
    let [boxes,setBoxes]=React.useState(arr)
    let [win,setWin]=React.useState(false)
    let [lose,setLose]=React.useState(false)


    function boxHandler(id){
        let box=boxes.find((all)=>all.id===id)

        if(!win && !lose && box.value===""){
            setBoxes((pre)=>{
                return pre.map((all)=>{
                      return all.id===id?{...all,value:!all.value===""?all.value:state===true?'X':'O'}:all
                })
            })
            setState((pre)=>!pre)
        }   
    }

    function reset(){
        setState(false)
        setBoxes(arr)
        setWin(false)
        setLose(false)
    }

    React.useEffect(()=>{
        let cond1=boxes[0].value===boxes[1].value && boxes[0].value===boxes[2].value && boxes[0].value!==""
        let cond2=boxes[3].value===boxes[4].value && boxes[3].value===boxes[5].value && boxes[3].value!==""
        let cond3=boxes[6].value===boxes[7].value && boxes[6].value===boxes[8].value && boxes[6].value!==""
        let cond4=boxes[0].value===boxes[4].value && boxes[0].value===boxes[8].value && boxes[0].value!==""
        let cond5=boxes[6].value===boxes[4].value && boxes[6].value===boxes[2].value && boxes[6].value!==""
        let cond6=boxes[0].value===boxes[3].value && boxes[0].value===boxes[6].value && boxes[0].value!==""
        let cond7=boxes[1].value===boxes[4].value && boxes[1].value===boxes[7].value && boxes[1].value!==""
        let cond8=boxes[2].value===boxes[5].value && boxes[2].value===boxes[8].value && boxes[2].value!==""
        let loseCond=boxes.some((all)=>!all.value==="")
        
        if(loseCond && !win){
            setLose(true)
        }
        
        if(cond1 || cond2 || cond3 || cond4 || cond5 || cond6 || cond7 || cond8){
            setWin(true)
            setLose(false)
        }
        
    },[boxes,lose])

    React.useEffect(()=>{
         let cond=boxes.some((all)=>all.value==="")
         if(!cond && !win){
            setLose(true)
         }
    },[boxes,win])
    
    console.log(lose)
    
    return (
    <div className='toeMain'>
       <h1 className='dark' style={{textAlign:"center",fontSize:"30px",marginTop:"20px",marginBottom:"20px",marginRight:"20px"}}>Welcome to the TickTacToe Game</h1>

       <div className='boxesMain'>
          {
            boxes.map((all)=>{
                return(
                      <div className='singleBox' onClick={()=>boxHandler(all.id)}>
                         <p className='dark' style={{fontSize:"30px"}}>{all?.value}</p>
                     </div>
                    )
            })
          }
       </div>
       {
        win && 
        <p className='light' style={{marginLeft:"30%",marginTop:"40px"}}>You Win Reset To play again <span style={{fontWeight:"bold",textAlign:"center",textDecoration:"underline",cursor:"pointer",color:"blue"}} className="dark" onClick={reset}>Reset</span></p>
       }
       {
        lose && 
        <p className='light' style={{marginLeft:"30%",marginTop:"40px"}}>You Lose The Game Reset To play again <span style={{fontWeight:"bold",textAlign:"center",textDecoration:"underline",cursor:"pointer",color:"blue"}} className="dark" onClick={reset}>Reset</span></p>
       }
    </div>
  )
}

export default Toe
