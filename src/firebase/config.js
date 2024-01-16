
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
   apiKey: "AIzaSyD9ut-iXNpOoq7K8UvX1PMoCasIdDC0iww",
   authDomain: "coder-nny-store.firebaseapp.com",
   projectId: "coder-nny-store",
   storageBucket: "coder-nny-store.appspot.com",
   messagingSenderId: "866800684701",
   appId: "1:866800684701:web:4e666d3ff09c5ded358e74"
 };

// // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore( app )



 