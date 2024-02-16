import { combineReducers } from "@reduxjs/toolkit";
import { adminAuthReducer } from "./adminauth.reducer";
import alertSlice from "../slice/alert.slice";
import userSlice from "../slice/user.slice";
import { userAuthReducer } from "./userauth.reducer";
import categorySlice from "../slice/category.slice";
import subcategorySlice from "../slice/subcategory.slice";
import productSlice from "../slice/product.slice";
import cartSlice from "../slice/cart.slice";
import wishlistSlice from "../slice/wishlist.slice";
import selectcategorySlice from "../slice/selectcategory.slice";
import  reviewSlice  from "../slice/rating.slice";

export const rootreducer = combineReducers({
    adminauth: adminAuthReducer,
    userauth : userAuthReducer,
    alert: alertSlice,
    users: userSlice,
    category: categorySlice,
    subcategory: subcategorySlice,
    products: productSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    selectcategory: selectcategorySlice,
    review: reviewSlice
})