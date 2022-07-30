import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
// import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBuXe3cDpZAg-vBK2926Cjd7_u7AmOFSVw",
  authDomain: "fir-email-auth-831b3.firebaseapp.com",
  projectId: "fir-email-auth-831b3",
  storageBucket: "fir-email-auth-831b3.appspot.com",
  messagingSenderId: "757966034014",
  appId: "1:757966034014:web:31f8183072f146e6f410cf"
});

// Initialize Firebase
const auth = getAuth(firebaseApp);

// const app = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export {auth} ;
export default db