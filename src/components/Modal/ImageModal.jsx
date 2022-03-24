import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


const Imagemodal = ( {srcImg} ) => {
  const [open, setOpen] = React.useState(false);

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
  );
};


export default Imagemodal

