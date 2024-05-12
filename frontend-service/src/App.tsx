import React from 'react';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Account from './components/account/Account';
import Cart from './components/Cart';
import NavigationBar from './components/Navbar';
import PlaceOrder from './components/PlaceOrder';
import ProductForm from './components/account/ProductForm';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/account" element={<Account />} />
        <Route path="/account/product" element={<ProductForm />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />


      </Routes>
    </div>
  );
}

export default App;
