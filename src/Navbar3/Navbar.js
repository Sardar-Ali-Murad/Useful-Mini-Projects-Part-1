import React from 'react'
import {FiFacebook} from "react-icons/fi"
import {CiTwitter} from "react-icons/ci"
import {GrLinkedinOption} from "react-icons/gr"
import {FiInstagram} from "react-icons/fi"
import Logo from "./Logo2.png"
import arr from "./data"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import "./Navbar.css"


const Navbar = () => {
    let [bigNav,setBigNav]=React.useState(false)
    let small=React.useRef(null)

    
    // React.useEffect(()=>{
    //     if(bigNav && small.current){
    //         let height=small?.current?.getBoundingClientRect().height+100
    //         small.current.style.height=`${height}px`
    //     }
    //     else if(!bigNav && small?.current){
    //       small.current.style.height=`0px`
    //     }
    // },[bigNav])

    


  return (
    <div>
       
       {/* BigScreenNavbar Starts */}
       <div className='bigScreenNav' >
           <div className='Image'>
               <img src={Logo} style={{width:"50px"}}/>
           </div>

           <div className='bigScreenNavLinks'>
              <nav>
                <ul>
                    {arr.map((all)=>{
                        return <li>
                                   <a>{all?.text}</a>
                               </li>
                    })}
                </ul>
              </nav>
           </div>

          <div className='Icons'>
             <FiFacebook style={{color:"blue",fontSize:"32px",marginRight:"10px"}}/>
             <CiTwitter style={{color:"blue",fontSize:"32px",marginRight:"10px"}}/>
             <GrLinkedinOption style={{color:"blue",fontSize:"32px",marginRight:"10px"}}/>
             <FiInstagram style={{color:"blue",fontSize:"32px",marginRight:"10px"}}/>
          </div> 


          <div className='ham'>
            <GiHamburgerMenu className={` hammer ${bigNav?"hamRotate":""}`} onClick={()=>setBigNav((pre)=>!pre)} style={{fontSize:"35px",color:"whitesmoke",cursor:"pointer"}}/>
          </div>

       </div>
       {/* BigScreenNavbar Ends */}
 
      {/* {
        bigNav && */}
          <div className={`bigScreenNavbar ${bigNav?"bigNavActive":""}`} ref={small} >
          <nav>
                <ul>
                    {arr.map((all)=>{
                        return <li>
                                   <a>{all?.text}</a>
                               </li>
                    })}
                </ul>
              </nav>
       </div>
    {/* } */}

    </div>
  )
}

export default Navbar
