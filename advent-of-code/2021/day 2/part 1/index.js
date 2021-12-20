const fs = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    output: process.stdout,
    terminal: false
});
let depth = 0;
let horizontal = 0;
reader.on('line', (line) => {
    const [direction, units] = line.split(' ');
    switch (direction) {
        case 'forward':
            horizontal += Number(units);
            break;
        case 'up':
            depth -= Number(units);
            break;
        case 'down':
            depth += Number(units);
            break;
    }

});
reader.on('close', () => {
    console.log(`horizontal-pos: ${horizontal}, depth: ${depth}, result: ${horizontal * depth}`);
});
