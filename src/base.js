// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsYvNprgq2pSBEG4Gk2pCSrjWBFaqtwZw",
  authDomain: "personal-website-2091e.firebaseapp.com",
  projectId: "personal-website-2091e",
  storageBucket: "personal-website-2091e.appspot.com",
  messagingSenderId: "764487529648",
  appId: "1:764487529648:web:62aee48eb3d69f9ab6f775",
  measurementId: "G-09B7ERVKM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fs = getFirestore(app);
const analytics = getAnalytics(app);