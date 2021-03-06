import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSANGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true });

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = async (fn) => {
  await auth.signInWithPopup(provider);
  fn();
};

export const signOut = () => auth.signOut();

window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reference to the place in the database where a user profile might be
  const useRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await useRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await useRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return getUserDocument(user.uid);
}

async function getUserDocument(uid) {
  if (!uid) return;
  try {
    const userDocument = await firestore.collection('users').doc(uid).get();
    return {
      uid,
      ...userDocument.data()
    }
  } catch (error) {
    console.log('Error fetching user', error.message);
  }

}

export default firebase;