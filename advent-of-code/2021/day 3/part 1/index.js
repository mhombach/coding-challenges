const fs = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    output: process.stdout,
    terminal: false
});
let sumArray;

reader.on('line', (line) => {
    if(sumArray === undefined) {
        sumArray = Array(line.length);
        sumArray.fill(0, 0, line.length);
    }
    for (let i = 0; i < sumArray.length; i++) {
        sumArray[i] += line[i] === '0' ? -1 : 1;
    }
});
reader.on('close', () => {
    const gamma = createGamma();
    const epsilon = createEpsilon();
    console.log(`gamma: ${gamma}, epsilon: ${epsilon}, result: ${gamma * epsilon}`);
});

function createBitArray(char1, char2) {
    const bitArray = []
    for (let i = 0; i < sumArray.length; i++) {
        bitArray[i] = sumArray[i] < 0 ? char1 : char2;
    }
    return bitArray;
}

function createGamma() {
    const bitArray = createBitArray('0', '1');
    return parseInt(bitArray.join(''), 2);
}

function createEpsilon() {
    const bitArray = createBitArray('1', '0');
    return parseInt(bitArray.join(''), 2);
}