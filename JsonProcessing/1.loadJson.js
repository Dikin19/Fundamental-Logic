import fs from 'fs/promises';

// task 1
export const loadJson = async () => {
    try {
        
        const jsonString = await fs.readFile('airportByICAOCode.json', 'utf-8');// Membaca konten file 'airportByICAOCode.json' sebagai string dengan encoding UTF-8.
        
        const airportDictionary = JSON.parse(jsonString);// Mengurai (parse) string JSON menjadi objek JavaScript (dictionary/object).

        let dataArr = Object.values(airportDictionary); // Mengubah nilai-nilai (value) dari objek (dictionary) menjadi sebuah array. // Setiap 'value' di sini adalah objek bandara.

        // Ini adalah bagian untuk memenuhi kebutuhan "mengambil 5 data saja".
        // Metode .slice(0, 5) akan mengambil elemen dari indeks 0 hingga sebelum indeks 5 (yaitu, 5 elemen pertama).
        dataArr = dataArr.slice(0, 3); // element 1-8 dan index 0-7
        // console.log(dataArr);
        return dataArr;

    } catch (error) {
        console.error('Error gets data because :', error.message);
        // Mengembalikan array kosong agar bagian kode selanjutnya tidak mengalami error jika data gagal dimuat.
        return [];
    }
};

console.log(await loadJson()); 

// Jika Anda berada di lingkungan CommonJS,
// Anda tidak akan menggunakan 'import' seperti di atas,
// melainkan 'const fs = require('fs/promises');'

// const fs = require('fs/promises'); // Contoh CommonJS import

// const loadJson = async () => { /* ... sama seperti sebelumnya ... */ };

// module.exports = {
//     loadJson: loadJson // Mengekspor loadJson sebagai properti dari objek
// };

// Atau shortcut-nya:
// exports.loadJson = loadJson;