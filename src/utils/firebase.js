// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPfm1Pe0d0crnVA1Obhwb7RcRv2Vuwi2s",
  authDomain: "netflixgpt-824de.firebaseapp.com",
  projectId: "netflixgpt-824de",
  storageBucket: "netflixgpt-824de.appspot.com",
  messagingSenderId: "1015907500578",
  appId: "1:1015907500578:web:c7674f8b2575bf2240807b",
  measurementId: "G-ZBCYKZ12D8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
