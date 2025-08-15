import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiDazM67ag5ospAfb23OySuhdIJFIMOdk",
  authDomain: "mnemify-2a94c.firebaseapp.com",
  projectId: "mnemify-2a94c",
  storageBucket: "mnemify-2a94c.firebasestorage.app",
  messagingSenderId: "404544486854",
  appId: "1:404544486854:web:5b206af6d28b09cc9046c7",
  measurementId: "G-QNQTWR99K0"
};

const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
console.log("Firebase initialized:", app.name);

const db = getFirestore(app);
const auth = getAuth(app); 

export { db, auth, analytics }; 