// Latihan 1: Tampilkan Nama dan Indeks
// Diberikan array berikut:

// ❓ Soal:
// Gunakan forEach() untuk menampilkan teks seperti berikut:

// Gunakan forEach() kalau tidak perlu hasil akhir, hanya ingin melakukan sesuatu untuk setiap elemen
// (karena forEach() tidak mengembalikan array baru) undefined

//1.
const warna = ["Merah", "Biru", "Hijau", "Kuning"];

warna.forEach((warna, index) =>{
    console.log(`warna ke ${index+1} adalah warna ${warna}`);
})

//2.
let number = [3,6,9,12]
console.log();
number.forEach((nilai, index, allArr)=>{
    console.log(`${index+1}. angka : ${nilai}, di array : ${allArr}`);
})

//3. funtion terpisah
console.log();

function tampilkanWarna (warna, index){
    console.log(`warna ke ${index+1} adalah warna ${warna}`);
}
warna.forEach(tampilkanWarna)

