import fs from 'fs/promises';

// task 1
const loadJson = async () => {
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


// task 2
/**
 * Fungsi untuk mengelompokkan array objek bandara berdasarkan zona waktu (properti 'tz').
 * @param {Array<Object>} airports - Array objek bandara yang akan dikelompokkan.
 * @returns {Object} Sebuah objek di mana kuncinya adalah zona waktu (string)
 * dan nilainya adalah array dari bandara-bandara yang termasuk dalam zona waktu tersebut.
*/

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



/* task 3
task 3
[
  {
    icao: '00AK',
    iata: '',
    name: 'Lowell Field',
    city: 'Anchor Point',
    state: 'Alaska',
    country: 'US',
    elevation: 450,
    lat: 59.94919968,
    lon: -151.695999146,
    tz: 'America/Anchorage'
  },
  {
    icao: '00AL',
    iata: '',
    name: 'Epps Airpark',
    city: 'Harvest',
    state: 'Alabama',
    country: 'US',
    elevation: 820,
    lat: 34.8647994995,
    lon: -86.7703018188,
    tz: 'America/Chicago'
  },
  {
    icao: '00AZ',
    iata: '',
    name: 'Cordes Airport',
    city: 'Cordes',
    state: 'Arizona',
    country: 'US',
    elevation: 3810,
    lat: 34.3055992126,
    lon: -112.1650009155,
    tz: 'America/Phoenix'
  }
]

*/
const airportsArray = Object.entries(airports).map(([icao, a]) => ({ // Object.entries() mengubah objek ke array berisi [key, value]
  icao_code: a.icao,
  active: a.active ?? true,
  name: a.name,
  city: a.city,
  state: a.state ?? '',
  country: a.country,
  elevation: a.elevation,
  latitude: a.lat,
  longitude: a.lon,
  tz: a.tz,
  tz_offset: getTimezoneOffset(a.tz),
}));
console.log();
console.log('======');
console.log('MergedAirport');
console.log();
console.log(airportsArray);


function getTimezoneOffset(tz) { // Menghitung perbedaan jam antara zona waktu tertentu (tz) dan waktu lokal mesin (misalnya, waktu di Jakarta vs UTC).
  try {
    const now = new Date(); // waktu saat ini

    const options = { //  Buat format tampilan jam, seperti "MM/DD/YYYY HH:MM:SS" di zona waktu yang diberikan.
      timeZone: tz,
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    const local = new Intl.DateTimeFormat('en-US', options).format(now); // 06/16/2025, 14:00:00 (di Asia/Jakarta)
    const [mm, dd, yyyy, hh, min, ss] = local.match(/\d+/g).map(Number);
    /*
    Pecah tanggal-jam ke angka:
    \d+ = cari angka (digit)
    .match(/\d+/g) hasilnya array: ['06', '16', '2025', '14', '00', '00']
    */

    // Regex /\d+/g artinya:
    // \d = digit (angka 0-9)
    // + = satu atau lebih digit
    // g = global (cari semua kecocokan, bukan hanya yang pertama)

    const utcTime = Date.UTC(yyyy, mm - 1, dd, hh, min, ss);
    /*
    Parameter	Keterangan	Contoh
    yyyy	Tahun (misalnya 2025)	2025
    mm - 1	Bulan (dimulai dari 0, jadi Januari = 0, Februari = 1, dst)	jika mm = 6 (Juni), maka mm - 1 = 5
    dd	Tanggal (1–31)	16
    hh	Jam (0–23, format 24 jam)	13
    min	Menit (0–59)	45
    ss	Detik (0–59)	30
    */
    const localTime = now.getTime();

    /*
    Contoh visual:
    const now = new Date();         // Misalnya: Mon Jun 16 2025 14:00:00 GMT+0700 (WIB)
    console.log(now.toString());    // output waktu lokal
    console.log(now.getTime());     // output timestamp milidetik

    🔄 Kebalikan getTime()
    Jika kamu punya timestamp dan ingin konversi balik ke objek Date:
    const date = new Date(localTime); // localTime adalah milidetik
    console.log(date.toString());     // kembali jadi bentuk tanggal yang bisa dibaca
    */

    const offsetInMinutes = (utcTime - localTime) / (1000 * 60);
    /*
    Contoh:
    utcTime = 1718505600000 (setara UTC: 2024-06-16 00:00:00)
    localTime = 1718520000000 (setara WIB: 2024-06-16 04:00:00)

    Maka:
    offsetInMinutes = (1718505600000 - 1718520000000) / 60000
                    = -1440 / 60
                    = -240 menit
    Hasilnya: -240 menit (artinya localTime lebih depan 240 menit dari UTC).
    */
    
    return Math.round(offsetInMinutes / 60);
    /*
    
    Baris Kedua: Konversi Menit ke Jam
    return Math.round(offsetInMinutes / 60);
    offsetInMinutes / 60 = konversi menit ke jam
    Math.round() = pembulatan ke angka bulat terdekat.

    Dari contoh sebelumnya:
    offsetInMinutes = -240
    offsetInHours = Math.round(-240 / 60) = -4
    Berarti offset timezone kamu adalah UTC+7, karena localTime lebih cepat dari UTC sebesar 7 jam → maka offset-nya negatif dari sudut pandang utcTime - localTime.

    */
  } catch (e) {
    console.error(`Failed for timezone: ${tz}`, e);
    return null;
  }
}