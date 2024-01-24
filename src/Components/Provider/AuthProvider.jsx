import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    // Create a User Using Email & Password
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // User Login Using Email & Password
    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // User Logout
    const userLogout = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // User create and login using google
    const createUserAndLoginEithGmail = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // Set user photoURL
    const setUserProfileImage = (user, photo) =>{
        return updateProfile(user, {
            photoURL: photo
        })
    }

    // Set User name
    const setUserName = (user, name) =>{
        return updateProfile(user, {
            displayName: name
        })
    }


    // Observer the user
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        userLogin,
        createUser,
        userLogout,
        setUserName,
        setUserProfileImage,
        createUserAndLoginEithGmail
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;