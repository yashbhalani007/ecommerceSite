import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
    isLoading: false,
    order: [],
    errorMessage: null
}

export const getOrder = createAsyncThunk(
    'order/get',
    async () => {
        let data = []

        const querySnapshot = await getDocs(collection(db, "order"));
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id })
        });

        return data;
    }
)

export const addOrder = createAsyncThunk(
    'order/add',
    async (data) => {
        const orderId = Math.floor(Math.random() * 9000000000) + 1000000 + "_1"; 
        
        data.orderId = orderId; 
        const docRef = await addDoc(collection(db, "order"), data);
        
        return data
    }
)

export const orderSlice = createSlice({
    name: 'order',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.order = action.payload
            state.errorMessage = null
        })

        builder.addCase(addOrder.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false
            state.order = action.payload
            state.errorMessage = null
        })
    }
})

export default orderSlice.reducer