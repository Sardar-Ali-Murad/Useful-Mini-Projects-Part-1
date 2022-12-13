import {BsFillDice1Fill} from "react-icons/bs"
import {BsFillDice2Fill} from "react-icons/bs"
import {BsFillDice3Fill} from "react-icons/bs"
import {BsFillDice4Fill} from "react-icons/bs"
import {BsFillDice5Fill} from "react-icons/bs"
import {BsFillDice6Fill} from "react-icons/bs"

let array=[
    {
        id:1,
        icon:<BsFillDice1Fill style={{fontSize:"50px"}}/>,
        value:1
    },
    {
        id:2,
        icon:<BsFillDice2Fill style={{fontSize:"50px"}}/>,
        value:2
    },
    {
        id:3,
        icon:<BsFillDice3Fill style={{fontSize:"50px"}}/>,
        value:3
    },
    {
        id:4,
        icon:<BsFillDice4Fill style={{fontSize:"50px"}}/>,
        value:4
    },
    {
        id:5,
        icon:<BsFillDice5Fill style={{fontSize:"50px"}}/>,
        value:5
    },
    {
        id:6,
        icon:<BsFillDice6Fill style={{fontSize:"50px"}}/>,
        value:6
    }
]


let array2=[
    {
        value:1,
        selected:false,
    },
    {
        value:2,
        selected:false,
    },
    {
        value:3,
        selected:false,
    },
    {
        value:4,
        selected:false,
    },
    {
        value:5,
        selected:false,
    },
    {
        value:6,
        selected:false,
    },
]

export  {array,array2}