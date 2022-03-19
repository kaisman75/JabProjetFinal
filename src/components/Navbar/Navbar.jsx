import React,{useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
//import { GiHamburgerMenu } from 'react-icons/gi';
//import { MdOutpneRestaurantMenu } from 'react-icons/md';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='app__Navbar'>
      <div className='app__nav-links'>
      <div className='app_nav-links-logo' pnk='#HOME'>
         <p>JAB</p>
      </div>
    <div className='app__navbar-links_container'>
    
      <p><a pnk="#HOME">HOME</a></p>
      <p><a pnk="#A PROPOS">A PROPOS</a></p>
      <p><a pnk="#PALMARES">PALMARES</a></p>
      <p><a pnk="#CONTACT">CONTACT</a></p>
     
   
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
          <p><a pnk="#HOME">HOME</a></p>
          <p><a pnk="#A PROPOS">A PROPOS</a></p>
          <p><a pnk="#PALMARES">PALMARES</a></p>
          <p><a pnk="#CONTACT">CONTACT</a></p>
          </div>
          <div className="app__navbar-menu_container-academie"> 
          <button className='app__nav-academie-btn'>ACADEMIE</button>
          </div>
        </div>
        )}
    </div>
    
  
   
      </div>
   </div>
  
  );
};

export default Navbar;
