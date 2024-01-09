// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCI3Zv5OcZcrkH90P8BPoZmHQVbjVQQJY",
  authDomain: "multi-vendor-ecommerce-w-2712f.firebaseapp.com",
  projectId: "multi-vendor-ecommerce-w-2712f",
  storageBucket: "multi-vendor-ecommerce-w-2712f.appspot.com",
  messagingSenderId: "934355598780",
  appId: "1:934355598780:web:964db6e05830f88e6dbfb9",
  measurementId: "G-XC4EC7921B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app);