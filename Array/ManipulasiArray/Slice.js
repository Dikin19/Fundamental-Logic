// Untuk menyalin potongan array baru atau copy array tersebut

let buah = [ 'mangga', 'pisang', 'salak', 'apel', 'durian']
let newBuah = buah.slice(1,4) // mengambil potongan data baru dari index 1 sampai data sebelum index 4
console.log();
console.log(`mengambil potongan data baru dari index 1 sampai data sebelum index 4 dari`, buah, 'menjadi :', newBuah);


let tanpaParameter = buah.slice() // tanpa parameter akan menghasilkan data baru baru yang menyalin sama persis data lama
console.log();
console.log('Tanpa parameter akan menghasilkan data baru baru yang menyalin sama persis data lama :', buah, 'Menajadi :', tanpaParameter);

let indexNegatif = buah.slice(-3) // Menggunakan index negatif -3 berarti mulai dari 3 elemen terakhir
// sama seperti slice(buah.lenght -3)
console.log();
console.log('Menggunakan index negatif -3 berarti mulai dari 3 elemen terakhir :', buah, 'Menjadi', indexNegatif);