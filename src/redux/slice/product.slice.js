import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc, getDocs, getDoc, updateDoc, doc } from "firebase/firestore";
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
            data.push({
                id: doc.id,
                ...doc.data()
            })
        });

        console.log(data.id);
        return data;
    }
)

export const addProduct = createAsyncThunk(
    'product/add',
    async (data) => {
        let imgname = [];
        let fileurl = [];
        let productData = { ...data };
        let uid;
        let email;

        await onAuthStateChanged(auth, (user) => {
            if (user) {
                uid = user.uid;
                email = user.email;
            } else {
                console.log('User is signed out');
            }
        });

        try {
            // Assuming your data.Images is an array of File objects
            await Promise.all(data.Images.map(async (file) => {
                const number = Math.floor(Math.random() * 10000);
                const storageRef = ref(storage, `products/${number}_${file.name}`);

                const snapshot = await uploadBytes(storageRef, file);
                const url = await getDownloadURL(ref(storage, snapshot.ref));

                imgname.push(`${number}_${file.name}`);
                fileurl.push(url);
            }));

            if (imgname.length === data.Images.length) {
                delete data.Images;

                const productDocRef = await addDoc(collection(db, 'products'), {
                    ...data,
                    imgname,
                    fileurl,
                    supplier_id: uid,
                    supplier_email: email,
                    status: 'pending',
                });

                const productDocSnapshot = await getDoc(productDocRef);

                // Make sure to check if the productDocSnapshot has an id property
                if (productDocSnapshot.exists()) {
                    const { id } = productDocSnapshot;

                    productData = {
                        id,
                        ...data,
                        imgname,
                        fileurl,
                        supplier_id: uid,
                        supplier_email: email,
                        status: 'pending',
                    };

                    console.log('Product Data:', productData);
                    return productData;
                } else {
                    console.error('Product document does not exist.');
                    return null;  // or handle the case when the document doesn't exist
                }
            } else {
                console.error('Image upload failed for some files.');
                return null;  // or handle the case when image upload fails
            }
        } catch (error) {
            console.error('Error adding product:', error);
            return null;  // or handle the error appropriately
        }
    }
);

export const updateProduct = createAsyncThunk(
    'product/update',
    async (data) => {
        const productsRef = doc(db, "products",data.id);
        let nData = { ...data, status: 'approve' }
        await updateDoc(productsRef, nData);    
    }
)



export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addProduct.fulfilled, (state, action) => {
            console.log('Fulfilled case executed');
            console.log(action.payload);  // Make sure this line is here

            state.isLoading = false;
            state.products = action.payload;
            state.errorMessage = null;
        });

        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload
            state.errorMessage = null
        })
    }
})

export default productSlice.reducer



