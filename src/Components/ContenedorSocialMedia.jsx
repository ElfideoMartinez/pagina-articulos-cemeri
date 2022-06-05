import React from 'react'
import Facebook from '../Images/facebook.png';
import Twitter from '../Images/twitter.png';
import Linkedin from '../Images/linkedin-logo.png';
import WhatsApp from '../Images/whatsApp.png';
import Mail from '../Images/mail.png';

const ContenedorSocialMedia = () => {
  return (
    <div className="SocialMedia">
        <a href="https://Facebook.com/CEMERI"><img src={Facebook} height='25px' width='25px'></img></a>
        <a href="https://Twitter.com/CEMERI"><img src={Twitter} height='25px' width='25px'></img></a>
        <a href="https://Linkedin.com/CEMERI"><img src={Linkedin} height='25px' width='25px'></img></a>
        <a href="https://whatsap.com/"><img src={WhatsApp} height='25px' width='25px'></img></a>
        <a href="https://Gmail.com"><img src={Mail} height='25px' width='25px'></img></a>
    </div>
  )
}

export default ContenedorSocialMedia