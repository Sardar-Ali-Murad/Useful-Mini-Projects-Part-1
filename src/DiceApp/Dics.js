import { areArraysEqual } from '@mui/base'
import { Sledding } from '@mui/icons-material'
import { elementAcceptingRef } from '@mui/utils'
import React from 'react'
import {array,array2} from "./data"
import "./Dice.css"

const Dics = () => {
    let [numbers,setNumbers]=React.useState(array2)
    let [dice,setDice]=React.useState(array)
    let [count,setCount]=React.useState(0)
    let [selectedValue,setSelectedValue]=React.useState(null)
    let [selectedDice,setSelectedDice]=React.useState(array[0])

    function numberHandler(value){
        setNumbers((pre)=>{
           return  pre.map((all)=>all.value===value?{...all,selected:true}:{...all,selected:false})
        })
        setSelectedValue(value)
    }

    function diceHandler(){
        if(selectedValue){
            let random=Math.floor(Math.random() * 5) + 1
            setSelectedDice(dice[random])
        }
    }

    React.useEffect(()=>{
       if(selectedValue){
         if(selectedValue===selectedDice.value){
            setCount((pre)=>pre+2)
         }
         else{
            setCount((pre)=>pre-2)
         }
       }
    },[selectedDice])

    
   function reset(){
    setNumbers(array2)
    setDice(array)
    setCount(0)
    setSelectedValue(null)
    setSelectedDice(array[0])
   }

    console.log(selectedDice)
  return (
    <div className='diceMain'>
       <h1 className='dark'>Select Number</h1>

        <div className='NumbersMain'>
            {
                numbers.map((all)=>{
                    return <div className={`numberSingle light ${all?.selected?"active":""}`} onClick={()=>numberHandler(all?.value)}>{all?.value}</div>
                })
            }
        </div>
       
       <div style={{textAlign:"center",width:"100%"}}>
           <div onClick={diceHandler} style={{marginTop:"50px",cursor:"pointer"}}>
             {selectedDice.icon}
            </div>
         <p className='light' style={{marginTop:"20px",marginBottom:"20px",marginLeft:"27%"}}>Click on the dice to roll</p>

       <div>
          <h1 className='dark' style={{textAlign:"center"}}>Your Scrore</h1>
          <p style={{textAlign:"center",fontSize:"36px"}}>{count}</p>
          <button className='btn' onClick={reset} style={{padding:"20px",width:"200px"}}>Reset</button>
       </div>

       </div>
    </div>
  )
}

export default Dics
