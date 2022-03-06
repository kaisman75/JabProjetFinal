import React from 'react'
import './Entrainement.css' 
import { Label } from '../../components'
import  Data  from './Data'
import "react-responsive-modal/styles.css";


const Entrainement = () => {
  return (
    <> 
    <h1 className="app__header1">SEANCES D'ENTRAINEMENTS</h1>
    <div className="app_entrainement   flex__center app__wrapper section__padding" id="Entrainement">

   

   
      {Data.map((elem)=>{
        return(
          <Label day = {elem.day} categorys={elem.categorys} />
          )
      })}  
       
       
     </div>
     </>
  )
}

export default Entrainement