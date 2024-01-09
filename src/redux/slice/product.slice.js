import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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

        data.Images.map(async (value, index) => {
            const number = Math.floor(Math.random() * 10000);
            // console.log(data.Images[index].name);
            // console.log(index);
            // console.log(number);

            const storageRef = ref(storage, "products/" + number + "_" + data.Images[index].name);

            console.log(storageRef);

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
                        fileurl
                    });

                    productData = {
                        id: productdoc.id,
                        ...data,
                        imgname,
                        fileurl
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
            state.product = action.payload
            state.errorMessage = null
        })
    }
})