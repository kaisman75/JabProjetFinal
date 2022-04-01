import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';

import './Footer.css';

const Footer = () => (
  <div className="app__footer  " id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez Nous</h1>
        <p className="p__opensans">Rue Des Accacias Bellvue</p>
       
      </div>

      <div className="app__footer-links_logo">
        <img src="/images/jab.png" alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
       
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/Jabougatfa"><FiFacebook /></a>
          
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022MANAI. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
