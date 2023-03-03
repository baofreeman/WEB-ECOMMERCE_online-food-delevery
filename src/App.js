import { Routes, Route } from 'react-router-dom';
import './App.css';
import React, { Suspense } from 'react';
import Home from './pages/Home';
import Order from './utils/Order';
import AddToCart from './utils/AddToCart';
import Checkout from './utils/Checkout';
import Dashboard from './pages/Dashboard/Dashboard';
import ProductSingle from './utils/Content/ProductDetail';
import Product from './utils/Content/Product';
import Profile from './utils/Profile';
import Auth from './pages/Auth/Auth';

import CreateContainer from './utils/CreateContainer';
import { useAuth } from './contexts';

function App() {
    return (
        <div className="App max-md:w-full">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signin" element={<Auth />} />
                <Route path="/signup" element={<Auth />} />
                <Route path="/create" element={<CreateContainer />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="order" element={<Order />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="product" element={<Product />} />
                    <Route path="product/:productId" element={<ProductSingle />} />
                    <Route path="add" element={<AddToCart />} />
                    <Route path="add/:productId" element={<AddToCart />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
                {/* <Route path="*" element={<NoMatch />} /> */}
            </Routes>
        </div>
    );
}

export default App;
