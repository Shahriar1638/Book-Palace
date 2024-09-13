// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4vtg6fzJYA0WliV36HZUkG1nahLwvzz0",
  authDomain: "book-palace-c13de.firebaseapp.com",
  projectId: "book-palace-c13de",
  storageBucket: "book-palace-c13de.appspot.com",
  messagingSenderId: "377085757582",
  appId: "1:377085757582:web:b08d7375b0074f61f0e1df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;