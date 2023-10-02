import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider ,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../config/firebase.config";

// create a context
export const AuthContext = createContext(null);

// fireBase provider
const googleProvider = new GoogleAuthProvider();



const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState({})

    // google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider)
    }
    //  sign UP with email password
    const signUpWithEmailPassword = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //  sign in with email password
    const signInWithEmailPassword = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout
    const logOut = () => {
        return signOut(auth)
    }
    // update profile

    const updateUserProfile = (obj) => {
       return updateProfile(auth.currentUser,obj)
    }

    // use observer to check user state
    useEffect(()=>{
        onAuthStateChanged(auth,(u)=>{
            setUser(u)
        })
        console.log(user)
    },[user])


// context data
const authInfo ={
    googleSignIn,
    signUpWithEmailPassword,
    signInWithEmailPassword,
    logOut,
    updateUserProfile,
    setUser,
    user
}

    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthContextProvider;