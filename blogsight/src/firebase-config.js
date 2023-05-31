import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDbNCxp_wadaJ0dUz5ifBdhaL5iBhHmXwg",
  authDomain: "blogsight.firebaseapp.com",
  projectId: "blogsight",
  storageBucket: "blogsight.appspot.com",
  messagingSenderId: "830167829671",
  appId: "1:830167829671:web:a6ef43d0a6bf1787d6df82",
  measurementId: "G-2WN34YWNPS"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);