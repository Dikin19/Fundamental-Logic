// ada 2 cara untuk mengambil data json
//Cara 1. bisa digunakan untuk project skala kecil tanpa promise dan async await.
/*
const fs = require ('fs')

const rawData = fs.readFileSync('Ascending.json', 'utf8')

const data = JSON.parse(rawData)

console.log('isi json :', data);

const angkaTerurut = data.numbers // [ 3,  5,  7,  9, 11, 13, 17, 19, 25 ]
*/


// const fs = require('fs').promises // bisa pakai 2 cara penulisan promise
// const fs = require('fs/promises'); // commonJS (.js biasa, tanpa "type": "module") CommonJS
import fs from 'fs/promises'; // type module di packge json ESMODULE
// ES MODULE = tidak boleh pakai require harus import
// CommonJS = tidak boleh pakai import harus require

// cara 2.
async function loadJson() {
    
    try {
        
        let DataJson = await fs.readFile('Ascending.json', 'utf-8')
        let data  = JSON.parse(DataJson)
        let numbers = data.numbers
        return numbers

    } catch (error) {
        console.log('gagal membaca data Json', error.message);
    }
}


// ada 2 cara untuk melihat isi promise

// 1. pakai await async
// async function getDataJson() {
    
//     try {
        
//         const result = await loadJson();
//         return result

//     } catch (error) {
//         console.log('gagal membaca data json', error.message);
//     }

// }
//     // getDataJson();
// const data = await getDataJson()
// console.log(data ,'llll');


// // 2. pakai .then
// loadJson().then(result =>{
//     // console.log(result);
//     // kami bisa menjalankan function disini dari promise
//     // tapi tidak bisa return
//     // ini hanya mengembalikann promise
// })


const angkaTerurut = await loadJson()
// console.log(angkaTerurut);
const enamTerurut = [2,4,7,11,19,77]

// console.log('isi dari numbers :', angkaTerurut);

const binarySearch = (arr, target) => {

     let kiri = 0
     let kanan = arr.length -1 // 5 karena length 6 dan index sampai 5 akan terjadi pengurangan ketika kondisi arr[tengah] > besar dari target

    while (kiri <= kanan ){
        let tengah = Math.floor((kiri + kanan)/2) // (0 + 5)/2 = 2.5 = 2 karena pakai mathFloor 

        if (arr[tengah] === target){ // index 2 = 7 and target 19 
            return target
        } else if (arr[tengah] < target){ // index 2 = 7 < 19
            kiri = tengah + 1 // cari sebelah kanan 2 + 1
        } else if (arr[tengah] > target){
            kanan = tengah - 1 // cari sebelah kiri jika kondisi ini tengah - 1
        }
    }

    return -1

}

console.log(binarySearch(enamTerurut, 19));
console.log(binarySearch(angkaTerurut,25));