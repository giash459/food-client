// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaGnQTmmNJAETlx-_qox5RCGpdSi5yVuw",
  authDomain: "foods-8f8a7.firebaseapp.com",
  projectId: "foods-8f8a7",
  storageBucket: "foods-8f8a7.firebasestorage.app",
  messagingSenderId: "1048805673238",
  appId: "1:1048805673238:web:fe69d12c6443a932172837"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);