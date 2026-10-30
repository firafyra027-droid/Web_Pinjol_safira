
let cicilan = 0;
let dataValid = false;

// FUNGSI MASUK WEBSITE
function masukWebsite() {

    document.getElementById("halamanAwal")
    .style.display = "none";

    document.getElementById("halamanUtama")
    .style.display = "block";

}

// FUNGSI MENGHITUNG PINJAMAN
function hitungPinjaman() {

    let nama = document.getElementById("nama").value;
    let jumlah = Number(document.getElementById("jumlah").value);
    let waktu = Number(document.getElementById("waktu").value);

    if (nama.trim() === "" || jumlah <= 0) {
        alert("Silakan isi nama dan jumlah pinjaman!");
        dataValid = false;
        cicilan = 0;
        return;
    }

    // Bunga simulasi 2% per bulan
    let bunga = jumlah * 0.02 * waktu;

    let total = jumlah + bunga;

    cicilan = total / waktu;
    dataValid = true;

    document.getElementById("hasil").innerHTML =

        "Nama: " + nama + "<br>" +
        "Jumlah Pinjaman: Rp " +
        jumlah.toLocaleString("id-ID") + "<br>" +

        "Jangka Waktu: " + waktu + " Bulan<br>" +

        "Total Pembayaran: Rp " +
        Math.round(total).toLocaleString("id-ID") + "<br>" +

        "Cicilan per Bulan: Rp " +
        Math.round(cicilan).toLocaleString("id-ID");

}

// FUNGSI PENGAJUAN PINJAMAN
function ajukanPinjaman() {

    let nama = document.getElementById("nama").value;

    if (!dataValid || nama.trim() === "") {

        alert("Silakan hitung pinjaman terlebih dahulu!");

    } else {

        alert(
            "Pengajuan simulasi berhasil dibuat!\n" +
            "Nama: " + nama + "\n" +
            "Cicilan per bulan: Rp " +
            Math.round(cicilan).toLocaleString("id-ID")
        );

    }

}
