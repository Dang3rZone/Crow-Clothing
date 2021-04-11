import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBBwaPsh_oQVIRYiD5ELBSEI4v6WG5IG-s',
  authDomain: 'yourcrowswag.firebaseapp.com',
  projectId: 'yourcrowswag',
  storageBucket: 'yourcrowswag.appspot.com',
  messagingSenderId: '132362818732',
  appId: '1:132362818732:web:2001c75e1791718f887b09',
  measurementId: 'G-8XDJKFC1T5',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
