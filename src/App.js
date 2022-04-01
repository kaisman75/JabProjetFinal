import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels,Entrainement} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className='App'>

     <Navbar/>
     <Header/>
     <AboutUs/>
     <Chef/>
     <Intro/>
     <Gallery/>
    <FindUs/>
    <Footer/> 
     <Laurels/>

  </div>
);

export default App;
