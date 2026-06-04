function kirimDonasi(){

const data = {
nama: document.getElementById("nama").value,
nominal: document.getElementById("nominal").value,
pesan: document.getElementById("pesan").value,
youtube: document.getElementById("youtube").value
};

localStorage.setItem(
"donasi",
JSON.stringify(data)
);

alert("Donasi berhasil disimpan!");

}

function lihatData(){

const data =
JSON.parse(
localStorage.getItem("donasi")
);

alert(
JSON.stringify(
data,
null,
2
)
);

}