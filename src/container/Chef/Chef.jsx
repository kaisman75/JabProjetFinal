import React,{useState} from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import Imagemodal from "../../components/Modal/ImageModal";
import './Chef.css';

const Chef = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  return(
 
  <div className="app_chef">
      <div className='app__chef-content'>
       <div className="app__chef-content-img"> 
        <a onClick={onOpenModal}>
          <img src='/images/img17.jpg'/>
        </a>
      </div>
    
       <div className="app__chef-content_info">
     
              <h1>ce que nous croyons</h1>

            <div className="app__chef_info-content">
            <p>Notre devoir et de redorer le blason de notre club et d'assurer l'encadrement des jeunes dans les meilleurs condition possibles, et  leur fournir l'ambiance favorable pour rattachement plus solide au sport et nous assister à leurs tendre la main pour garantir leurs éloignements des déviations devenues courantes dans notre région </p>
            </div>
       </div>
     
    
  </div> 
  
        <Imagemodal open={open}  onClose={onCloseModal} center>
         <h1>hello</h1>
       </Imagemodal>
      
  </div> 
       

)
  }

export default Chef
