import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc  } from "firebase/firestore";
import { deleteUser } from "firebase/auth";
import { auth, db } from "../../firebase"

const initialState = {
    isLoading: false,
    users: [],
    errorMessage: null
}

export const getUsersData = createAsyncThunk(
    'users/get',
    async () => {
        await new Promise((resolve, reject) => setTimeout(resolve, 1000))
        
        let data = []

        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id })
        });

        return data;
    }
)

export const addUsersData = createAsyncThunk(
    'users/add',
    async (data) => {
        console.log(data);
        let iData = {...data}
            const docRef = addDoc(collection(db, "users"), {
                ...data,
                emailVerified: false,
                type: data.pickup || data.store_name ? 'supplier' : 'consumer'
            });

            iData = {
                ...data,
                emailVerified: false,
                type: data.pickup || data.store_name ? 'supplier' : 'consumer'
            }
            console.log(iData);
        return iData
    }
)

export const updateUserData = createAsyncThunk(
    'user/update',
    async (data) => {
        // await new Promise((resolve, reject) => setTimeout(resolve, 1000))
        const docRef = doc(db, "users", data.id);
        let nData = { ...data, emailVerified: true }
        await updateDoc(docRef, nData);

        return nData
    }
)

export const deleteUserData = createAsyncThunk(
    'user/delete',
    async (id) => {
        await deleteDoc(doc(db, "users/", id))
        
        let user = auth.currentUser
        deleteUser(user).then(() => {
            // User deleted.
            console.log('User Deleted');
          }).catch((error) => {
            // An error ocurred
            console.log(error);
          });

        return id
    }
)

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersData.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.errorMessage = null
        })

        builder.addCase(updateUserData.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = state.users.filter((v) => v.id === action.payload.id)
            state.errorMessage = null
        })

        builder.addCase(addUsersData.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.errorMessage = null
        })

        builder.addCase(deleteUserData.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = state.users.filter((v) => v.id !== action.payload)
            state.errorMessage = null
        })
    }
})

export default userSlice.reducer