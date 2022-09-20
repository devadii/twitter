import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-7caef.firebaseapp.com",
  projectId: "twitter-clone-7caef",
  storageBucket: "twitter-clone-7caef.appspot.com",
  messagingSenderId: "367668287914",
  appId: "1:367668287914:web:b6306e2421ed6b282433d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
