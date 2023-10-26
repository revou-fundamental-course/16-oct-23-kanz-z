function pesanSambutan() {
    var namaInput = document.getElementById("nama").value;
    var pesanSambutan = document.getElementById("pesan-sambutan");

    if (namaInput.trim() === "") {
        pesanSambutan.innerHTML = "Halo, Selamat datang di website saya";
    } else {
        pesanSambutan.innerHTML = "Halo <span style='font-weight: bold;'>" + namaInput + "</span>, Selamat datang di website saya";
    }

    // menyembunyikan kotak input dan tombol Submit
    var namaContainer = document.getElementById("nama-container");
    namaContainer.style.display = "none";

    // menampilkan pesan sambutan
    pesanSambutan.style.display = "block";
}
