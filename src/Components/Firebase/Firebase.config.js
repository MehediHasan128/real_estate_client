import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBNqBPVlSk7JO1tyDLCFcS7koFnIUeJrd0",
  authDomain: "real-estate-25b0e.firebaseapp.com",
  projectId: "real-estate-25b0e",
  storageBucket: "real-estate-25b0e.appspot.com",
  messagingSenderId: "85931236044",
  appId: "1:85931236044:web:380f263bd92e5ea5c0c069"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;