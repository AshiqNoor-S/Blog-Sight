import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBrFwCOjrgGvXi3JpstPq3OmIob7aY9-FI",
  authDomain: "blogsight-9b4a0.firebaseapp.com",
  projectId: "blogsight-9b4a0",
  storageBucket: "blogsight-9b4a0.appspot.com",
  messagingSenderId: "587764531551",
  appId: "1:587764531551:web:1c0bc8d6de5c00971176ea",
  measurementId: "G-W0T86LPZ0H"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
