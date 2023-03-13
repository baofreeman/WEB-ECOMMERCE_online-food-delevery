import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, Auth, Dashboard } from './pages';
import {
    Cart,
    Checkout,
    Order,
    Profile,
    ProductDetail,
    Product,
    Admin,
    AllOrders,
    AllProducts,
    AllUser,
    CreateContainer,
    CheckoutTest,
} from './utils';

function App() {
    return (
        <div className="App max-md:w-full">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signin" element={<Auth />} />
                <Route path="/signup" element={<Auth />} />
                <Route path="admin" element={<Admin />}>
                    <Route path="create" element={<CreateContainer />} />
                    <Route path="all-users" element={<AllUser />} />
                    <Route path="all-products" element={<AllProducts />} />
                    <Route path="all-orders" element={<AllOrders />} />
                </Route>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="order" element={<Order />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="product" element={<Product />} />
                    <Route path="product/:productId" element={<ProductDetail />} />
                    <Route path="add" element={<Cart />} />
                    <Route path="add/:productId" element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
                {/* <Route path="*" element={<NoMatch />} /> */}
            </Routes>
        </div>
    );
}

export default App;
