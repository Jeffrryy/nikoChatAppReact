 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAT_BfKmAtPw-CYzLBXrtn6N6StYYOlFyk",
    authDomain: "chat-29bb7.firebaseapp.com",
    projectId: "chat-29bb7",
    storageBucket: "chat-29bb7.appspot.com",
    messagingSenderId: "573487730883",
    appId: "1:573487730883:web:4ffad6cc7953266a471276",
    measurementId: "G-78V7P6MG6V"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()

export const storage = getStorage();
export const db = getFirestore()