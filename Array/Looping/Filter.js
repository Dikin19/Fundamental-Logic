/*

array.filter((value, index, array) => {
  return kondisi;
});

Penjelasan Singkat:
filter() digunakan untuk menyaring elemen dalam array berdasarkan kondisi true atau false tergantung kebutuhan.
Hasilnya adalah array baru yang hanya berisi elemen yang lolos kondisi (return true)
Tidak mengubah array asli

| Parameter | Keterangan      |
| --------- | --------------- |
| `value`   | Elemen saat ini |
| `index`   | Indeks elemen   |
| `array`   | Array sumber    |

SIFAT FILTER
| Fitur               | `filter()`                  |
| ------------------- | --------------------------- |
| Return value        | ✅ Array baru                |
| Jumlah elemen hasil | ≤ jumlah elemen asli        |
| Kriteria            | Berdasarkan kondisi `true`  |
| Asli tetap          | ✅ Tidak mengubah array asli |

*/

const angka = [-1,2,-3,4,5,6,-7,8,-9,10]
const nama = ['dikin', 'adik', 'nata', 'sadiah', 'martin', 'agus']

// 1. Contoh hasil kasus 1 : Ambil angka genap
const angkaGenap = angka.filter((angka)=> angka % 2 == 0)
console.log('1. Contoh hasil kasus 1 : Ambil angka genap dari data', angka, 'menjadi :', angkaGenap);

// 2. Contoh hasil kasus 2 : Filter yang namanya > 4 huruf dari data
const longName = nama.filter((nama)=> nama.length > 4)
console.log();
console.log('2. Contoh hasil kasus 2 : Filter yang namanya > 4 huruf dari data', nama, 'menjadi :', longName);

// 3. Contoh hasil kasus 3 : Ambil data postif n > 0 dan negatif n < 0
const angkaNegatif = angka.filter((angka)=> angka < 0)
console.log();
console.log('3. Contoh hasil kasus 3 : Ambil data postif n > 0 dan negatif n < 0 dari data', angka, 'menjadi :',angkaNegatif);

// 4. Contoh hasil kasus 4 : Aambil hanya produk dengan stock > 0
const produk = [
    {nama: 'buku', stock: '10'},
    {nama: 'pulpen', stock: '0'},
    {nama: 'pensil', stock: '19'},
]

const available = produk.filter((produk)=> produk.stock > 0)
console.log();
console.log('4. Contoh hasil kasus 4 : Aambil hanya produk dengan stock > 0',produk);
console.log('menjadi :',available);

// 5. Contoh hasil kasus 5 : Gabung dengan map() ambil angka genap lalu kalikan 10
const hasil = angka
    .filter((angka)=> angka % 2 === 0)
    .map((angka)=> angka * 10)
    console.log();
    console.log('5. Contoh hasil kasus 5 : Gabung dengan map() ambil angka genap lalu kalikan 10 dari data',angka, 'menjadi :',hasil);

/*
🚫 Perbedaan filter() dengan map() dan forEach()
| Method      | Return Array? | Bisa Filter? | Cocok untuk                          |
| ----------- | ------------- | ------------ | ------------------------------------ |
| `filter()`  | ✅ Ya          | ✅ Ya         | Menyaring data (misalnya yang aktif) |
| `map()`     | ✅ Ya          | ❌ Tidak      | Mengubah format/data                 |
| `forEach()` | ❌ Tidak       | ❌ Tidak      | Menjalankan aksi (console.log dll)   |


✅ Tips agar Tidak Bingung saat Menghadapi Soal filter()
| Jenis Soal                                       | Pakai?        | Tips                                              |
| ------------------------------------------------ | ------------- | ------------------------------------------------- |
| "Ambil elemen yang memenuhi syarat"              | ✅ `filter()`  | Return kondisi `true/false`                       |
| "Buat array baru hanya dari data tertentu"       | ✅ `filter()`  | Pikirkan logika penyaring (misal: `nilai > 70`)   |
| "Ubah elemen jadi bentuk lain"                   | ❌ `map()`     | Gunakan `map`, bukan `filter`                     |
| "Tampilkan semua elemen satu per satu ke konsol" | ❌ `forEach()` | Gunakan `forEach()` untuk aksi, bukan penyaringan |

*/
// Ambil hanya siswa yang lulus (nilai ≥ 70).
const siswa = [
  { nama: 'Andi', nilai: 80 },
  { nama: 'Budi', nilai: 45 },
  { nama: 'Cici', nilai: 70 },
];

const siswaLulus = siswa.filter((siswa)=> siswa.nilai >= 70)
console.log();
console.log(siswaLulus);

