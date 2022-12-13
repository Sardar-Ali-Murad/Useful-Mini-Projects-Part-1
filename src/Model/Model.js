import { Card } from '@mui/material'
import React from 'react'
import "./model.css"

const Model = () => {
    let [open,setOpen]=React.useState(false)
    
  return (
    <div>
      <h1 className='dark' style={{textAlign:"center",fontSize:"27px",marginTop:"30px"}}>Click on the button to open the model</h1>

      <button className='btn'  style={{width:"100px",padding:"10px",marginLeft:"47%"}} onClick={()=>setOpen(true)}>Open</button>

       {
          open &&
          <div>
           <div className='Overlays'></div>
      <Card style={{margin:"auto",marginTop:"40px",padding:"20px"}} className="model">
          <h1 className='dark' style={{textAlign:"center",fontSize:"24px"}}>Are You Sure yo want to continue</h1>
          <p className='light' style={{textAlign:"center"}}>The Next Page Looks Amazing</p>
          <div className="btns">
            <button className='red light' onClick={()=>setOpen(false)}>Cancel</button>
            <button className='blue light'>Next</button>
          </div>
      </Card>
          </div>
    }

    </div>
  )
}

export default Model