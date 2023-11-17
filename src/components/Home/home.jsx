import React from 'react'
import './home.css'
import Footer from '../Footer/footer';
import Navbar from '../Navbar/navbar';
import EEImage from '../../assets/EE.png'; 
import RandomActOfKindness from '../Generator/generator';

const home = () => {
  return (
    <div className="home-container">
    
        <Navbar/>
        <img className='image' src={EEImage} alt="EE" /> 
        <p className='p'>Your daily dose of Kindness</p>
        <RandomActOfKindness/>
       <Footer/>
  </div>
  )
}

export default home