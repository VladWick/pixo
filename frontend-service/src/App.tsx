import React from 'react';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Account from './components/account/Account';
import Cart from './components/order/Cart';
import NavigationBar from './components/Navbar';
import PlaceOrder from './components/order/PlaceOrder';
import ProductForm from './components/account/ProductForm';
import ProductDetails from './components/product/ProductDetails';
import CategoryPage from './components/page/CategoryPage';
import SearchPage from './components/page/SearchPage';
import OrderSuccess from './components/order/OrderSuccess';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/account/product" element={<ProductForm/>}/>

        <Route path="/product/:productId" element={<ProductDetails/>}/>

        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>

        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
        <Route path="/order/success" element={<OrderSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
