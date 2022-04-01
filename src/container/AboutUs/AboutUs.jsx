import React,{useState,useEffect} from 'react';
import { images } from '../../constants';
import './AboutUs.css';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';



const AboutUs = () => {
  const aboutText="" 


  

 
  useEffect(()=>{
    <Fade/>;
    <Jump/>
  })

return(
<div className="app__about" id="propos">
   
    
     <div className="app__aboutus-content">
      
      <div className="app__aboutus-content_about">
      <Fade right duration="2500">
        <div className='app__about-content-info'>
        <h1 className="headtext__cormorant">A Propos</h1>
        <p>la Jeunesse Athlétique Bougatfa dont le siège social sise à Bellevue a pris la relève, après l'indépendance, du club Sportive de Bellevue et la Guauloise de belle vue en 1926   concerne plusieurs quartiers populaires et résidentiels tels que Dubosville, Kharouba, Bordj Ali Rais, La Cagna, Elouardia, Kabaria, Ibn Sina..et Bellevue.   Elle possède une salle couverte Homologuée par la fédération Tunisienne Basket-ball.   Elle est spécialisée en Basket Ball et les résultats qu'elle a enregistrées, depuis sa création, grâce à un encadrement des responsables, a permis de voir le nombre de ses adhérents s'accroître d'années en années.</p>
        </div>
      </Fade> 
      </div>
     
     
      <div className='app__about-img'>
        <Jump duration="2500">
          <img src="/images/ball.png" alt="basketball" />   
       </Jump>
      <div className='app__about-img-Ellipse'></div>
     </div>
       
     
     
    
    </div>
  </div>)
  
};

export default AboutUs;
