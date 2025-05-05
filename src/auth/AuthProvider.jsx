import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  // this section for  create user
  const [loading, setSuccess] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (name, photoURL, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const newUser = userCredential.user;
        return updateProfile(newUser, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          // Optional: update context state
          setUser({ ...newUser, displayName: name, photoURL: photoURL });
          return newUser;
        });
      }
    );
  };
  //   this section for login user
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   this section for google pup up hahah ataai bastob
  const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  //   this section for logout
  const logout = () => {
    return signOut(auth);
  };
  //   this section  for observing user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setSuccess(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //   this section for userInfo
  const userInfo = {
    createUser,
    signIn,
    googleAuth,
    logout,
    user,
    setUser,
    loading
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
