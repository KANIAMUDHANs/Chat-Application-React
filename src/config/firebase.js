// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsGK01IkpAsFRnXtYt3tg9ODjOGPtL2Ec",
  authDomain: "chat-app-5c81b.firebaseapp.com",
  projectId: "chat-app-5c81b",
  storageBucket: "chat-app-5c81b.appspot.com",
  messagingSenderId: "806403768693",
  appId: "1:806403768693:web:164c308669132af5b5d33c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
