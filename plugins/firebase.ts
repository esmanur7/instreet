// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCB7Q-h3I1sa5ixuvAxsyMGeuPe5HdoY4Y",
  authDomain: "instreet3-c5552.firebaseapp.com",
  projectId: "instreet3-c5552",
  storageBucket: "instreet3-c5552.firebasestorage.app",
  messagingSenderId: "438802023879",
  appId: "1:438802023879:web:f14862bfea47d9962b45e2",
  measurementId: "G-EJMRT8YD2M"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(firebaseApp);

// Initialize Authentication
export const auth = getAuth(firebaseApp);

// Initialize Analytics (browser only)
if (typeof window !== "undefined") {
    try {
        getAnalytics(firebaseApp);
    } catch (error) {
        console.warn("Analytics could not be initialized:", error);
    }
}

export { firebaseApp };
