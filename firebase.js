// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGYuI3yxJbUTc6T_0pm6WiEKZul11tXS0",
  authDomain: "suchartwork-1487382986748.firebaseapp.com",
  databaseURL: "https://suchartwork-1487382986748.firebaseio.com",
  projectId: "suchartwork-1487382986748",
  storageBucket: "suchartwork-1487382986748.firebasestorage.app",
  messagingSenderId: "353884592527",
  appId: "1:353884592527:web:91b013654be2037deb13fa"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
