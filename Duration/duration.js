// const fs = require('fs/promises')
import fs from 'fs/promises'

async function loadJson() {

    const json = await fs.readFile('duration.json', 'utf-8')
    const data = JSON.parse(json)
    const input2 = data.input
    return input2
    
}

const input1 = await loadJson()
console.log(input1);
console.log();
const input = [
  [0, 2],
  [1, 5],
  [25, 29],
  [2, 33]
];


const tekanTombol = (input) => {

        
        let Huruf = "abcdefghijklmnopqrstupwxyz"

        // karena input = [ 0, 2 ], [ 1, 5 ], [ 0, 9 ], [ 2, 15 ]
        // kita buat output awal sebelum mendapat tekanan terlama.
        let tekananTerlama = {
            key : Huruf[input[0][0]], // 0
            duration : input[0][1] // 2
        }

        for (let i = 1; i < input.length; i++){ // i mulai dari 1 karena 0 kita sudah pakai dari awal dan membuat validasi jika tidak ada yang lebih besar tekanan duration dari index 0 maka key a tidak tergantikan.
            console.log(input[i]); // [ 0, 2 ]
            console.log();
            let key = Huruf[input[i][0]]
            // console.log(key);
            let duration = input[i][1]

            if (duration - input[i - 1][1] > tekananTerlama.duration){ // input[i-1][1] adalah index sebelum dari index berjalan
                tekananTerlama = {
                    key,
                    duration : duration - input[i-1][1]
                }
            }
        }

        return tekananTerlama

}

console.log(tekanTombol(input1));
console.log();
console.log('==================');
console.log();
console.log(tekanTombol(input));