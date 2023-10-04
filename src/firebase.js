// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPCFPSFn_3XuywBlcUz4ApZvtlWrT-bm4",
  authDomain: "realtor-clone-react-18c6b.firebaseapp.com",
  projectId: "realtor-clone-react-18c6b",
  storageBucket: "realtor-clone-react-18c6b.appspot.com",
  messagingSenderId: "57219620050",
  appId: "1:57219620050:web:fd26ae8775e525d665610b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()