import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD-yvWFn0dNJcGogWdX8WmtEdvNQQHo6QM",
    authDomain: "budget-app-7195f.firebaseapp.com",
    projectId: "budget-app-7195f",
    storageBucket: "budget-app-7195f.appspot.com",
    messagingSenderId: "925800432182",
    appId: "1:925800432182:web:106b3b0d7575ec25254e97",
    measurementId: "G-NB3KW37RRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider };