import React from 'react';
import Header from '../user/components/Header/Header';
import Footer from '../user/components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from '../user/container/Home/Home';
import Cart from '../user/container/Cart/Cart';
import Wishlist from '../user/container/Wishlist/Wishlist';
import Checkout from '../user/container/Checkout/Checkout';
import Auth from '../user/container/Auth/Auth';
import About from '../user/container/About/About';
import Contact from '../user/container/Contact/Contact';
import Faq from '../user/container/Faq/Faq';
import StoreDirectory from '../user/container/Store-directory/StoreDirectory';
import TermAndCondition from '../user/container/TermAndCondition/TermAndCondition';
import ForgotPassword from '../user/container/ForgotPassword/ForgotPassword';

function UserRoutes(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/storeDirectory" element={<StoreDirectory />} />
                <Route path="/termAndCondition" element={<TermAndCondition />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoutes;