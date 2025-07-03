import React from 'react'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Product from './components/Product/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Cart from './pages/cart/Cart'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Product />
      <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
