/* Analogi Dunia Nyata

1. Tuliskan langkah-langkah detail untuk membuat segelas teh manis. Mulai dari menyiapkan bahan sampai teh siap diminum. Pastikan urutannya benar dan tidak ada langkah yang terlewat.

- bawa duit untuk beli teh dan gula diwarung
- ambil gelas
- ambil gula
- ambil air yang tersedia ditermos
- tuangkan gula 2 sendok
- letakan teh pada gelas
- isi gelas dengan air panas
- aduk sampai gula meleleh dan teh membaur
- lalu pisahka teh celup
- dan sajikan teh dengan tutup gelas dan piring untuk teh

2. Tuliskan langkah-langkah detail untuk mengikat tali sepatu.

- ambil sepatu yang ingin di ikat 
- lalu masukan tali pada lubang sepatu
- lalu setelah semua selesai ikat pita tali tersebut di akhir


*/

// Buat program JavaScript yang meminta usia Anda dan kemudian menampilkan pesan "Usia Anda adalah [usia] tahun."

let usia = 27 
console.log('Usia anda adalah', `${usia}`);

// Buat program JavaScript yang mendeklarasikan dua variabel hargaBarang dan jumlahBarang. Hitung total harga (hargaBarang * jumlahBarang) dan tampilkan hasilnya.

let hargaBarang = 75
let jumlahBarang = 2
let result = hargaBarang * jumlahBarang
console.log(result);

/*
Latihan if/else if/else:
Buat program yang meminta pengguna memasukkan nilai ujian (0-100).

Tampilkan:
"Sangat Baik!" jika nilai >= 90
"Baik!" jika nilai >= 70 dan < 90
"Cukup." jika nilai >= 50 dan < 70
"Perlu Belajar Lagi." jika nilai< 50*/

// Meminta input dari pengguna
let nilai = 77

// Cek rentang nilai menggunakan if / else if / else
if (nilai >= 90 && nilai <= 100) {
    console.log("Sangat Baik!");
} else if (nilai >= 70 && nilai < 90) {
    console.log("Baik!");
} else if (nilai >= 50 && nilai < 70) {
    console.log("Cukup.");
} else if (nilai >= 0 && nilai < 50) {
    console.log("Perlu Belajar Lagi.");
} else {
    console.log("Nilai tidak valid. Harus antara 0 dan 100.");
}

/*
Latihan && (AND):

Buat program yang meminta usia dan tinggi badan pengguna.

Tampilkan "Anda memenuhi syarat untuk wahana X!" hanya jika usia >= 10 DAN tinggi badan >= 120 cm.

Jika tidak, tampilkan "Maaf, Anda tidak memenuhi syarat."
*/

let usia1 = 27
let tinggi = 159

if (usia >= 10 && tinggi >= 160){
    console.log(`Anda memenuhi wahana X!`);
} else { console.log(`Maaf, Anda tidak memenuhi syarat`); }

/*
Latihan || (OR):
Buat program yang meminta pengguna memasukkan hari dalam seminggu.
Tampilkan "Hari libur!" jika hari adalah "Sabtu" ATAU "Minggu".
Jika tidak, tampilkan "Hari kerja."
*/

let weekends = ['sabtu', 'minggu']
let weekends1 = 'senin'

for (const weekend of weekends){
    if (weekend === 'sabtu' || weekend === 'minggu'){
        console.log(`libur!`);
    } else {console.log(`Hari kerja`);}
}

if (weekends1 === 'sabtu' || weekends1 === 'minggu'){
        console.log(`libur!`);
    } else {console.log(`Hari kerja`);}

/*
Latihan ! (NOT):

Buat program yang mendeklarasikan variabel isHujan = true;.

Gunakan operator ! untuk menampilkan "Bawa payung!" jika isHujan adalah true, dan "Tidak perlu payung!" jika isHujan adalah false. (Anda bisa mengubah nilai isHujan untuk menguji).
*/

let isHujan = true

if (!isHujan){
    console.log(`Tidak perlu bawa payung`);
} else {
    console.log(`Bawa Payung`);
}