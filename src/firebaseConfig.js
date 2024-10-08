// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBL5k4dCNP0cv6q-Y23Tqo0ufhhspcOMk",
  authDomain: "desafiofinal-m7-d5417.firebaseapp.com",
  projectId: "desafiofinal-m7-d5417",
  storageBucket: "desafiofinal-m7-d5417.appspot.com",
  messagingSenderId: "292530527881",
  appId: "1:292530527881:web:511617018a0698901a7058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }