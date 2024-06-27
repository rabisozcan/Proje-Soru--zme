import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Firestore modülü eklendi

const firebaseConfig = {
  apiKey: "AIzaSyCMecx4cKaHXpP8R9n5soVLL0XY49mDjj0",
  authDomain: "projef-6784f.firebaseapp.com",
  projectId: "projef-6784f",
  storageBucket: "projef-6784f.appspot.com",
  messagingSenderId: "256258644371",
  appId: "1:256258644371:web:5f1830248e637ba0327066",
  measurementId: "G-QTW8BFHNVQ"
};

// Firebase uygulamasını başlatma kodum:
const app = initializeApp(firebaseConfig);

// Firebase Authentication modülünü baslatma ve dısa aktarma kodum
export const auth = getAuth(app);

// Firestore modülünü başlatma ve dısa aktarma kodum
export const db = getFirestore(app);

// Oturumu kapatma islevini dısa aktarma kodum
export const logout = async () => {
  try {
    await signOut(auth);
    console.log('User signed out successfully!');
  } catch (error) {
    console.error('Error signing out:', error.message);
  }
};
