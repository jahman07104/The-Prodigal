import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/**
 * Firebase Configuration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://console.firebase.google.com/
 * 2. Create a new project or select existing one
 * 3. Navigate to Project Settings > General
 * 4. Scroll to "Your apps" and click "Web" (</>) to add web app
 * 5. Copy the firebaseConfig object
 * 6. Replace the placeholder values below with your actual Firebase config
 * 7. Enable Authentication (Email/Password and Google) in Firebase Console
 * 8. Create a Firestore database in Firebase Console
 * 
 * SECURITY NOTE:
 * - These keys are safe to expose in client-side code
 * - However, you should set up Firebase Security Rules to protect your data
 * - For production, consider using environment variables
 */

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
let app;
let auth;
let db;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  console.log("✓ Firebase initialized successfully");
} catch (error) {
  console.error("✗ Firebase initialization error:", error);
}

export { app, auth, db };
