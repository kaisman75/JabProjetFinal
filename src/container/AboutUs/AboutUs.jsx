import React,{useState,useEffect} from 'react';
import { images } from '../../constants';
import './AboutUs.css';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';



const AboutUs = () => {
  const aboutText="la Jeunesse Athlétique Bougatfa dont le siège social sise à Bellevue a pris la relève, après l'indépendance, du club Sportive de Bellevue et la Guauloise de belle vue en 1926   concerne plusieurs quartiers populaires et résidentiels tels que Dubosville, Kharouba, Bordj Ali Rais, La Cagna, Elouardia, Kabaria, Ibn Sina..et Bellevue.   Elle possède une salle couverte Homologuée par la fédération Tunisienne Basket-ball.   Elle est spécialisée en Basket Ball et les résultats qu'elle a enregistrées, depuis sa création, grâce à un encadrement des responsables, a permis de voir le nombre de ses adhérents s'accroître d'années en années." 


  

  const textArray=aboutText.split("").slice(0,120)
  const allText=aboutText.split("").slice(0,)
  const[text,setText]=useState(textArray)
  const textHistoir="La Jeunesse Athlétique Bougatfa, avec les moyens du bord et le bénévolat de ses dirigeants, a réussi à remporter plusieurs titres nationaux au niveau des séniors garçons et Filles et des jeunes.  Elle a accédé en division Nationale ( Séniors Garçons ) en 1969-70 et a remportée la coupe de Tunisie de la catégorie en 1973-74.Elle a , par ailleurs remportée le championnat de Tunisie ( 1984-85 ),la coupe de Tunisie (1985-86 ) et la coupe de Tunisie ( 1986-87 ) en seniors Filles.d'autres titres remportés par les catégories les plus jeunes sinon un classement très honorables ont été réalisés."
  const textArray2=textHistoir.split("").slice(0,120)
  const allText2=textHistoir.split("").slice(0,)
  const[text2,setText2]=useState(textArray2)
  useEffect(()=>{
    <Fade/>;
    <Jump/>
  })
const handleAllText1=()=>{
  text.length<=120?setText(allText):setText(textArray)
}
const handleAllText2=()=>{
  text2.length<=120?setText2(allText2):setText2(textArray2)
}
return(
<div className="app__aboutus" id="propos">
   
    
     <div className="app__aboutus-content">
      
      <div className="app__aboutus-content_about">
      <Fade right duration="2500">
        <h1 className="headtext__cormorant ">A Propos</h1>
        <p className="p__opensans">{text}....</p>
        <button type="button" className="custom__button" onClick={handleAllText1}>Lire Encore...</button>
      </Fade> 
      </div>
     
     
      <div className='app__about-img'>
        <Jump duration="2500">
          <img src="/images/ball.png" alt="basketball" />   
       </Jump>
      <div className='app__about-img-Ellipse'></div>
     </div>
       
     
     
     
     <Fade left duration="2500">
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Notre Histoire</h1>
        <p className="p__opensans">{text2}....</p>
        <button type="button" className="custom__button" onClick={handleAllText2}>Lire Encore...</button>
      </div>
      </Fade> 
    </div>
  </div>)
  
};

export default AboutUs;
