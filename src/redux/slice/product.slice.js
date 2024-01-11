import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc, getDocs } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";

const initialState = {
    isLoading: false,
    products: [],
    errorMessage: null
}

export const getProduct = createAsyncThunk(
    'product/get',
    async () => {
        let data = []

        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            data.push({...doc.data()})

        });

        return data
    }
)

export const addProduct = createAsyncThunk(
    'product/add',
    async (data) => {
        let imgname = []
        let fileurl = []
        let productData = { ...data }
        let uid
        let email

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                uid = user.uid;
                email = user.email
                // ...
            } else {
                // User is signed out
                console.log('User is signed out');
                // ...
            }
        });

        data.Images.map(async (value, index) => {
            const number = Math.floor(Math.random() * 10000);
            // console.log(data.Images[index].name);
            // console.log(index);
            // console.log(number);

            const storageRef = ref(storage, "products/" + number + "_" + data.Images[index].name);

            uploadBytes(storageRef, data.Images[index]).then(async (snapshot) => {
                await getDownloadURL(ref(storage, snapshot.ref)).then(async url => {
                    imgname.push(number + "_" + data.Images[index].name)

                    fileurl.push(url)
                });
                if (imgname.length && fileurl.length == data.Images.length) {
                    console.log(imgname, fileurl);

                    delete data.Images
                    const productdoc = await addDoc(collection(db, "products"), {
                        ...data,
                        imgname,
                        fileurl,
                        supplier_id: uid,
                        supplier_email: email,
                        status: 'pending'
                    });

                    productData = {
                        id: productdoc.id,
                        ...data,
                        imgname,
                        fileurl,
                        supplier_id: uid,
                        supplier_email: email,
                        status: 'pending'
                    };
                }
            });
        })

        return productData
    }
)


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload
            state.errorMessage = null
        })

        builder.addCase(getProduct.fulfilled,(state,action) => {
            state.isLoading = false
            state.products = action.payload
            state.errorMessage = null
        })
    }
})

export default productSlice.reducer