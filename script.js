// ==================================
// DATA PEMINJAM
// ==================================

let dataPeminjam = [
    {
        nama: "Andi Saputra",
        nik: "7201011205010001",
        telepon: "081234567890",
        alamat: "Palu"
    },
    {
        nama: "Budi Santoso",
        nik: "7201011205010002",
        telepon: "082345678901",
        alamat: "Sigi"
    }
];

// ==================================
// MENAMPILKAN TABEL PEMINJAM
// ==================================

function tampilkanPeminjam(data = dataPeminjam) {
    const tabel = document.getElementById("tabelPeminjam");

    if (!tabel) return;

    tabel.innerHTML = "";

    data.forEach((peminjam, index) => {
        const baris = document.createElement("tr");

        [index + 1, peminjam.nama, peminjam.nik,
         peminjam.telepon, peminjam.alamat].forEach(nilai => {
            const kolom = document.createElement("td");
            kolom.textContent = nilai;
            baris.appendChild(kolom);
        });

        const aksi = document.createElement("td");
        const tombol = document.createElement("button");

        tombol.textContent = "Hapus";

        tombol.addEventListener("click", () => {
            const yakin = confirm("Hapus data peminjam ini?");

            if (yakin) {
                dataPeminjam = dataPeminjam.filter(
                    item => item.nik !== peminjam.nik
                );

                tampilkanPeminjam();
            }
        });

        aksi.appendChild(tombol);
        baris.appendChild(aksi);
        tabel.appendChild(baris);
    });
}

// ==================================
// MENAMBAH DATA PEMINJAM
// ==================================

const formPeminjam = document.getElementById("formPeminjam");

if (formPeminjam) {
    tampilkanPeminjam();

    formPeminjam.addEventListener("submit", function(event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const nik = document.getElementById("nik").value.trim();
        const telepon = document.getElementById("telepon").value.trim();
        const alamat = document.getElementById("alamat").value.trim();

        if (!/^\d{16}$/.test(nik)) {
            alert("NIK harus terdiri dari 16 angka!");
            return;
        }

        if (dataPeminjam.some(item => item.nik === nik)) {
            alert("NIK sudah terdaftar!");
            return;
        }

        dataPeminjam.push({
            nama: nama,
            nik: nik,
            telepon: telepon,
            alamat: alamat
        });

        tampilkanPeminjam();
        formPeminjam.reset();

        alert("Data peminjam berhasil ditambahkan!");
    });
}

// ==================================
// PENCARIAN DATA PEMINJAM
// ==================================

const cariPeminjam = document.getElementById("cariPeminjam");

if (cariPeminjam) {
    cariPeminjam.addEventListener("input", function() {
        const kataKunci = this.value.toLowerCase();

        const hasil = dataPeminjam.filter(item =>
            item.nama.toLowerCase().includes(kataKunci)
        );

        tampilkanPeminjam(hasil);
    });
}

// ==================================
// PENGAJUAN PINJAMAN
// ==================================

let dataPinjaman = [];

const formPengajuan = document.getElementById("formPengajuan");

if (formPengajuan) {
    formPengajuan.addEventListener("submit", function(event) {
        event.preventDefault();

        const nama = document.getElementById("namaPengaju").value.trim();
        const jumlah = Number(document.getElementById("jumlahPinjaman").value);
        const tenor = Number(document.getElementById("tenor").value);
        const tujuan = document.getElementById("tujuan").value.trim();

        if (!Number.isFinite(jumlah) || jumlah < 100000) {
            alert("Jumlah pinjaman minimal Rp100.000!");
            return;
        }

        dataPinjaman.push({
            nama: nama,
            jumlah: jumlah,
            tenor: tenor,
            tujuan: tujuan,
            status: "Menunggu"
        });

        formPengajuan.reset();

        alert("Pengajuan berhasil dikirim! Status: Menunggu.");
    });
}

// ==================================
// SIMULASI CICILAN
// ==================================

function hitungCicilan() {
    const jumlah = Number(
        document.getElementById("jumlahPinjaman")?.value
    );

    const tenor = Number(
        document.getElementById("tenor")?.value
    );

    const hasil = document.getElementById("hasilCicilan");

    if (!hasil) return;

    if (jumlah > 0 && tenor > 0) {
        // Simulasi tanpa bunga
        const cicilan = jumlah / tenor;

        hasil.textContent =
            "Estimasi cicilan per bulan: Rp" +
            Math.ceil(cicilan).toLocaleString("id-ID");
    } else {
        hasil.textContent = "";
    }
}

// ==================================
// MENAMPILKAN DATA PINJAMAN
// ==================================

function tampilkanPinjaman() {
    const tabel = document.getElementById("tabelPinjaman");

    if (!tabel) return;

    dataPinjaman.forEach((pinjaman, index) => {
        const baris = document.createElement("tr");

        const nilai = [
            index + 4,
            pinjaman.nama,
            "Rp" + pinjaman.jumlah.toLocaleString("id-ID"),
            pinjaman.tenor + " Bulan",
            pinjaman.status
        ];

        nilai.forEach(item => {
            const kolom = document.createElement("td");
            kolom.textContent = item;
            baris.appendChild(kolom);
        });

        tabel.appendChild(baris);
    });
}

tampilkanPinjaman();