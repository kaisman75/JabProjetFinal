import React from 'react';

import { SubHeading } from '../../components';
import Bounce from 'react-reveal/Bounce';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="le Sport C'est notre Tradition" />
      <h1 className="app__header-h1">JEUNESSE ATLETIQUE BOUGATFA</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
  
    <div className="app__wrapper_img">
       <Bounce duration ="2000">
      <img src="/images/jab.png" alt="header_img" />
      </Bounce>
    </div>
    
  </div>
);

export default Header;
