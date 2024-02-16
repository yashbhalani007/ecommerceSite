import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { db } from "../../firebase";
import { getFirestore, addDoc, collection, query, doc, getDoc, getDocs } from "firebase/firestore";


const initialState = {
    isLoading: false,
    subcategory: [],
    errorMessage: null
}

export const addSubCategory = createAsyncThunk(
    'subcategory/add',
    async (data) => {
        const firestore = getFirestore()

        const collectionRef = collection(firestore, "category");
        const q = query(collectionRef);
        const querySnapshot = await getDocs(q);

        let document = null

        querySnapshot.forEach((doc) => {
            if (doc.data().category === data.categorys) {
                document = {...doc.data(),subcategory: data.newSubCategory,cateId: doc.id}
            }
        });
        
        let nData = []
        const docRef = await addDoc(collection(db, "subCategory"), document);
        nData.push(document)
        
        return nData
    }
)

export const getSubCategoryData = createAsyncThunk(
    'subcategory/get',
    async () => {
        let data = []

        const querySnapshot = await getDocs(collection(db, "subCategory"));
        querySnapshot.forEach((doc) => {
            data.push({...doc.data()})

        });

        return data
    }
)

export const subcategorySlice = createSlice({
    name: "subcategory",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addSubCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.subcategory = action.payload
            state.errorMessage = null
        })

        builder.addCase(getSubCategoryData.fulfilled, (state, action) => {
            state.isLoading = false
            state.subcategory = action.payload
            state.errorMessage = null
        })
    }
})

export default subcategorySlice.reducer
