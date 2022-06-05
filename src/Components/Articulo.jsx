import React,{useState} from 'react'
import MainImage from '../Images/MainImage.jpg';
import ContenedorSocialMedia from './ContenedorSocialMedia'
import Formulario from './Formulario';
import Contenido from './Contenido';
import Autores from './Autor.jsx';
import Next from '../Images/next.png';

const Articulo = () => {
    const [mostrarAutor, setMostrarAutor]=useState(true);
    const handleClick=() => {
        setMostrarAutor(!mostrarAutor);
    }
  return (
      <>
        <div className="Articulo">
            <h1 style={{fontSize: '55px'}}>¿Qué es el IFAD?</h1>
            <img src={MainImage}></img>
        </div>
        <div className="SocialMedia">
            <ContenedorSocialMedia/>
            <h2>Fecha</h2>
        </div>
        <div className='contenedorArticulo'>
            <Contenido/>
            <ContenedorSocialMedia/>
        </div>
        <div className='contenedor'
            onClick={handleClick}>
            {mostrarAutor?<><img src={Next} height="16px" width='16px'></img><h2 style={{color:'#cc5a71', fontSize:'2rem', cursor: "pointer"}}>Autor y Fuentes</h2></>
            :
            (<Autores/>)}
        </div>
        <hr></hr>
        <div style={{display:'flex', justifyContent:'center', paddingRight:'25%', paddingLeft:'25%',}}>
            <div style={{ backgroundColor:'#abb8c3',width:'390px', height:'68px'}}>
                <a style={{marginRight:'10%', font:'16px',cursor: "pointer"}}>Contenido Pegado a The Trust Proyect</a>
            </div>
            ||
            <div style={{ backgroundColor:'#abb8c3', width:'390px', height:'68px'}}>
                <a style={{marginleft:'10%',font:'16px Libre Franklin',cursor: "pointer"}}>Reportar Un Error</a>
            </div>
        </div>
        <hr style={{marginTop:'30px'}}></hr>
        <Formulario/>
    </>
  )
}

export default Articulo