import React,{useState} from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants';
import Imagemodal from '../../components/Modal/ImageModal';
import './Gallery.css';

const Gallery = () => {
  const Images=[images.img1, images.img2, images.img3, images.img4, images.img5,images.img6,images.img7,images.img8,images.img9,images.img10,images.img11,images.img12,images.img13,images.img14,images.img15,images.img16,images.img17,images.img18,images.img19,images.img20,images.img21];
 
  
  
  const scrollRef = React.useRef(null);
  
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div  className="app__gallery app__bg " >
     
      <div className="app__gallery-content">
      
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
      
       <div className="app__gallery-images_container" ref={scrollRef}>
             {Images.map((image) => (
                 <div className='img-container'><Imagemodal src={image}/></div>
          ))} 
             
           
          
             
           </div>
            
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
       
      </div> 
                   
    </div>
  );
};

export default Gallery;
