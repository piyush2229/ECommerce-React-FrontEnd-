// App.js
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Footer/Footer';
import mobile_banner from './assets/banner/Mobile.png';
import laptop_banner from './assets/banner/Laptop.png'; // Import laptop_banner
import wearable_banner from './assets/banner/Headphones.png';
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Mobile' element={<ShopCategory category="Mobile" banner={mobile_banner} />} />
          <Route path='/Laptops' element={<ShopCategory category="Laptop" banner={laptop_banner} />} /> 
          <Route path='/Wearables' element={<ShopCategory category="Wearables" banner={wearable_banner} />} /> 
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginSignup' element={<LoginSignup/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
