import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID } from "../constants/env";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  // databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  console.log("Sign In func accessed");
  signInWithPopup(auth, provider)
    .then((res) => {
      // console.log("Response" + res);
      console.log(res.user);
  }).catch((err) => {console.log("Error" + err)});
}

export const googleLogout = () => {
  auth.signOut()
    .then(() => {console.log("Logged out successfully")})
    .catch((error) => {console.error(error.message)})
}