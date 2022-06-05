import React from 'react'
import App from '../App.css';
import Buscador from './Buscador';
import usuario from '../Images/user.png';
import mail from '../Images/mail.png';
import flecha from '../Images/down-arrow.png';

const Header = () => {
  return (
      <>
      <hr style={{margin: '0'}}></hr>
        <nav className="header">
            <div className="contenedor">
                <a href="/LOGIN/" style={{color: '#6ec1e4',fontSize: '20px', font:'Libre Franklin', textDecoration:'none', marginRight: '15px',marginLeft: '10px'}} ><img src={usuario} height="16" with='16'></img>Login</a> 
                <Buscador/>|
            </div>    
            <a href="/CEMERI/" style={{color: '#000',fontSize: '20px', font:'Libre Franklin', textDecoration:'none'}}>CEMERI</a> |
            <>
                <a href="/Registrarse/" style={{color: '#6ec1e4',fontSize: '20px', font:'Libre Franklin', textDecoration:'none'}}><img src={mail} height="20" with='20'></img>Registrarse</a>
            </>
        </nav>
        <hr style={{margin: '0'}}></hr>
         <nav className="header2">
            <a href="/">ARTICULOS<img src={flecha} height="16" width="16"></img></a>
            <a href="/">CONTENIDO<img src={flecha} height="16" width="16"></img></a>
            <a href="/">CEMERI<img src={flecha} height="16" width="16"></img></a>
            <a href="/">CONTACTO<img src={flecha} height="16" width="16"></img></a> 
         </nav>
         <hr style={{margin: '0'}}></hr>
    </>
  )
}

export default Header