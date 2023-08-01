
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAjn9zhdvhmXyF5YNmGfZclzGQ-SBhMLwo",
  authDomain: "vynmyke.firebaseapp.com",
  projectId: "vynmyke",
  storageBucket: "vynmyke.appspot.com",
  messagingSenderId: "105846245478",
  appId: "1:105846245478:web:849fc25eb5fe5f98d345a7",
  measurementId: "G-7QVVNPNMBN"
};


export const app = initializeApp(firebaseConfig);