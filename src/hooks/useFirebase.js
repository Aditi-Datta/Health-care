import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
// initialize Firebase App
initializeFirebase();

const useFirebase = () => {

    const [user,setUser] = useState({});
    const auth = getAuth();

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    //observe user state
    useEffect(()=> {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) { 
              setUser(user);
            } else {
              setUser({});
            }
          });
        return () => unSubscribed;
    },[])

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return{
        user,
        registerUser,
        logout,

    }





}

export default useFirebase;