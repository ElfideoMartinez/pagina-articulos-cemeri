import React from 'react'
import ContenedorSocialMedia from './ContenedorSocialMedia'

const Footer = () => {
  return (
    <div style={{ backgroundColor:'#f1f3f2'}}>
      <div style={{display: 'flex', paddingRight:'55%', paddingLeft:'5%'}}>
        <div style={{display: 'flex', flexDirection:'column'}}>
          <a href="http://" style={{color: 'black', fontSize:'32px', textDecoration:'none'}}>CEMERI</a>
          <h5>Comprometidos con la verdad y el desafío que ella conlleva. Nuestra meta es develar al mundo  para una mejor toma de decisiones. </h5>
        </div>
        <ContenedorSocialMedia/>
      </div>
      <hr></hr>
      <div style={{display: 'flex'}}>
        <h3>Todos los derechos reservados © CEMERI 2019 -2021</h3>
        <div style={{marginLeft:'650px'}}>
          <a href="https://" style={{marginRight:'20px'}}>Contacto</a>|
          <a href="https://"style={{marginLeft:'20px'}}>Politica de Privacidad</a>
        </div>
      </div>
    </div>
  )
}

export default Footer