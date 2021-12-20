const fs = require('fs');

const input = fs.readFileSync('input.txt', 'UTF-8');
const allLines = input.split(/\r?\n/);

const allDraws = allLines[0].split(',');
console.log('number of draws:', allDraws.length);

const allBoards = getBoards(allLines);
console.log('number of boards:', allBoards.length);

console.log('starting game!');
startGame(allBoards, allDraws);

function startGame(boards, draws) {
    for (const draw of draws) {
        drawNumber(draw);
        for (const currentBoard of boards) {
            const boardIsAWinner = checkBoardForWin(currentBoard, draw);
            if(boardIsAWinner) {
                return;
            }
        }
    }
}

function checkBoardForWin(board, lastDraw) {
    if (board.sum.rows.includes(5) || board.sum.columns.includes(5)) {
        let sumOfUnmarkedFields = 0;
        board.fields.forEach((field, key) => {
            if (!field.marked) {
                sumOfUnmarkedFields += Number(key);
            }
        });
        console.log('we\'ve got a winner!');
        console.log('sum of all unmarked fields:', sumOfUnmarkedFields);
        console.log('last draw:', lastDraw);
        console.log('finale solution:', sumOfUnmarkedFields * lastDraw);
        return true;
    }
    return false;
}

function drawNumber(number) {
    for (const board of allBoards) {
        if(board.fields.has(number)) {
            const boardConfig = board.fields.get(number);
            if(!boardConfig.marked) {
                board.sum.rows[boardConfig.row]++;
                board.sum.columns[boardConfig.column]++;
                boardConfig.marked = true;
            }
            
        }
    }
}

function getBoards(lines) {
    const boards = [];

    for (let i = 2; i < lines.length; i += 6 ) {
        const chunk = [lines[i] ,lines[i+1], lines[i+2], lines[i+3], lines[i+4]];
        boards.push(createBoard(chunk));
    }
    return boards;
}

function createBoard(chunk) {
    const board = {
        sum: {
            rows: [0, 0, 0, 0, 0],
            columns: [0, 0, 0, 0, 0],
        },
        fields: new Map(),
    };

    for (let row = 0; row < chunk.length; row++) {
        const chunkRow = chunk[row].split(' ').filter(entry => entry !== '');
        for (let column = 0; column < chunkRow.length; column++) {
            const number = chunkRow[column];
            board.fields.set(number, { row, column, marked: false });
        }
    }
    return board;
}