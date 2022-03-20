import React,{useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
//import { GiHamburgerMenu } from 'react-icons/gi';
//import { MdOutpneRestaurantMenu } from 'react-icons/md';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='app__Navbar'>
      <div className='app__navbar-links'>
      <div className='app__navbar-links-logo' href='#HOME'>
         <p>JAB</p>
      </div>
    <div className='app__navbar-links_container'>
    
      <p><a href="#HOME">HOME</a></p>
      <p><a href="#propos">A PROPOS</a></p>
      <p><a href="#PALMARES">PALMARES</a></p>
      <p><a href="#CONTACT">CONTACT</a></p>
     
   
    </div>
    <div className='app__nav-links-academie'>
      <button className='app__nav-links-academie-btn'>ACADEMIE</button>
    </div>
    <div className='app__navbar-menu'>
    {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="app__navbar-menu_container">
          <div className="app__navbar-menu_container-links">
          <p><a href="#HOME">HOME</a></p>
          <p><a href="#A PROPOS">A PROPOS</a></p>
          <p><a href="#PALMARES">PALMARES</a></p>
          <p><a href="#CONTACT">CONTACT</a></p>
          </div>
          <div className="app__navbar-menu_container-academie"> 
          <button className='app__nav-links-academie-btn'>ACADEMIE</button>
          </div>
        </div>
        )}
    </div>
    
  
   
      </div>
   </div>
  
  );
};

export default Navbar;
