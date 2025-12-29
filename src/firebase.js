// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuol8wzI9aK7KDfDTZV2afZHXX9c8saXQ",

  authDomain: "mpt-prep.firebaseapp.com",

  projectId: "mpt-prep",

  storageBucket: "mpt-prep.firebasestorage.app",

  messagingSenderId: "211948025410",

  appId: "1:211948025410:web:f28c377d036a5489181fdb",

  measurementId: "G-6JRN4Z2677"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);