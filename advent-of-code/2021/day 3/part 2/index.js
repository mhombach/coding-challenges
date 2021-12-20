const fs = require('fs');

const input = fs.readFileSync('input.txt', 'UTF-8');
const lines = input.split(/\r?\n/);

function task(moreOrLess) {
    let array = lines;
    let index = 0;
    while (array.length !== 1) {
        array = split(array, index, moreOrLess);
        index++;
    }
    const result = parseInt(array[0], 2);
    console.log(`finished '${moreOrLess}'-task with: ${result}`);
    return result;
}

function split(array, index, moreOrLess) {
    const zeroes = [];
    const ones = [];
    for (const entry of array) {
        if(entry[index] === '0') {
            zeroes.push(entry);
        } else {
            ones.push(entry);
        }
    }
    if(moreOrLess === 'more') {
        return zeroes.length > ones.length ? zeroes : ones;
    } else {
        return zeroes.length > ones.length ? ones : zeroes;
    }
}
console.log('finale number:', task('more') * task('less'))
