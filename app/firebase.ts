import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCMazf-erfEHzcLVKMowmfdYJobeVygT48",
	authDomain: "rishizest.firebaseapp.com",
	projectId: "rishizest",
	storageBucket: "rishizest.appspot.com",
	messagingSenderId: "877383117483",
	appId: "1:877383117483:web:6283b7d67524f1c41ea5ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
