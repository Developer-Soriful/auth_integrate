// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiytDDeYO9MPHZo4UkXJ0xd0MShGKm7CE",
  authDomain: "sunny-passage-458801-n3.firebaseapp.com",
  projectId: "sunny-passage-458801-n3",
  storageBucket: "sunny-passage-458801-n3.firebasestorage.app",
  messagingSenderId: "744379757352",
  appId: "1:744379757352:web:53abf81e0c5bbee324561d",
  measurementId: "G-T8P02JT1NJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
