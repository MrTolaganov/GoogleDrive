import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drive-8f74d.firebaseapp.com",
  projectId: "drive-8f74d",
  storageBucket: "drive-8f74d.appspot.com",
  messagingSenderId: "439686681775",
  appId: "1:439686681775:web:4836f9226241f570b8705a",
};

// const app = initializeApp(firebaseConfig);
!getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();
export { db, storage };
