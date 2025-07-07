/*
array.map((elemen, index, array) => {
  return hasil transformasi
});

- map() digunakan untuk mengubah setiap elemen dalam array menjadi bentuk baru
- Hasil akhirnya adalah array baru, dengan panjang yang sama seperti array asli
- TIDAK mengubah array asli (immutable)
*/

// buat data daftar murid yang sudah tersedia dan ubah setiap nama jadi huruf besar

//1.
const murid = ['dikin', 'nata', 'agus'] // soal 1

const upperCase = murid.map((nama) => nama.toUpperCase())
console.log(upperCase); // hasil 1

const upperCase1 = upperCase.map((nama1)=>{ // menggunakan data hasil 1
    return nama1.toLowerCase()
})
console.log();
console.log(upperCase1);

/*
array.map((value, index, array) => {
  return // nilai baru
});

| Parameter | Keterangan             |
| --------- | ---------------------- |
| `value`   | Nilai saat ini         |
| `index`   | Indeks elemen saat ini |
| `array`   | Array asal             |

*/


// Contoh kasus 1: kalikan seiap angka dengan 2
const angka = [20,70,19,77,10,]
const x2 = angka.map((number)=> number*2)
console.log();
console.log('1. hasil Contoh kasus 1: kalikan setiap data angka',angka,'dengan 2 :', x2);

// contoh kasus 2: Ambil panjang dari setiap string
const pajangString = murid.map((str)=> str.length)
console.log();
console.log('2. hasil contoh kasus 2: Ambil panjang dari setiap string data',murid, pajangString);

// contoh kasus 3:  Buat array object dari array angka
const object = angka.map((value, index) => {
    return { index: index, nilai: value}
})
console.log();
console.log('3. hasil contoh kasus 3:  Buat array object dari data array', angka, 'menjadi object :', object);

// contoh kasus 4: Format teks (template string)
const formatTeks = murid.map((value, index)=> `No.${index+1}: ${value}`)
console.log();
console.log('4. hasil contoh kasus 4: Format teks (template string) dari data', murid, 'menjadi :',formatTeks);

// contoh kasus 5: kombinasi dengan method lain (filter dan map)
const kombinasi = angka
    .filter((angka)=> angka%2 == 0)
    .map((angka)=> angka*2)
    // .sort((a,b)=> a-b)

    console.log();
    console.log('5. hasil contoh kasus 5: kombinasi dengan method lain (filter dan map) dari data',angka, 'menjadi :', kombinasi);

/*
git commit -m "Array-looping : Filter"
| Jenis Soal                                                    | Gunakan?    | Tips                                            |
| ------------------------------------------------------------- | ----------- | ----------------------------------------------- |
| "Buat array baru dari hasil perubahan tiap elemen"            | `map()`     | Tambahkan `return`, jangan lupa simpan hasilnya |
| "Ubah format setiap data di array (misal: string jadi objek)" | `map()`     | Return objek atau string baru sesuai kebutuhan  |
| "Cetak semua data ke konsol tanpa mengubah data"              | `forEach()` | Tidak perlu return apa pun                      |
| "Ambil sebagian data berdasarkan kondisi"                     | `filter()`  | Return true/false sesuai kondisi                |

*/