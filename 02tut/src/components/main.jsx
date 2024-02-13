import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './signUp';

const main = () => { 
  

  return (
    <div className='flex flex-col gap-12 h-screen items-center justify-center'>
      <h1>Welcome to Y MUSIC</h1>
      <BrowserRouter basename='/02tut'>
      <Routes>
            
              <Route path='./signUp.jsx' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default main;
