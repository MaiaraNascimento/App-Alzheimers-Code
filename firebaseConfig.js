// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfahl8C96JKB_LwZztgqJLq4y6TM20Nf8",
  authDomain: "alzheimers-code.firebaseapp.com",
  projectId: "alzheimers-code",
  storageBucket: "alzheimers-code.appspot.com",
  messagingSenderId: "341205586662",
  appId: "1:341205586662:web:87d1af6f4570b525716127",
  measurementId: "G-0DD9GN4P8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

console.log("Firebase inicializado com sucesso");
