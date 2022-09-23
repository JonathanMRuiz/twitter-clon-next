// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_2vVS-8XhIlVB-ZBY8fh8TnxEnmGXm_Q",
  authDomain: "twitter-clone-dc6bf.firebaseapp.com",
  projectId: "twitter-clone-dc6bf",
  storageBucket: "twitter-clone-dc6bf.appspot.com",
  messagingSenderId: "611799233831",
  appId: "1:611799233831:web:b46fe0ea6ed7c91b212502",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
