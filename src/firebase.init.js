// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuZ_eR9kLtC8_48c-srSPYWa4MKejwfMA",
  authDomain: "education-tech-42207.firebaseapp.com",
  projectId: "education-tech-42207",
  storageBucket: "education-tech-42207.appspot.com",
  messagingSenderId: "819202025574",
  appId: "1:819202025574:web:ff55d7addc4605978865a7",
  measurementId: "G-4B6ETE16Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
export default auth ;
