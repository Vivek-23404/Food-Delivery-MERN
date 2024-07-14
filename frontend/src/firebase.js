// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "food-delivery-ad0da.firebaseapp.com",
  projectId: "food-delivery-ad0da",
  storageBucket: "food-delivery-ad0da.appspot.com",
  messagingSenderId: "1011833093023",
  appId: "1:1011833093023:web:4a2c5e05707e4fee60dbaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app