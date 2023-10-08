// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "dash-f8efd.firebaseapp.com",
  projectId: "dash-f8efd",
  storageBucket: "dash-f8efd.appspot.com",
  messagingSenderId: "41762480209",
  appId: "1:41762480209:web:1acadb8293c3477c7fd870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);