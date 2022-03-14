import {useRef} from 'react';
import emailjs from 'emailjs-com';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7u6q7v9', 'template_1izshir', form.current, 'user_6H9fgOX5bVu5dmZjeWjCm')
      .then((result) => {
          alert("Merci de vous inscrire, on vous attend impatiament.");
          window.location.reload();

      }, (error) => {
         alert(error.text);
      });
  };
  return(
  <div className="app__newsletter" id="newsLetter">
    <div className="app__newsletter-heading">
      <h1 className="headtext__cormorant">Subscribe To Our Academie</h1>
    </div>

     <form ref={form} onSubmit={sendEmail} className='app__newsletter-input'>
      <label className='app__newsletter-input label'>Nom et prenom</label>
      <input className="app__newsletter-input input" type="text" name="user_name" />
      <label for="bday" className='app__newsletter-input label'>Veuillez saisir votre date de naissance </label>
      <input className=" bd" type="date" id="bday" name="user_bday"></input>
      <label className='app__newsletter-input label'>votre Numero de Telephone</label>
      <input className="app__newsletter-input input" type="text" name="user_tel" />
      <button className="custom__button" type="submit" value="Send">submit</button>
    </form>
  </div>
);
  }
export default Newsletter;
