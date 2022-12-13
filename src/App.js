import logo from './logo.svg';
import './App.css';
import Tenzies from './Tenzies/Tenzies';
import Quiz from "./Quiz/quiz"
import Test from './Quiz/Test';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dice from './DiceApp/Dics';
import TicTacToe from "./TicTacToe/Toe"
import MemoryGame from "./MemoryGame/Memory"
import NavbarEasy from './NavbarEasy/Navbar';
import Testing from './NavbarEasy/Testing';
import AdvanceNavbar from "./AdvanceNavbar/Navbar"
import Model from "./Model/Model"
import NavbarByJohn from "./Navbar3/Navbar"
import PerfectCenter from "./PerfectCenter/app"
import Sedo from "./Sedo Selector All Stuff/app"
import Tours from "./ToursProject/App"
function App() {
  return (
    <div>
      {/* <Tenzies/> */}
      
    {/* For the quiz starts */}
      {/* <BrowserRouter>
        <Routes>
           <Route path='/' element={<Quiz/>}/>
           <Route path='/test' element={<Test/>}/>
        </Routes>
      </BrowserRouter> */}

    {/* For the quiz ends */}

      {/* <Dice/> */}


      {/* <TicTacToe/> */}

      {/* <MemoryGame/> */}

      {/* For the navbar Easy */}
      {/* <NavbarEasy/> */}
      {/* <Testing/> */}
      {/* For the navbar East Ends */}


   {/* Bit Advance Navbar */}
     {/* <div className='realMain'>
      <AdvanceNavbar/>
      <Testing/>
    </div> */}
   {/* Bit Advance Navbar */}


     {/* <Model/> */}


     {/* <NavbarByJohn/> 
    <Testing/> 
      */}


     {/* <PerfectCenter/> */}


    {/* Importtant One */}
     {/* <Sedo/> */}

     <Tours/>


    </div>
  );
}

export default App;
