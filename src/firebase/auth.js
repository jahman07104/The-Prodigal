import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./config";

/**
 * Firebase Authentication Utilities
 * 
 * Provides helper functions for user authentication and profile management.
 */

/**
 * Sign up new user with email and password
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @param {string} displayName - User's full name
 * @returns {Promise<Object>} User object
 */
export const signUpWithEmail = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update user profile with display name
    await updateProfile(user, { displayName });
    
    // Create user document in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      displayName: displayName,
      createdAt: serverTimestamp(),
      membershipStatus: "active"
    });
    
    console.log("✓ User signed up successfully:", user.email);
    return user;
  } catch (error) {
    console.error("✗ Sign up error:", error.message);
    throw error;
  }
};

/**
 * Sign in existing user with email and password
 * @param {string} email - User's email address
 * @param {string} password - User's password
 * @returns {Promise<Object>} User object
 */
export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("✓ User signed in successfully:", userCredential.user.email);
    return userCredential.user;
  } catch (error) {
    console.error("✗ Sign in error:", error.message);
    throw error;
  }
};

/**
 * Sign in with Google popup
 * @returns {Promise<Object>} User object
 */
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    // Check if user document exists, create if not
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists()) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        createdAt: serverTimestamp(),
        membershipStatus: "active"
      });
    }
    
    console.log("✓ User signed in with Google:", user.email);
    return user;
  } catch (error) {
    console.error("✗ Google sign in error:", error.message);
    throw error;
  }
};

/**
 * Sign out current user
 * @returns {Promise<void>}
 */
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("✓ User signed out successfully");
  } catch (error) {
    console.error("✗ Sign out error:", error.message);
    throw error;
  }
};

/**
 * Subscribe to authentication state changes
 * @param {Function} callback - Function to call when auth state changes
 * @returns {Function} Unsubscribe function
 */
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

/**
 * Get current user
 * @returns {Object|null} Current user or null
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};

/**
 * Save community signup data to Firestore
 * @param {Object} formData - Community signup form data
 * @returns {Promise<string>} Document ID
 */
export const saveCommunitySignup = async (formData) => {
  try {
    const signupRef = doc(db, "communitySignups", `${Date.now()}`);
    await setDoc(signupRef, {
      ...formData,
      timestamp: serverTimestamp(),
      status: "pending"
    });
    
    console.log("✓ Community signup saved:", formData.email);
    return signupRef.id;
  } catch (error) {
    console.error("✗ Error saving community signup:", error.message);
    throw error;
  }
};

/**
 * Save consultation request to Firestore
 * @param {Object} consultData - Consultation form data
 * @returns {Promise<string>} Document ID
 */
export const saveConsultationRequest = async (consultData) => {
  try {
    const consultRef = doc(db, "consultationRequests", `${Date.now()}`);
    await setDoc(consultRef, {
      ...consultData,
      timestamp: serverTimestamp(),
      status: "new"
    });
    
    console.log("✓ Consultation request saved:", consultData.email);
    return consultRef.id;
  } catch (error) {
    console.error("✗ Error saving consultation request:", error.message);
    throw error;
  }
};
