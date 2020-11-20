import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import useFetch from './services/useFetch';
import { Route, Routes } from 'react-router-dom';
import Products from './Products';
import Detail from './Detail';


  

function App() {
 
  return (
    <div className="App">
      <Header/>
      <main>
      <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail />} />
          </Routes>
        </main>
    <Footer/>
    </div>
  );
}

export default App;
