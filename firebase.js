// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEfz8DF6e3yGcFPTm_2sFpNEAJI9Sc9xw",
    authDomain: "insta-reels-3ef6a.firebaseapp.com",
    projectId: "insta-reels-3ef6a",
    storageBucket: "insta-reels-3ef6a.appspot.com",
    messagingSenderId: "739566934202",
    appId: "1:739566934202:web:bbe163ad9ec0f72b388a83"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

const auth = getAuth();
export  {auth,storage};

export default app;