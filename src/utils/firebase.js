// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDu4WF-7oely4T3JPHjxAzKxKA1rC-9YDM",
    authDomain: "banner-web-b98bc.firebaseapp.com",
    projectId: "banner-web-b98bc",
    storageBucket: "banner-web-b98bc.appspot.com",
    messagingSenderId: "311720436742",
    appId: "1:311720436742:web:c433b2f1a58c893229cf87",
    measurementId: "G-CQP0QPNN61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
