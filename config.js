import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDtlYXE01-lsTxRy0ZKZnbIgFVjimpZPS8",
    authDomain: "blog-app000.firebaseapp.com",
    projectId: "blog-app000",
    storageBucket: "blog-app000.appspot.com",
    messagingSenderId: "32137232054",
    appId: "1:32137232054:web:3c49a3e341014078b7b017"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);