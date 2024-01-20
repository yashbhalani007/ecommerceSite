import React, { useState } from 'react';
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
import Singlepage from '../user/container/Singlepage/Singlepage';
import Blog from '../user/container/Blog/Blog';
import BlogDetails from '../user/container/BlogDetails/BlogDetails';
import Shop from '../user/container/Shop/Shop';
import TrackOrder from '../user/container/TrackOrder/TrackOrder';
import Conformation from '../user/container/Conformation/Conformation';
import NewArrival from '../user/container/NewArrival/NewArrival';
import Category from '../user/container/Category/Category';
import Error from '../Error';


function UserRoutes(props) {


    const [subCategoryvalue, setsubCategory] = useState([])
    

    return (
        <>
            <Header setsubCategory={setsubCategory} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/category/:categoryName" element={<Category subCategoryvalue={subCategoryvalue} />} />
                <Route path="/product_Details/:id" element={<Singlepage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/storeDirectory" element={<StoreDirectory />} />
                <Route path="/termAndCondition" element={<TermAndCondition />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/singlepage" element={<Singlepage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blogdetails" element={<BlogDetails/>} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/trackorder" element={<TrackOrder />} />
                <Route path="/conformation" element={<Conformation/>} />
                <Route path="/newarrival" element={<NewArrival/>} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoutes;