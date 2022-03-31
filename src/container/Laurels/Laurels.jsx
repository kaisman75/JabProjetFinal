import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';
import Fade from 'react-reveal/Fade';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app_palmares section__padding " id="awards">
   <div className='app__palmares_container'>
   <div className="app__aboutus-content_history">
     <Fade left duration="2500">
     <div className='app__about-content-info'>
        <h1 className="headtext__cormorant">Notre Histoire</h1>
        <p>La Jeunesse Athlétique Bougatfa, avec les moyens du bord et le bénévolat de ses dirigeants, a réussi à remporter plusieurs titres nationaux au niveau des séniors garçons et Filles et des jeunes.  Elle a accédé en division Nationale ( Séniors Garçons ) en 1969-70 et a remportée la coupe de Tunisie de la catégorie en 1973-74.Elle a , par ailleurs remportée le championnat de Tunisie ( 1984-85 ),la coupe de Tunisie (1985-86 ) et la coupe de Tunisie ( 1986-87 ) en seniors Filles.d'autres titres remportés par les catégories les plus jeunes sinon un classement très honorables ont été réalisés.</p>
     
      </div>
      </Fade> 
      </div>
   </div>
  </div>
);

export default Laurels;
