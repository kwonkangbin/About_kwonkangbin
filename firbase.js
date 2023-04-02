// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIs3YZk2O4xaGOpiXTRe-GRAMIRHO9Jb4",
  authDomain: "about-me-dfbdc.firebaseapp.com",
  projectId: "about-me-dfbdc",
  storageBucket: "about-me-dfbdc.appspot.com",
  messagingSenderId: "497828115529",
  appId: "1:497828115529:web:0bc75469885656d4ea7b98",
  measurementId: "G-J0TC1JQHKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);