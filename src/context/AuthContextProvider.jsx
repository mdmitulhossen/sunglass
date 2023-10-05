import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../config/firebase.config";
import { set } from "react-hook-form";

// create a context
export const AuthContext = createContext(null);

// fireBase provider
const googleProvider = new GoogleAuthProvider();



const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    // google sign in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //  sign UP with email password
    const signUpWithEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //  sign in with email password
    const signInWithEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // update profile

    const updateUserProfile = (obj) => {
        setLoading(true)
        // return updateProfile(auth.currentUser, obj)
        return new Promise((resolve, reject) => {
            updateProfile(auth.currentUser, obj)
                .then(() => {

                    resolve("Profile updated successfully")
                    setLoading(false)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }



    // use observer to check user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log("Inner subscribe")
            setLoading(false)
            setUser(currentUser);
        });
        // console.log("after login authStateChange")

        return () => {
            unsubscribe();
        };
    }, []);


    // context data
    const authInfo = {
        googleSignIn,
        signUpWithEmailPassword,
        signInWithEmailPassword,
        logOut,
        updateUserProfile,
        setUser,
        loading,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;