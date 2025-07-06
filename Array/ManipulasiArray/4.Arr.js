/*
Latihan Array Sederhana:
Buat sebuah array bernama daftarBelanja yang berisi 3 item (misalnya, "Apel", "Susu", "Roti").
Tampilkan seluruh isi daftarBelanja.
Tampilkan item kedua dalam daftar belanja (ingat, indeks dimulai dari 0!).
Tambahkan satu item baru ke daftarBelanja.
Ubah item pertama dalam daftar belanja.
Tampilkan panjang (jumlah item) dari daftarBelanja.
*/

// Manipulasi Elemen !

let daftarBelanja = ['sapu', 'mesin cuci', 'gayung']
console.log('seluruh isi belanjaan adalah ', daftarBelanja); // seluruh isi belanjaan
console.log('isi ke 2 dari belanjaan adalah ', daftarBelanja[1]); // isi ke 2 dari belanjaan

daftarBelanja.push('sabun')// Menambahkan elemen ke akhir array.
console.log();
console.log('Setelah melakukan push Menambahkan elemen ke akhir array', daftarBelanja);

daftarBelanja.unshift('pisau') // Menambahkan elemen di awal array.
console.log();
console.log('Setelah melakukan unshift Menambahkan elemen di awal array.', daftarBelanja);

daftarBelanja.pop() // Menghapus elemen akhir array.
console.log();
console.log('Setelah melakukan pop Menghapus elemen akhir array.', daftarBelanja);

daftarBelanja.shift() // Menghapus elemen pertama array.
console.log(); 
console.log('Setelah melakukan shift Menghapus elemen pertama array', daftarBelanja);

daftarBelanja.splice(2) // Menambah atau menghapus elemen diposisi tertentu
console.log();
console.log('Menambah atau menghapus elemen diposisi tertentu', daftarBelanja);