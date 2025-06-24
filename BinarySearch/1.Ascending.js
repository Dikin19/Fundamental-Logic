const fs = require ('fs')

const rawData = fs.readFileSync('Ascending.json', 'utf8')

const data = JSON.parse(rawData)

// console.log('isi json :', data);

const angkaTerurut = data.numbers // [ 3,  5,  7,  9, 11, 13, 17, 19, 25 ]

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