import { db } from "../firebase.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const matchRef = doc(db, "turniere", "kicker");

// Spiel starten / setzen
document.getElementById("setGame").addEventListener("click", async () => {

  await setDoc(matchRef, {
    team1: "Max & Ali",
    team2: "Tom & Ben",
    winner: ""
  });

  alert("Spiel gesetzt!");
});

// Gewinner setzen
document.getElementById("setWinner").addEventListener("click", async () => {

  await setDoc(matchRef, {
    team1: "Max & Ali",
    team2: "Tom & Ben",
    winner: "Max & Ali"
  });

  alert("Gewinner gespeichert!");
});