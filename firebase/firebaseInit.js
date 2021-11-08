// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUswv-oDXbONhmUjZEIZ-xv8cIeb6ouY0",
  authDomain: "sustcampus-49fb7.firebaseapp.com",
  databaseURL: "https://sustcampus-49fb7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sustcampus-49fb7",
  storageBucket: "sustcampus-49fb7.appspot.com",
  messagingSenderId: "714762015090",
  appId: "1:714762015090:web:c346638dcd2c6588e8cdeb",
  measurementId: "G-4BEB6RRDZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebase = getDatabase(app);




