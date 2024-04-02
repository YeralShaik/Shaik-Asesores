import React from "react";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import './style.css';
import './mobile.css'

/**
 * Componente que representa el pie de página de la aplicación.
 * Incluye enlaces a redes sociales y una atribución del creador.
 */
const Footer = () => {
  const openInstagram = () =>  {
    const instagramUrl = 'https://www.instagram.com/shaikasesores/';
    window.open(instagramUrl, '_blank');
  }

  const sendMail = () =>  {
    const mailUrl = 'mailto:shaikasesores@gmail.com';
    window.open(mailUrl, '_blank');
  }

  const contactDeveloper = () => {
    const openContactFormUrl = 'https://forms.gle/GYDmvcvjNBn17rC69';
    window.open(openContactFormUrl, '_blank');
  }

  return ( 
    <>
      <footer className="container-footer">
        <div className="title-Footer-container">
          <h1>SHAIK ASESORES</h1>
        </div> 

        <div className="socialMedia-Container">
          <div className="socialMedia-Icon">
            <FaInstagram onClick={openInstagram} id="instagram"/>
            <MdEmail onClick={sendMail} id="mail" />
          </div>
          <p className="socialMedia-Title">Síguenos en redes sociales</p>
        </div> 

        <p className="sign">Sitio Web desarrollado por <span onClick={contactDeveloper}>@YeraldinEspinosa</span></p>    
      </footer>
    </>
  );
}

export { Footer };
