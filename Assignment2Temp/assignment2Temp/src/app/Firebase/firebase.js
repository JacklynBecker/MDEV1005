// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPWk-THSpdoNfgxkx3e3_N7TRmRDR2vJA",
  authDomain: "assignment2-mdev1005-b9a8f.firebaseapp.com",
  projectId: "assignment2-mdev1005-b9a8f",
  storageBucket: "assignment2-mdev1005-b9a8f.firebasestorage.app",
  messagingSenderId: "531217213",
  appId: "1:531217213:web:7bdcdb3f71d7e0cc1ae354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

//register user with email and password
export const register = (email, username, password) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (response) => updateProfile(response.user, { displayName: username })
  );
};

//login user with email and password
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//logout user
export const logout = () => {
  return auth.signOut();
};

export { app, auth };