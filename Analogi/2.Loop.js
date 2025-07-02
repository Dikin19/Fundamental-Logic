/*
Latihan for Loop Sederhana:

1. Buat program yang menampilkan angka dari 1 sampai 5 menggunakan for loop.

2. Buat program yang menampilkan "Hello, World!" sebanyak 3 kali menggunakan for loop.

3. Buat program yang menampilkan angka genap dari 2 sampai 10 menggunakan for loop.

Variasi for Loop:

4. Buat program yang menampilkan angka dari 10 mundur ke 1.

5. Buat program yang meminta pengguna memasukkan sebuah angka n. Kemudian, tampilkan "Saya suka pemrograman!" sebanyak n kali.
*/

//1
let angka = [1,2,3,4,5]

for (let i=0; i<angka.length; i++){
    console.log(angka[i]);
}

for (let i = angka.length-1 ; i >= 0 ; i--){
    console.log(angka[i]); // 0 tidak dihitung karena index 0-4 sama dengan lenght 1-5 dan index 0 sama dengan length 1
}

2
for (let i = 0; i < 3 ; i++){
    console.log(`Hello world`);
}

//3
for (let i = 2; i <= 10 ; i+=2){
    console.log(`angka genap`, `${[i]}`);
}

//4
let angka1 = [1,2,3,4,5,6,7,8,9,10]
for (let i = angka1.length-1; i >= 0; i-- ){
    console.log(`${angka1[i]}`); // 0 tidak dihitung karena index 0-9 sama dengan lenght 1-10 dan index 0 sama dengan length 1
}

//5
let n = 7

for (let i = 0; i < 7; i++){
    console.log(`Saya suka pemrograman!`);
}