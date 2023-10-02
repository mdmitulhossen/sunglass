
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUH6I8Ra1-m49qHWbZS1sw8xLWjpDX8TY",
  authDomain: "glasses-9df05.firebaseapp.com",
  projectId: "glasses-9df05",
  storageBucket: "glasses-9df05.appspot.com",
  messagingSenderId: "754673855441",
  appId: "1:754673855441:web:891f74e0175bd952244ef0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;