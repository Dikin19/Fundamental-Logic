/*
Latihan while Loop Sederhana:
1. Buat program yang meminta pengguna untuk memasukkan sebuah kata sandi. Terus minta sampai kata sandinya adalah "rahasia". (Ini akan terus berulang sampai kondisi "kata sandi adalah rahasia" terpenuhi).
2. Buat program yang menampilkan angka dari 1 sampai 5 menggunakan while loop. (Bandingkan dengan for loop).
4. Jelaskan perbedaan antara while dan do-while loop. Kapan Anda akan menggunakan do-while?
5. Buat contoh sederhana do-while loop yang menampilkan angka dari 1 sampai 3.

*/

//1.
let input = "rahasia" // right
// let input = ""

while(input !== "rahasia"){
    console.log(`masukan kata sandi`);
}

//2.

    const test = () => {
    let i = 0
    while(i < 5){
        return `test`
        }
    }

   console.log(test()); 

    //3

    let angka = 5;

    while (angka < 3) {
        console.log('test',angka);
        angka++;
    }

    //4
    let angka1 = 6;

    do {
        console.log(angka1);
        angka1++;
    } while (angka < 3);

