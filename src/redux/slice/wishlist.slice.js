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
            const itemToAdd = action.payload; 
            state.wishlist = [...state.wishlist, itemToAdd];
        },

        removefromwishlist: (state, action) => {
            const itemToRemove = action.payload; 
            state.wishlist = state.wishlist.filter(item => item !== itemToRemove);

        }
    }
})

export const { addtowishlist, removefromwishlist } = wishlistSlice.actions

export default wishlistSlice.reducer;