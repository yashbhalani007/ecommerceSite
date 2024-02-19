import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db, storage } from "../../firebase";
import { getDocs, addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const initialState = {
    isLoading: false,
    reviews: [],
    errorMessage: null
}


export const addReview = createAsyncThunk(
    'reviews/add',
    // async (reviewData) => {

    //     let imgname = [];
    //     let fileurl = [];

    //     try {

    //         if (reviewData.Images) {
    //             const file = reviewData.Images; // Get the single image file
    //             const number = Math.floor(Math.random() * 10000);
    //             const storageRef = ref(storage, `reviews/${number}_${file.name}`);

    //             const snapshot = await uploadBytes(storageRef, file);
    //             const url = await getDownloadURL(snapshot.ref);

    //             imgname.push(`${number}_${file.name}`);
    //             fileurl.push(url);
    //         }

    //         const docRef = await addDoc(collection(db, "reviews"), { ...reviewData, fileurl });
    //         return { id: docRef.id,fileurl, ...reviewData };
    //     } catch (error) {

    //         console.error('Error adding review:', error);
    //         throw error;
    //     }
    // }
    async (reviewData) => {
        try {
            let fileurl = []; // Initialize an array to hold the URLs of uploaded files

            if (reviewData.Images) {
                // If there's an image uploaded
                const file = reviewData.Images;
                const number = Math.floor(Math.random() * 10000);
                const storageRef = ref(storage, `reviews/${number}_${file.name}`);
                const snapshot = await uploadBytes(storageRef, file);
                const url = await getDownloadURL(snapshot.ref);

                fileurl.push(url); // Add the URL of the uploaded file to the array

                // Remove the file object from reviewData to avoid saving it to Firestore
                delete reviewData.Images;
            }

            // Add the review data to Firestore, including the file URL(s)
            const docRef = await addDoc(collection(db, "reviews"), { ...reviewData, fileurl });
            return { id: docRef.id, fileurl, ...reviewData };
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
