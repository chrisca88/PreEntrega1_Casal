// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-XF8LDJ2cNF0lOgOfep-MVnXn5Bdb_18",
  authDomain: "ecommercefunko-11983.firebaseapp.com",
  projectId: "ecommercefunko-11983",
  storageBucket: "ecommercefunko-11983.appspot.com",
  messagingSenderId: "242230576120",
  appId: "1:242230576120:web:3eb192a470c717ebec4c0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = ()=> app