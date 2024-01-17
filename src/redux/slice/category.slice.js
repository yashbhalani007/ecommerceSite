import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { db } from "../../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const initialState = {
    isLoading: false,
    category: [],
    errorMessage: null
}

export const addCategory = createAsyncThunk(
    'category/add',
    async (data) => {
        let nData = []
        const docRef = await addDoc(collection(db, "category"), data);
        nData.push(data)

        return nData
    }
)

export const getCategoryData = createAsyncThunk(
    'category/get',
    async () => {
        let data = []

        const querySnapshot = await getDocs(collection(db, "category"));
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data() })
        });

        return data

    }

)

export const categorySlice = createSlice({
    name: "categorys",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.category = action.payload
            state.errorMessage = null
        })

        builder.addCase(getCategoryData.fulfilled, (state, action) => {
            state.isLoading = false
            state.category = action.payload
            state.errorMessage = null
        })
    }
})

export default categorySlice.reducer
