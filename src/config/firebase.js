// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi9StQU8u_qFEfeCmFfsk5F5fFGm3CIHc",
  authDomain: "fir-course-118bf.firebaseapp.com",
  projectId: "fir-course-118bf",
  storageBucket: "fir-course-118bf.appspot.com",
  messagingSenderId: "517500077838",
  appId: "1:517500077838:web:4475a613ad6605decbb95f",
  measurementId: "G-QVBXXYK3VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);