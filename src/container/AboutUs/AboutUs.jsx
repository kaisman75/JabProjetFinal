import React,{useState,useEffect} from 'react';
import { images } from '../../constants';
import './AboutUs.css';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';
import "react-responsive-modal/styles.css";


const AboutUs = () => {
  const aboutText="La jeunesse Atletique bougatfa dont le siege social ce trouve a bellvue apris la releve, apres l'independance du club sportif de bellvue et conserne plusieur cartiers popilaires et residentiel telque borj ali raes ,dubosville ,kharouba , lacagna,elwardia,el kabaria,jbeljloudla... jab posséde une salle de basket-ball couvert et homologuée par la fédération tunissienne de basket-ball."
  const textArray=aboutText.split("").slice(0,120)
  const allText=aboutText.split("").slice(0,)
  const[text,setText]=useState(textArray)
  useEffect(()=>{
    <Fade/>;
    <Jump/>
  })
const handleAllText=()=>{
  text.length<=120?setText(allText):setText(textArray)
}
return(
<div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>
    
    <div className="app__aboutus-content flex__center">
      <Fade left duration="2500">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" target="_blank"/>
        <text className="p__opensans">{text}....</text>
        <button type="button" className="custom__button" onClick={handleAllText}>Know More</button>
      </div>
     </Fade>
      <Jump duration="2500">
      <div className="app__aboutus-content_knife flex__center">
    
        <img id="idimage" src= "/images/ball.png" alt="about_us"/>
     
      </div>
      </Jump>
     <Fade right duration="2500">
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
      </Fade>
    </div>
  </div>)
  
};

export default AboutUs;
