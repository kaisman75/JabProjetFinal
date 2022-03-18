import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
 import {Header,AboutUs} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className='App'>
    <Navbar />
     <Header />
   <AboutUs />
    {/* <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer /> */}
  </div>
);

export default App;
