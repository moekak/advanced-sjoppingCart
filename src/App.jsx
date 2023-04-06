import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './pages/navbar/Navbar';
import {ShopContext, ShopContextProvider } from './context/ShopCart'
import Register from './pages/sign/Register';
import SignIn from './pages/sign/SignIn';
import Store from './pages/store/Store';
import Item from './pages/items/Item';
import Cart from './pages/cart/Cart';


const App = () => {
  return (
    <div className="app-container">
        <ShopContextProvider >
                <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path={'/'} element={<Register/>}/>
                    <Route path={`/sign-in`} element={<SignIn/>}/>
                    <Route path={`/store`} element={<Store/>}/>
                    <Route path={`/products`} element={<Item/>}/>
                    <Route path={`/cart`} element={<Cart/>}/>
                    

                </Routes>
                </BrowserRouter>
            </ShopContextProvider>
    </div>
  
    
    
  )
}

export default App