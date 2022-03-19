import React from 'react';
import { SubHeading } from '../../components';
import Bounce from 'react-reveal/Bounce';
import './Header.css';

const Header = () => (
  <div className="app__header " id="home">
    <div className='app__header-title'>
      <h1 className="app__header-title1-h1">شبيبة بوقطفة الرياضية</h1>
      <h1 className="app__header-title2-h1">JEUNESSE ATLETIQUE BOUGATFA</h1>
     </div>
      <button type="button" className="custom__button">Explore Menu</button>
    
  
    {/* /* <div className="app__wrapper_img">
       <Bounce duration ="2000">
      <img src="/images/jab.png" alt="header_img" />
      </Bounce>
    </div> */ }
    
  </div>
);

export default Header;
