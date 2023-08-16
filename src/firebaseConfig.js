// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd8_PP_nQqQ4ozCwOLu9bS1Nq2da65VAI",
  authDomain: "comserver-691b1.firebaseapp.com",
  projectId: "comserver-691b1",
  storageBucket: "comserver-691b1.appspot.com",
  messagingSenderId: "988899198272",
  appId: "1:988899198272:web:c21b7cfd555c7557eb66a5",
  measurementId: "G-R6S53Y0QQ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export { auth, app, firestore, analytics, storage };
