import React from 'react'
import CEPAL from '../Images/cepal.jpg';

const Formulario = () => {
  return (
    <>
        <div className="contenedorCEPAL">
            <img src={CEPAL} style={{borderRadius:'40px'}}></img>
            <h2>Que es el SEPAL?</h2>
            <h3>¿Sabes que es la Comisión Económica para América Latina y el Caribe?</h3>
            <hr style={{marginTop: '10px', marginBottom: '10px'}}></hr>
            <a href="https://REDCemri.com" style={{color:'#6ec1e4'}}>Red CEMERI</a>
        </div>
        <div className="Formulario">
          <>
            <h1 style={{fontSize:'32px'}}>Deja una respuesta</h1>
            <h3 style={{fontSize:'16px'}}>Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con *</h3>
          </>
          <>
              <h4 style={{marginRight:'45%'}}>Comentario *</h4>
              <input type="text" style={{height:'210px', width:'680px', marginRight:'25%', marginLeft:'25%'}}></input>
              <h4 style={{marginRight:'45%'}}>Nombre *</h4>
              <input type="text" style={{height:'42px', width:'680px', marginRight:'25%', marginLeft:'25%'}}></input>
              <h4 style={{marginRight:'45%'}}>Correo Electronico *</h4>
              <input type="text" style={{height:'42px', width:'680px', marginRight:'25%', marginLeft:'25%'}}></input>
              <h4 style={{marginRight:'45%'}}>Web</h4>
              <input type="text" style={{height:'42px', width:'680px', marginRight:'25%', marginLeft:'25%'}}></input>
              <input type='checkBox' style={{marginRight:'650px'}}></input>
              <h4 style={{font:'16px', fontFamily:'Libre Franklin'}}>Guarda mi nombre, correo electrónico y web en este navegador para la próxima vez que comente.</h4>
              <button className='BotonEnviarComentario' type="button">Publicar el Comentario</button>
          </>
        </div>
    </>
  )
}

export default Formulario