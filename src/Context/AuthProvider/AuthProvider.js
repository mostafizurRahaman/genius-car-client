import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'; 
import app from './../../firebase/firebase.config';
import { useState, useEffect } from 'react';

export const AuthContext = createContext(); 
const auth = getAuth(app); 
const googleProvider = new GoogleAuthProvider(); 
const facebookProvider = new FacebookAuthProvider(); 

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null); 
const [loading, setLoading] = useState(true); 

    const createUser = (email ,password) => {
      setLoading(true); 
      return createUserWithEmailAndPassword(auth, email, password); 
    }
    const LogIn = (email, password) => {
      setLoading(true); 
      return signInWithEmailAndPassword(auth, email, password); 
    }
    
    const updateInfo = (profile) => {
      setLoading(true); 
         return updateProfile(auth.updateCurrentUser, profile)
    }

    const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser); 
    }
    const LogOut = () => {
      return signOut(auth);
    }
    const GoogleSignIn = () => {
      setLoading(true); 
      return signInWithPopup(auth, googleProvider); 
    }

    const FacebookSignIn = () => {
      setLoading(true); 
      return signInWithPopup(auth ,facebookProvider)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser); 
         setLoading(false); 
      })

      return () => {
         unsubscribe(); 
      }
    }, [])
    const authInfo = {user, loading, createUser, LogIn, updateInfo, verifyEmail, GoogleSignIn, FacebookSignIn, LogOut}
   return (
       <AuthContext.Provider value={authInfo}>
               {
                  children
               }
       </AuthContext.Provider>
   );
};

export default AuthProvider;