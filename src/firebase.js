// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCNGHoqXeMXRoWxDZ-FcYx7vdAMobL8ek",
  authDomain: "realtor-clone2-a8b6e.firebaseapp.com",
  projectId: "realtor-clone2-a8b6e",
  storageBucket: "realtor-clone2-a8b6e.appspot.com",
  messagingSenderId: "296138002001",
  appId: "1:296138002001:web:000b661c5870b1783f7270"
};
// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()