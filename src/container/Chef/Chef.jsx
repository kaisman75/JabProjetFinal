import React,{useState} from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
import './Chef.css';

const Chef = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  return(
  <> 
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse"> 
      <a onClick={onOpenModal}>
       <img src='/images/jab6.jpg'/>
      </a>
    
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
       
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
  </div> 
       <Modal open={open} onClose={onCloseModal} center>
        <img src='/images/jab6.jpg' />
      </Modal>
  </> 
)
  };

export default Chef;
