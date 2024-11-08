// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfahl8C96JKB_LwZztgqJLq4y6TM20Nf8",
  authDomain: "alzheimers-code.firebaseapp.com",
  projectId: "alzheimers-code",
  storageBucket: "alzheimers-code.firebasestorage.app",
  messagingSenderId: "341205586662",
  appId: "1:341205586662:web:87d1af6f4570b525716127",
  measurementId: "G-0DD9GN4P8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);