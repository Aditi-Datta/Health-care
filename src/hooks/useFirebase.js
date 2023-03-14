import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signOut,signInWithEmailAndPassword, onAuthStateChanged ,getIdToken, updateProfile,sendEmailVerification , sendPasswordResetEmail } from "firebase/auth";

import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
// initialize Firebase App
initializeFirebase();

const useFirebase = () => {

    const [user,setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [token, setToken] = useState('');
    const [admin, setAdmin] = useState(false);
    const [doctor, setDoctor] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // const user = userCredential.user;
            setAuthError('');
            verifyEmail();
            const newUser = { email, displayName: name };
            setUser(newUser);
            //save user to the database
            saveUser(email, name, 'POST');
            //send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
          }).catch((error) => {
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

             //save user to the database
             saveUser(user.email, user.displayName, 'PUT');

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
              getIdToken(user)
              .then(idToken => {
                  setToken(idToken);
              })
            } else {
              setUser({});
            }
            setIsLoading(false);
          });
        return () => unSubscribed;
    },[])

    const saveUser = (email, displayName, method) => {
      const user = { email, displayName };
      fetch('http://localhost:5000/users', {
          method: method,
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
          .then()
  }

  useEffect(() => {

    fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
}, [user.email])

useEffect(() => {
    fetch(`http://localhost:5000/users/doctor/${user.email}`)
        .then(res => res.json())
        .then(data => setDoctor(data.doctor))
}, [user.email])

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
        token,
        doctor,
        admin,
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