
import React from 'react';
import  './App.css';
import LoginForm from './Components/LoginForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Components/Navigation';



    

export default function App() {
  return (
    <div>
      <Navigation />
      <h1 className='custom-title'>Welcome to Color Psychology World🌎</h1>
      <h2>
        Colors make up the  your World🌎
      </h2> 
      <LoginForm />
    </div>
    
  

  
  );
}

