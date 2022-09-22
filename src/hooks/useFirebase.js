import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signOut,signInWithEmailAndPassword, onAuthStateChanged ,sendEmailVerification , sendPasswordResetEmail } from "firebase/auth";

import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
// initialize Firebase App
initializeFirebase();

const useFirebase = () => {

    const [user,setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setAuthError('');
            verifyEmail();
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
    }



    const verifyEmail = () => {
      sendEmailVerification(auth.currentUser)
      .then(()=> {
          console.log("Email verification sent");
      });
  }

  const handleResetPassword = (email) => {
      sendPasswordResetEmail(auth, email)
      .then (() => { 
          console.log('email sent');
      })
  }
  


    const loginUser = (email, password, location, history) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              setAuthError('');
              const destination = location?.state?.from || '/';
              history.replace(destination);

          })
          .catch((error) => {
              setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
  }

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
}


    //observe user state
    useEffect(()=> {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) { 
              setUser(user);
            } else {
              setUser({});
            }
            setIsLoading(false);
          });
        return () => unSubscribed;
    },[])

    const logout = () => {
      setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }

    return{
        user,
        registerUser,
        isLoading,
        authError,
        signInWithGoogle,
        loginUser,
        handleResetPassword,
        logout,

    }





}

export default useFirebase;