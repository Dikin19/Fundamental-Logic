// task 2
/**
 * Fungsi untuk mengelompokkan array objek bandara berdasarkan zona waktu (properti 'tz').
 * @param {Array<Object>} airports - Array objek bandara yang akan dikelompokkan.
 * @returns {Object} Sebuah objek di mana kuncinya adalah zona waktu (string)
 * dan nilainya adalah array dari bandara-bandara yang termasuk dalam zona waktu tersebut.
*/

import { loadJson } from "./1.loadJson.js";

const groupByTz = (airports) => {
    // Membuat objek kosong untuk menyimpan bandara yang sudah dikelompokkan.
    // Kunci objek ini akan menjadi nama zona waktu, dan nilainya akan menjadi array bandara.
    const groupedAirports = {}; // Menggunakan 'const' karena objek ini sendiri tidak akan ditugaskan ulang.
    
    
    for (const airport of airports) {
        
        const timeZone = airport.tz; // Mengambil nilai zona waktu (timeZone) dari properti 'tz' pada objek bandara saat ini.
        
        // console.log(timeZone);
        
        
        if (!groupedAirports[timeZone]) { // Memeriksa apakah zona waktu (timeZone) sudah ada sebagai kunci di objek 'groupedAirports'.
            
            groupedAirports[timeZone] = [];// Jika belum ada, inisialisasi kunci tersebut dengan sebuah array kosong. // Ini akan menjadi array tempat kita menyimpan bandara-bandara untuk zona waktu ini.
        }
        
        
        groupedAirports[timeZone].push(airport);// Menambahkan objek bandara saat ini ke dalam array yang sesuai dengan zona waktunya.
    }
    
    return groupedAirports;
};

// cara 1 dan 2
const airports = await loadJson()
console.log();
console.log('======');
console.log('LoadJson after slice');
console.log();
console.log(airports);
console.log();
console.log('======');
console.log('groupByTz');
console.log();
console.log(groupByTz(airports));
// console.log(JSON.stringify(groupByTz(airports), null,2));
// JSON.stringify digunakan untuk mengubah objek JavaScript menjadi string JSON yang diformat.
// 'null, 2' berfungsi untuk "pretty print" (membuat output JSON lebih mudah dibaca dengan indentasi 2 spasi).



// cara 2
// --- Blok Eksekusi Utama ---
// Menggunakan IIFE (Immediately Invoked Function Expression) asinkron.
// bentuk awal (async () => { ... })();
// Pola ini memungkinkan kita menggunakan 'await' di level teratas kode,
// dan membantu memastikan kompatibilitas di berbagai versi Node.js.

// (async () => {
    
//     const airports = await loadJson(); // salah satu alasan menggunakan ini supaya bisa menggunakan await didalam function karena
//     // Secara tradisional (sebelum fitur "Top-Level Await" diperkenalkan di beberapa lingkungan seperti Node.js 14.8+ atau modul ES6 di browser), Anda tidak bisa menggunakan kata kunci await langsung di luar fungsi yang dideklarasikan sebagai async.
    
//     if (airports && airports.length > 0) {
        
//         console.log(`Berhasil memuat dan akan memproses ${airports.length} bandara.`); // Memberi tahu berapa banyak bandara yang berhasil dimuat dan akan diproses.

//         const groupedByTimezone = groupByTz(airports);

//         console.log("\nBandara dikelompokkan berdasarkan Zona Waktu:");
//         console.log(JSON.stringify(groupedByTimezone, null, 2));

//     } else {
//         console.log("Tidak ada data bandara yang dimuat atau terjadi kesalahan");
//     }
// })();
