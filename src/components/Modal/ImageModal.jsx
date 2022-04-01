import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


const Imagemodal = ( {srcImg} ) => {
  const [open, setOpen] = React.useState(false);

<<<<<<< HEAD
const Imagemodal= ({imgSrc}) => {
  
  return (
    
    <div id="myModal" className="modal" style={{imgSrc}?{ display:"block"}:{display:"none"}}>
    {/*  Modal content  */}
 <div className="modal-content">
 <span className="close">&times;</span>
 <img src={imgSrc} alt="gallery_image"  />
  </div>  
</div>   
=======
  const myRef = React.useRef(null);

  return (
       <>
      <div ref={myRef} />
       <button className="button" onClick={() => setOpen(true)}>
       <img src={srcImg}/>
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        container={myRef.current}
      >
       <img src={srcImg}/>
      </Modal>
    </>
>>>>>>> 08d88795409870d7adac027a741933d7ad680dd0
  );
};


export default Imagemodal

