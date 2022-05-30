import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADVpozaaeFYS6C82_FgTgi2OO2qsA4PdU",
  authDomain: "house-marketplace-a12f2.firebaseapp.com",
  projectId: "house-marketplace-a12f2",
  storageBucket: "house-marketplace-a12f2.appspot.com",
  messagingSenderId: "436763184334",
  appId: "1:436763184334:web:d9eec4972b5b4a8ddcd49f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
