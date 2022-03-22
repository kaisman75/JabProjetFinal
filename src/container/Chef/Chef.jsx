import React, { useState } from "react";

import "./Chef.css";

const Chef = () => {
  
  const [show, setShow] = useState(false);

  return (

    <div className="app_chef">
      <div className="app__chef-content">
        <div className="app__chef-content_info-title">
          <h1>ce que nous croyons</h1>

          <div className="app__chef_info-content">
            <p>
              Notre devoir et de redorer le blason de notre club et d'assurer
              l'encadrement des jeunes dans les meilleurs condition possibles,
              et leur fournir l'ambiance favorable pour rattachement plus solide
              au sport et nous assister à leurs tendre la main pour garantir
              leurs éloignements des déviations devenues courantes dans notre
              région{" "}
            </p>
          </div>
        </div>
      
         <div className="app__chef-content-img">
      
          <img src="/images/img17.jpg" alt="jab"/>
       
         </div>
      </div>
      
        
   
     

     

    </div>
    
  );
};

export default Chef;
