// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT8c-86DdHWJ9veJjE7qnUUYBUfgeAi60",
  authDomain: "anonymous-santa-c3076.firebaseapp.com",
  projectId: "anonymous-santa-c3076",
  storageBucket: "anonymous-santa-c3076.appspot.com",
  messagingSenderId: "883744962535",
  appId: "1:883744962535:web:9a604ffaf332681a982f42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app) 
 
export default db;