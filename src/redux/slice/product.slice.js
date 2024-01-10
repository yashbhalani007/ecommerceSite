import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";

const initialState = {
    isLoading: false,
    product: [],
    errorMessage: null
}

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
            state.product = [...state.product, action.payload]
            state.errorMessage = null
        })
    }
})

export default productSlice.reducer