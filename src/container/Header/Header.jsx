import React from 'react';
import { SubHeading } from '../../components';
import Bounce from 'react-reveal/Bounce';
import './Header.css';

const Header = () => (
  <div className="app__header " id="home">
    <div className='app__header-container'>


    <div className='app__header-container-tiltle'>
      <h1 className="app__header-title1">شبيبة بوقطفة الرياضية</h1>
      <h1 className="app__header-title2">JEUNESSE ATLETIQUE BOUGATFA</h1>
    </div>
      
    
  
     <div className="app__header-container-img">
       <Bounce duration ="2000">
      <img src="/images/jab.png" alt="header_img" />
      </Bounce>

    </div> 
    </div>
  </div>
);

export default Header;
