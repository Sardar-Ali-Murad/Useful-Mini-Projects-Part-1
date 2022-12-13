import React from 'react'
import "./Navbar.css"
import Logo from "./Logo2.png"
import arr from "./data"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"



const Navbar = () => {
    let [bigNav,setBigNav]=React.useState(false)
    return (
        <div >
            {
             bigNav &&   <div className='Overlay'></div>
            }
        {/* BigScreen */}
       <div className='NavBigScreen'>

        {/* Part1 */}
          <div>
              <img src={Logo} style={{width:"40px"}}/>
          </div>
        {/* Part1 */}


        {/* Part2 */}
          <div className='bigLinks'>
              <nav>
                  <ul>
              {
                  arr.map((all)=>{
                      return (
                                    <li>
                                        <h1>{all?.icon}</h1>
                                        <a className='light'>{all?.text}</a>
                                    </li>
                                )
                            })
                        }
                </ul>
         </nav>
          </div>
    {/* Part2 */}

    {/* Part3 */}
    
          <div className='ham'>
            
                <GiHamburgerMenu onClick={()=>setBigNav(true)} style={{fontSize:"35px",color:"whitesmoke",cursor:"pointer"}}/>
            
          </div>
    {/* Part3 */}

       </div>
        {/* BigScreen */}







        {/* Small Screen */}
        { bigNav && 
            <div className='box'>


            {/* Part1 */}
            <div className='part1'>
              <img src={Logo} style={{width:"40px"}}/>
              <AiOutlineClose  onClick={()=>setBigNav(false)}  style={{fontSize:"35px",color:"whitesmoke",cursor:"pointer"}}/>
            </div>
            {/* Part1 */}

        {/* Part2 */}
            <div className='smallLinks'>
              <nav>
                  <ul>
              {
                  arr.map((all)=>{
                      return (
                          <li>
                                        <h1>{all?.icon}</h1>
                                        <a className='light'>{all?.text}</a>
                                    </li>
                                )
                            })
                        }
                </ul>
         </nav>
          </div>
     {/* Part2 */}

          </div>
        }
        {/* Small Screen */}




    </div>
  )
}

export default Navbar
