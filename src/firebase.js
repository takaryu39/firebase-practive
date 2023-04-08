// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8rb4AOT8SD05BG90GIAzJbmgUQaNIuZs",
  authDomain: "blog-3dfb7.firebaseapp.com",
  projectId: "blog-3dfb7",
  storageBucket: "blog-3dfb7.appspot.com",
  messagingSenderId: "55815409159",
  appId: "1:55815409159:web:aa151f32f9c83afa75e4a2",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };
