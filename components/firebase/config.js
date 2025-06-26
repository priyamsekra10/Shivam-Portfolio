import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyByzgcbU42FAm6HD4POES0Q-XAWYfFwJH0",
    authDomain: "personalweb-f71ee.firebaseapp.com",
    projectId: "personalweb-f71ee",
    storageBucket: "personalweb-f71ee.appspot.com",
    messagingSenderId: "1090919259410",
    appId: "1:1090919259410:web:cad0102849e4264ae767cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };