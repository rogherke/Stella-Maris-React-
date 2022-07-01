import React,{ useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { 
  Navbar, 
  Advertise, 
  Bulletin, 
  Propagandas, 
  Products, 
  Special, 
  Contact,
  ShoppingCart,
  CheckOut,
} from './Components';

import './App.css';

const App = () => {
  const Dashboard = () => (
    <>
      <Navbar />
      <Advertise />
      <Bulletin />
      <Propagandas />
      <Products />
      <Special />
      <Contact />
    </>
  );
  
  useEffect(() => {
    const font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = "https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200&display=swap"
  });

 
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="checkOut" element={<CheckOut />} />
        </Routes>
    </BrowserRouter>
  )
};

export default App;
