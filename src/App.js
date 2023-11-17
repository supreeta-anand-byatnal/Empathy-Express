import React, { useState, useEffect } from 'react';
import './App.css';
import SplashScreen from './components/Splashscreen/splashscreen';
import Footer from './components/Footer/footer';
import Form from './components/Form/form';
import Home from './components/Home/home';
import RandomActOfKindness from './components/Generator/generator';


function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <SplashScreen />
      ) : (
        <main>
          <div className="App">
        
          <Home/>
         
          </div>
        </main>
      )}
    </div>
  );
}

export default App;