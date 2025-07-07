/*
array.reduce((accumulator, currentValue, index, array) => {
  return nilaiBaruAccumulator;
}, nilaiAwalAccumulator);

✅ Fungsi utama:
Mengubah seluruh isi array menjadi satu nilai akhir
Contoh: penjumlahan, perkalian, rata-rata, string gabungan, atau bahkan objek baru.

Parameter dalam reduce()

| Parameter            | Keterangan                                                            |
| -------------------- | --------------------------------------------------------------------- |
| `accumulator`        | Nilai hasil sementara yang dibawa ke langkah berikutnya               |
| `currentValue`       | Elemen array saat ini yang sedang diproses                            |
| `index` *(opsional)* | Indeks dari elemen saat ini                                           |
| `array` *(opsional)* | Array asli yang sedang diproses                                       |
| Nilai Awal           | Nilai awal `accumulator`, wajib diberikan agar hasilnya aman & stabil |

🔁 accumulator (penampung/penjumlahan sementara)
Artinya: Nilai yang menampung hasil penghitungan dari setiap iterasi.
Fungsinya: Menyimpan hasil sementara dari proses reduce. Nilai ini akan dibawa ke iterasi berikutnya.
Contoh sederhana: Bisa diibaratkan seperti tempat menabung, setiap iterasi menambahkan uang ke tabungan itu.

🔁 currentValue (nilai saat ini / elemen yang sedang diproses)
Artinya: Nilai elemen array yang sedang diproses pada saat itu.
Fungsinya: Ini adalah nilai dari elemen array yang sedang diakses dalam iterasi sekarang.
*/

const angka = [1, 2, 3, 4];
const total1 = angka.reduce((acc, curr) => acc + curr, 0);
console.log(total1); // 10
/*
Prosesnya:

Awal: acc = 0 (nilai awal), curr = 1 → acc + curr = 1

Lalu: acc = 1, curr = 2 → acc + curr = 3

Lalu: acc = 3, curr = 3 → acc + curr = 6

Lalu: acc = 6, curr = 4 → acc + curr = 10 (hasil akhir)
*/

const number = [10, 20, 30]

// 1. Contoh hasil kasus 1 : Penjumlahan angka
const penjumlahan = number.reduce((acc, curr)=> acc + curr, 0)
console.log();
console.log('1. Contoh hasil kasus 1 : Penjumlahan angka',number, 'ditotal menjadi :', penjumlahan);

// 2. Contoh hasil kasus 2 : Menghitung rata-rata
const total = number.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)
const nilaiRataRata = total/number.length
console.log();
console.log('2. Contoh hasil kasus 2 : Menghitung rata-rata dari', number, 'menjadi :', nilaiRataRata );

// 3. Contoh hasil kasus 3 : Meggabungkan string
const word = ['Belajar', 'JS', 'itu', 'asyik']
const statment = word.reduce((acc, curr)=> acc + ' ' + curr, '')
console.log();
console.log('3. Contoh hasil kasus 3 : Meggabungkan string dari data',word,'menjadi :');
console.log(statment.trim());
// Mari kita lihat bagaimana proses reduce() bekerja:
/*
| Iterasi | acc (hasil sebelumnya) | curr (elemen saat ini) | Hasil (`acc + ' ' + curr`) |
| ------- | ---------------------- | ---------------------- | -------------------------- |
| 1       | `''` (kosong)          | `'Belajar'`            | `' Belajar'`               |
| 2       | `' Belajar'`           | `'JS'`                 | `' Belajar JS'`            |
| 3       | `' Belajar JS'`        | `'itu'`                | `' Belajar JS itu'`        |
| 4       | `' Belajar JS itu'`    | `'asyik'`              | `' Belajar JS itu asyik'`  |

console.log(kalimat.trim());
Karena kita memulai dengan string kosong (''), hasil awalnya akan ada spasi di awal: ' Belajar JS itu asyik'.

Fungsi .trim() digunakan untuk menghapus spasi di awal dan akhir string.
*/

// 4. Contoh kasus hasil 4 : Menyusun object frekuensi (Jumlah kemunculan) 
const buah = ['apel', 'jeruk', 'apel', 'pisang', 'jeruk', 'apel'];
const jumlahKemunculan = buah.reduce((penampung, elemenSekarang)=>{
    // console.log();
    // console.log('penampung',penampung);
    // console.log();
    // console.log(elemenSekarang);
                                // jika undefine berarti 0 + 1 tulis apel = 1
                                // jika apel 1 berarti apel + 1 = 2
                                // dan seterusnya
                                // jika undefined tulis nama buah lalu 0 + 1  
    penampung[elemenSekarang] = (penampung[elemenSekarang] || 0) + 1; // Manipulasi object jika penampung[apel] belum ada undefined = 0+1
    // penampung[apel] = 1
    // penampung {apel : 1}
    // jika element sudah tidak undefined gunakan data yang sudah dicatat lalu tambah 1
    return penampung
}, {})
console.log();
console.log('4. Contoh kasus hasil 4 : Menyusun object frekuensi (Jumlah kemunculan) dari data',buah, 'menjadi :');
console.log(jumlahKemunculan);

// 5. Contoh kasus hasil 5 : Mengubah Array ke object berdasarkan id
const family = [
    {id: 1, nama: 'Martin'},
    {id: 2, nama: 'Sadiah'},
    {id: 3, nama: 'Agus'},
    {id: 4, nama: 'Nata'},
    {id: 5, nama: 'Dikin'},
]

const hasil = family.reduce((penampungObj, element )=>{
    penampungObj[element.id]= element.nama
    return penampungObj
}, {}) // '1': 'Martin',
console.log();
console.log('5. Contoh kasus hasil 5 : Mengubah Array ke object berdasarkan id dari data', family);
console.log(hasil);

const hasil1 = family.reduce((penampungObj, element )=>{
penampungObj.set(element.id, element.nama)
    return penampungObj
}, new Map()) // 1: 'Martin' key tetapp number jika menggunakan set
console.log();
console.log('6. Contoh kasus hasil1 6 : Mengubah Array ke object berdasarkan id dari data', family);
console.log(hasil1);

// 6. Contoh kasus hasil 6 : Menggabungkan array didalam array
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((penampung, element) => penampung.concat(element), []);
console.log();
console.log('6. Contoh kasus hasil 6 : Menggabungkan array didalam array dari data',nested, 'menjadi' );
console.log(flat); // [1, 2, 3, 4, 5]
