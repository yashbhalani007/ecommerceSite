import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { getDocs, addDoc, collection } from "firebase/firestore";

const initialState = {
    isLoading: false,
    reviews: [],
    errorMessage: null
}

export const addReview = createAsyncThunk(
    'reviews/add',
    async (reviewData) => {
        try {
            const docRef = await addDoc(collection(db, "reviews"), reviewData);
            return { id: docRef.id, ...reviewData };
        } catch (error) {

            console.error('Error adding review:', error);
            throw error;
        }
    }
);

export const getReviews = createAsyncThunk(
    'reviews/get',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "reviews"));
            const reviews = [];
            querySnapshot.forEach((doc) => {
                reviews.push({ id: doc.id, ...doc.data() });
            });
            return reviews;
        } catch (error) {

            console.error('Error fetching reviews:', error);
            throw error;
        }
    }
);

export const reviewSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addReview.fulfilled, (state, action) => {
            state.isLoading = false;
            state.reviews.push(action.payload);
            state.errorMessage = null;
        });
        builder.addCase(getReviews.fulfilled, (state, action) => {
            state.isLoading = false;
            state.reviews = action.payload;
            state.errorMessage = null;
        });
    }
});

export default reviewSlice.reducer;
