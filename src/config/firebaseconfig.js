import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDheak-UyhF5u4j7cy_WV96coVFpKvMKio",
  authDomain: "todo-app-firebase-using-react.firebaseapp.com",
  projectId: "todo-app-firebase-using-react",
  storageBucket: "todo-app-firebase-using-react.appspot.com",
  messagingSenderId: "258705195669",
  appId: "1:258705195669:web:db95865e2caddcc7b6d19c",
  measurementId: "G-69W7JT94PG"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);