import { TRUE } from 'node-sass';
import React,{useState} from 'react';
import { Modal } from 'react-responsive-modal';
import './Modal.css'



const Imagemodal= ({imgSrc}) => {
  
  return (
    
    <div id="myModal" className="modal" style={{imgSrc}?{ display:"block"}:{display:"none"}}>
    {/*  Modal content  */}
 <div className="modal-content">
 <span className="close">&times;</span>
 <img src={imgSrc} alt="gallery_image"  />
  </div>  
</div>   
  );
};


export default Imagemodal
;
