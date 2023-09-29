// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ7xFWNiMD14Qs3JvRnoOV6II4DZnWfaY",
  authDomain: "flipcart-c6a37.firebaseapp.com",
  projectId: "flipcart-c6a37",
  storageBucket: "flipcart-c6a37.appspot.com",
  messagingSenderId: "725590492793",
  appId: "1:725590492793:web:e552cd8f159e7d0bcfb6a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export default app;

