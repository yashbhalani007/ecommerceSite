import React from 'react';
import Header from '../user/components/Header/Header';
import Footer from '../user/components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from '../user/container/Home/Home';
import Cart from '../user/container/Cart/Cart';
import Wishlist from '../user/container/Wishlist/Wishlist';

function UserRoutes(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoutes;