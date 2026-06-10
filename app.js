alert("APP JS BERJALAN");
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

const nama =
document.getElementById("nama").value;

const nominal =
document.getElementById("nominal").value;

const pesan =
document.getElementById("pesan").value;

const youtube =
document.getElementById("youtube").value;

if(
youtube &&
Number(nominal) < 10000
){
alert(
"Minimal donasi Media Share adalah Rp10.000"
);
return;
}

const data = {
nama,
nominal,
pesan,
youtube,
waktu: new Date().toISOString()
};

try {
  
const system =
await getDoc(
doc(db,"settings","system")
);

if(system.data().pauseDonasi){

alert(
"Donasi sedang ditutup sementara"
);

return;

}
  
await addDoc(
  collection(db, "donasi"),
  data
);

alert("Donasi berhasil disimpan!");

} catch (e) {

alert("Error: " + e.message);

}

};

window.lihatData = function () {

  alert("Data tersimpan di Firestore");

};
