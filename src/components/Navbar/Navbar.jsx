import React from 'react'
//import { GiHamburgerMenu } from 'react-icons/gi';
//import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';

const navbar = () => {
 
  return (
    <div className='app__Navbar'>
      <div className='app_nav-logo' link='#HOME'>
         JAB
      </div>
    <ul className='app__nav-link'>
      <li><a link="#HOME">HOME</a></li>
      <li><a link="#A PROPOS">A PROPOS</a></li>
      <li><a link="#PALMARES">PALMARES</a></li>
    </ul>
     

    

  
   
 
   </div>
  
  );
};

export default navbar;
