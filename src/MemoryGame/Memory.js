import React from 'react'
import "./Memory.css"
import data from "./data"
import { textAlign } from '@mui/system'

const Memory = () => {
    let [cards,setCards]=React.useState(data)

    let [arr,setArr]=React.useState([])

    function cardHandler(id){
        setCards((pre)=>{
          return  pre.map((all)=>{
                return all.id===id?{...all,selected:!all.selected}:all
            })
        })

        let card=cards.find((all)=>all.id===id)
        setArr((pre)=>[...pre,card])
    }

    React.useEffect(()=>{
      if(arr.length===2){

        let cond=arr[0].uniqueId===arr[1].uniqueId

        if(cond){
            setArr([])
        }

        else{

            setTimeout(()=>{
                setCards((pre)=>{
                    return pre.map((all)=>all.uniqueId===arr[0].uniqueId?{...all,selected:false}:all)
                })
                setCards((pre)=>{
                    return pre.map((all)=>all.uniqueId===arr[1].uniqueId?{...all,selected:false}:all)
                })
                setArr([])
            },3000)
        }
      }
    },[arr])


    function reset(){
        setCards(data)
        setArr([])
    }

    console.log(arr.length)
  return (
    <div className='MainGrid'>
        <h1 className='dark' style={{textAlign:"center",marginTop:"30px",fontSize:"30px"}}>Welcome to the memory Game</h1>

    <div className='memoryMain'>
      {
          cards.map((all)=>{
              return <div onClick={()=>cardHandler(all.id)} className={`single ${all.selected?"activeCard":""}`}>
                <h1>{all?.icon}</h1>
            </div>
         })
        }
    </div>

    <button className='btn' style={{marginLeft:"47%",marginBottom:"30px",marginTop:"10px",padding:"10px"}} onClick={reset}>RESET</button>

        </div>
  )
}

export default Memory
