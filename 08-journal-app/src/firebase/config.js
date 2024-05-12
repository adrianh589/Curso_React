// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
    VITE_APIKEY,
    VITE_AUTHDOMAIN,
    VITE_PROJECTID,
    VITE_STORAGEBUCKET,
    VITE_MESSAGINGSENDERID,
    VITE_APPID,
} = import.meta.env;

// Your web app's Firebase configuration
// Dev Prod
/*const firebaseConfig = {
    apiKey: "AIzaSyCFV0tz6hoT90NKQjPdZGFIv_ENhTfjXbc",
    authDomain: "react-curso-44208.firebaseapp.com",
    projectId: "react-curso-44208",
    storageBucket: "react-curso-44208.appspot.com",
    messagingSenderId: "894766059937",
    appId: "1:894766059937:web:2d15a2d559ca53cd40bbe0"
};*/

// Testing
const firebaseConfig = {
    apiKey: VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket: VITE_STORAGEBUCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID
};
/*const firebaseConfig = {
    apiKey: "AIzaSyDJn-ET0ha5wnqvFoeILw8HyopGVlS_V9k",
    authDomain: "bd-develop-notes-react.firebaseapp.com",
    projectId: "bd-develop-notes-react",
    storageBucket: "bd-develop-notes-react.appspot.com",
    messagingSenderId: "901149227110",
    appId: "1:901149227110:web:1013ac25ee92bf4d2f15a7"
};*/

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export  const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore(FirebaseApp);
