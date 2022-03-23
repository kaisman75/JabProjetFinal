import { TRUE } from 'node-sass';
import React,{useState} from 'react';
import { Modal } from 'react-responsive-modal';
import './Modal.css'



const Imagemodal= ({imgSrc}) => {

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
 

  return (
    <>
      <a onClick={()=>{setOpen(true)}}>
       <img src={imgSrc}/>
      </a>
       <Modal open={open} onClose={setOpen(false)} center>
        <img src={imgSrc} />
      </Modal>
    </>
  );
};


export default Imagemodal
;
