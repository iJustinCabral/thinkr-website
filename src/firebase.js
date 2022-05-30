import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCswq1hPdODq2zizY9WF1Lp-7qJpFfjrDc",
  authDomain: "thinkr-4c65e.firebaseapp.com",
  projectId: "thinkr-4c65e",
  storageBucket: "thinkr-4c65e.appspot.com",
  messagingSenderId: "326689876721",
  appId: "1:326689876721:web:b36896b8d15b4774d45750"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const storage = getStorage(app)

export {db}