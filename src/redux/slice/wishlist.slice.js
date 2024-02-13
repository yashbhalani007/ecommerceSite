import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    wishlist: [],
    error: null
}

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addtowishlist: (state, action) => {
            console.log(action.payload);
            const itemToAdd = action.payload; 
            state.wishlist = [...state.wishlist, itemToAdd.id];
        },

        removefromwishlist: (state, action) => {
            const itemToRemove = action.payload; 
            state.wishlist = state.wishlist.filter(item => item !== itemToRemove.id);

        }
    }
})

export const { addtowishlist, removefromwishlist } = wishlistSlice.actions

export default wishlistSlice.reducer;