import React,{useState} from 'react'
import App from '../App.css'
import lupa from '../Images/lupa.png';

const Buscador = () => {
    const [click, setClick]=useState(false);

    const handleclick=(e)=>{
        setClick(true);
    }
    const handleClickX=()=>{
        setClick(false);
    }

  return (
    <>
        {click?
        <>
            <input type="text" placeholder="Buscar..."></input>
            <button 
                onClick={handleClickX}
            >X</button>
        </>
            :(<button style={{color:'#6ec1e4'}}
            onClick={handleclick}
            ><img src={lupa} height ="16" width="16"></img>BUSCAR</button>)
        }
    </>
  )
}

export default Buscador