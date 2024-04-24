// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuBo6rW-HpykMLps2EHkAiGXZ3kmTTCNY",
  authDomain: "bookstore-authentication.firebaseapp.com",
  projectId: "bookstore-authentication",
  storageBucket: "bookstore-authentication.appspot.com",
  messagingSenderId: "102454476516",
  appId: "1:102454476516:web:026d3925f434b76eb1b6f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;