// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAplwS-NJy94g-mBjlQ20JAWE4u1ObpiW0",
  authDomain: "netflixgpt-870cd.firebaseapp.com",
  projectId: "netflixgpt-870cd",
  storageBucket: "netflixgpt-870cd.appspot.com",
  messagingSenderId: "823921661819",
  appId: "1:823921661819:web:ce600689d9193fd5f94fde",
  measurementId: "G-R64FEX658H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

