// SPILICE Menambah atau menghapus elemen diposisi tertentu
let buah = ['pisang', 'apel', 'mangga', 'jeruk']
buah.splice(1, 2) // menghapus elemen mulai dari index 1 total 2 elemen
console.log();
console.log('Menghapus elemen diposisi tertentu', buah);

let angka = [1,2,5]
angka.splice(2,0,3,4) // menambahkan elemen dari index 2 hapus 0 dan tambahkan sesudah index 2 elemen 3 dan 4
console.log();
console.log('menambahkan elemen dari index 2 hapus 0 dan tambahkan sesudah index 2 elemen 3 dan 4 dari data [1,2,5]', angka);

let warna = ['merah', 'kuning', 'oren']
warna.splice(1,1, 'coklat') // Mengganti elemen dari index 1 hapus elemen 1 ganti dengan element coklat
console.log();
console.log('Mengganti elemen dari index 1 hapus elemen 1 ganti dengan element coklat [merah, kuning, oren] menjadi :', warna);

let AngkaGenap = [2,4,6,8,10,16,20]
AngkaGenap.splice(4)// Menghapus semua elemen dari index tertentu hapus dari index (4) sampai akhir
console.log();
console.log('Menghapus semua elemen dari index tertentu 4 [2,4,6,8,10,16,20] menjadi', AngkaGenap);