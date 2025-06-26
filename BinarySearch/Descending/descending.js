// const fs = require('fs/promises')
import fs from 'fs/promises'

async function loadJson() {

    try {
        
    const dataJson = await fs.readFile('descending.json', 'utf-8')
    // console.log(dataJson);
    let data = JSON.parse(dataJson)
    // console.log(data);
    let numbers = data.numbers
    // console.log(numbers);
    return numbers

    } catch (error) {
        console.log('gagal membaca data Json:', error.message);
        
    }
}

const descending = await loadJson()
// console.log(descending);
const descending1 = [77, 66, 55, 44, 33, 22, 11]
// console.log(descending1);

const binarySearch = (arr, target) => {

    let left = 0
    let rigth = arr.length -1
    
    while (left <= rigth) {
        
        let midle = Math.floor((left+rigth)/2)
        // console.log(midle);

        if (arr[midle] === target){
            return target
        } else if (arr[midle] < target){ // index 2=66 < 22
            rigth = midle - 1 // cari dikiri
        } else if (arr[midle] > target){ // index 2=66 > 22
            left = midle + 1 // cari kanan
        }
    }

    return null
}

console.log(binarySearch(descending1, 22));
console.log(binarySearch(descending1, 99));
console.log(binarySearch(descending,77));