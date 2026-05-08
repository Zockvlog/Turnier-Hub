import { db } from "../firebase.js";

import {
  doc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const matchRef = doc(db, "turniere", "kicker");

onSnapshot(matchRef, (snap) => {

  const data = snap.data();

  if (!data) return;

  document.getElementById("output").innerHTML = `
    <h2>${data.team1} vs ${data.team2}</h2>
    <h3>Gewinner: ${data.winner || "Noch kein Gewinner"}</h3>
  `;

});