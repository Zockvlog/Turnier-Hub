import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "HIER_EURE_DATEN",
  authDomain: "HIER",
  projectId: "HIER",
  storageBucket: "HIER",
  messagingSenderId: "HIER",
  appId: "HIER"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);