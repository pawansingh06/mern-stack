// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f2c80.firebaseapp.com",
  projectId: "mern-estate-f2c80",
  storageBucket: "mern-estate-f2c80.appspot.com",
  messagingSenderId: "874788186132",
  appId: "1:874788186132:web:89861ae16562a262935f01"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);