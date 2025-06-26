// const fs = require('fs/promises')
import fs from 'fs/promises'


const loadJson = async () => {

    try {

        const json = await fs.readFile('linearSearch.json', 'utf-8')
        const data = JSON.parse(json)
        // console.log(data);
        const result = data.numbers
        // console.log(result);
        return result
        
    } catch (error) {
        console.log('error getting data :', error.message);
    }

}

const angkaLinear = await loadJson()
// console.log(angkaLinear);

const linearSearch = (angkaLinear, target) => {

    // console.log(angkaLinear, target);

    for (const number of angkaLinear){

        if (number === target){
            return target
        } 
    }
    
    return `Target tidak ada dalam angkaLinear`
}

console.log(linearSearch(angkaLinear,31));