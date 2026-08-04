import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCmI2a92n3W-_FR1rnXsMpYqCZMgdqlHx0",
    authDomain: "bookstoremanagementsyste-c007d.firebaseapp.com",
    projectId: "bookstoremanagementsyste-c007d",
    storageBucket: "bookstoremanagementsyste-c007d.firebasestorage.app",
    messagingSenderId: "734678788499",
    appId: "1:734678788499:web:3cc498b3c6ba7948542066"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };