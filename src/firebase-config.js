import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAEd2N1c-fpnq_e_F-hSGuXQefFnkpUIwc",
    authDomain: "minicode-test.firebaseapp.com",
    projectId: "minicode-test",
    storageBucket: "minicode-test.appspot.com",
    messagingSenderId: "1003176268161",
    appId: "1:1003176268161:web:cc41a65469c16955f95880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)