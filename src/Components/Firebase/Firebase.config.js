import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_apiKey,
  authDomain: import.meta.env.VITE_API_KEY_authDomain,
  projectId: import.meta.env.VITE_API_KEY_projectId,
  storageBucket: import.meta.env.VITE_API_KEY_storageBucket,
  messagingSenderId: import.meta.env.VITE_API_KEY_messagingSenderId,
  appId: import.meta.env.VITE_API_KEY_appId
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;