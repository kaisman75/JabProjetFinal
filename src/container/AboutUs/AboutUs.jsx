import React,{useEffect} from 'react';
import { images } from '../../constants';
import './AboutUs.css';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';



const AboutUs = () => {
  useEffect(()=>{
    <Fade/>;
    <Jump/>
  })

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
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom__button">Know More</button>
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
