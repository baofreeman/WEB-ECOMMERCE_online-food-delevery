import { Routes, Route } from 'react-router-dom';
import './App.css';

import Order from './components/Layout/Order';
import AddToCart from './components/Layout/AddToCart';
import YourCart from './components/Layout/YourCart';
import Checkout from './components/Layout/Checkout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProductSingle from './components/Layout/ProductSingle';
import Product from './components/Product';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="order" element={<Order />} />
                    <Route path="cart" element={<YourCart />} />
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
