import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import NavBar from './NavBar';
import CocaCola from './CocaCola';
import Lays from './Lays';
import MilkyWay from './MilkyWay';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/CocaCola' element={<CocaCola />} />
          <Route path='/Lays' element={<Lays />} />
          <Route path='/MilkyWay' element={<MilkyWay />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
