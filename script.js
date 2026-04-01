function tambahTugas() {
    // Ambil input
    let input = document.getElementById("inputTugas");
    let tugas = input.value;

    if (tugas === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    // Buat elemen <li>
    let li = document.createElement("li");
    li.textContent = tugas;

    // Buat tombol hapus
    let btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.onclick = function () {
        li.remove();
    };

    // Masukkan tombol ke li
    li.appendChild(btnHapus);

    // Masukkan li ke ul
    document.getElementById("daftarTugas").appendChild(li);

    // Kosongkan input
    input.value = "";
}