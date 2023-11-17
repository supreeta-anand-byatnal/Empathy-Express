import React from 'react';
import logo from '../../assets/splashscreen.png';
import './splashscreen.css'; 

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={logo} alt="Loading..." className="splash-logo" />
    </div>
  );
};

export default SplashScreen;
