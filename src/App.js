
import React from 'react';
import  './App.css';
import LoginForm from './Components/LoginForm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Components/Navigation';




    

export default function App() {
  return (
    <div>
      <Navigation />
      <h1 className='text-center'>Welcome to Color Psychology World🌎</h1>
      <h2>
        Colors make up the  your World🌎
        Color Psychology: How Do Colors Affect Mood & Emotions?
        What is Color Psychology?
In its simplest terms, color psychology has become a popular area of color theory that assigns emotional and psychological connotations between colors and emotions. Many of these meanings are universal because they have an effect on the brain but some are only cultural. When traveling, it would be wise to research the accepted and non-accepted colors for any family or cultural event you are attending abroad.

Whether you like a color frequently depends on childhood memories and your association between colors and feelings. If your mother made you wear yellow one day and your classmates made fun of you, yellow is not likely to be your favorite color as an adult.

Sometimes a hue can have many connotations for you. For example, you may choose to wear an orange blouse one day because:

It lifts your mood
You are ready to act
You are feeling creative
You want to make a statement
      </h2> 
      <LoginForm />
    </div>
    
  

  
  );
}

