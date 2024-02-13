
import './App.css';
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header'
import Details from './components/Details'
import Products from './components/Products'
import Contacts from './components/Contacts'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>

     
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/header' element = {<Header/>}/>
      <Route path = '/details' element = {<Details/>}/>
      <Route path = '/Products' element = {<Products/>}/>
      <Route path = '/contacts' element = {<Contacts/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
