
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-f9cad.firebaseapp.com",
  projectId: "blog-f9cad",
  storageBucket: "blog-f9cad.appspot.com",
  messagingSenderId: "596900000722",
  appId: "1:596900000722:web:e3eefed67f1b7c1d3fce0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);