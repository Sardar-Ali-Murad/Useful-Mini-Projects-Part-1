import React from 'react'
import "./Navbar.css"
import Logo from "./Logo2.png"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
    let [bigNav,setBigNav]=React.useState(false)
  return (
    <div className='navMain'>

       <div className='BigScreen'>
          <div>
             <img src={Logo} style={{width:"60px",color:"white",marginTop:"10px"}}/>
          </div>

          <div className='Links'>
             <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Shop</a></li>
                    <li><a>Blog</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
             </nav>
          </div>

          <div className='ham'>
            {
              !bigNav ?
            <GiHamburgerMenu onClick={()=>setBigNav(true)} style={{fontSize:"35px",color:"whitesmoke",cursor:"pointer"}}/>:
            <AiOutlineClose  onClick={()=>setBigNav(false)}  style={{fontSize:"35px",color:"whitesmoke",cursor:"pointer"}}/>
            }
          </div>
       </div>

       {
         bigNav && 
        <div  className='BigNav'>
               <div className='SmallLinks'>
             <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Shop</a></li>
                    <li><a>Blog</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
             </nav>
          </div>
        </div>

       }


    </div>
  )
}

export default Navbar
