// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBda0NXYcJlwgC4mZYNAfu9EoDm91aG7qY",
  authDomain: "firbaseproject-5f45e.firebaseapp.com",
  projectId: "firbaseproject-5f45e",
  storageBucket: "firbaseproject-5f45e.appspot.com",
  messagingSenderId: "18317380432",
  appId: "1:18317380432:web:0f61118cc03de71ae4ba55",
  measurementId: "G-LL0QP71ERQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)