import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/shoppy.css';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import DetailProduct from './pages/DetailProduct.jsx';
import NewProduct from './pages/NewProduct.jsx';
import CheckoutInfo from './pages/CheckoutInfo.jsx';
import { AuthProvider } from './auth/AuthContext.js';
import { CartProvider } from './context/CartContext.js';
import { OrderProvider } from './context/OrderContext.js';

export default function App() {

  return (
    <div>
      <OrderProvider>
      <CartProvider>
      <AuthProvider>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />} >
                  <Route index element={<Home />} />
                  <Route path='/all' element={<Products />} />
                  <Route path='/cart' element={<Carts />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/products/:pid' element={<DetailProduct />} />                  
                  <Route path='/products/new' element={<NewProduct />} />
                  <Route path='/checkout' element={<CheckoutInfo />} />
              </Route>
          </Routes>            
      </BrowserRouter>
      </AuthProvider>
      </CartProvider>
      </OrderProvider>
    </div>
  );
}

