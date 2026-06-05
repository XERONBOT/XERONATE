import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBIJWltMdeQb4zp1c71146hHfv0SFUTcSg",
  authDomain: "xeronate.firebaseapp.com",
  projectId: "xeronate",
  storageBucket: "xeronate.firebasestorage.app",
  messagingSenderId: "82543259196",
  appId: "1:82543259196:web:7c819c8b74e1931dd35d39",
  measurementId: "G-RJTYMW9TD0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.kirimDonasi = async function () {

  const data = {
    nama: document.getElementById("nama").value,
    nominal: document.getElementById("nominal").value,
    pesan: document.getElementById("pesan").value,
    youtube: document.getElementById("youtube").value,
    waktu: new Date().toISOString()
  };

  try {

    await addDoc(collection(db, "donasi"), data);

    alert("Donasi berhasil disimpan!");

  } catch (e) {

    alert("Error: " + e.message);

  }
};

window.lihatData = function () {

  alert("Data tersimpan di Firestore");
