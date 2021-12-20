const fs = require('fs');
const readline = require('readline');

const reader = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    output: process.stdout,
    terminal: false
});
let depth = 0;
let horizontal = 0;
let aim = 0;
reader.on('line', (line) => {
    const [direction, units] = line.split(' ');
    switch (direction) {
        case 'forward':
            horizontal += Number(units);
            depth += Number(units) * aim;
            break;
        case 'up':
            aim -= Number(units);
            break;
        case 'down':
            aim += Number(units);
            break;
    }

});
reader.on('close', () => {
    console.log(`horizontal-pos: ${horizontal}, depth: ${depth}, result: ${horizontal * depth}`);
});
