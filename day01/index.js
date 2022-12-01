const fs = require('fs')

function inputDataLinesIntegers(filename="input.txt") {
    return fs.readFileSync(filename).toString().trim();
}

function getSolutionPart1(input) {
    const chunks = input.split('\n\n').map(c => c.split('\n'));
    const sum = chunks.map(c => c.reduce((a, b) => parseInt(a) + parseInt(b), 0));
    return sum.reduce((a, b) => Math.max(a, b), -Infinity);
}

function getSolutionPart2(input) {
    const chunks = input.split('\n\n').map(c => c.split('\n'));
    const sum = chunks.map(c => c.reduce((a, b) => parseInt(a) + parseInt(b), 0));
    const top = sum.sort((a, b) => a - b).reverse().slice(0,3);
    return top.reduce((partialSum, a) => partialSum + a, 0);
}

const part = process.env.part || "part1"

const data = inputDataLinesIntegers();
if (part === "part1")
    console.log(getSolutionPart1(data))
else
    console.log(getSolutionPart2(data))

module.exports = {
    getSolutionPart1, getSolutionPart2
}
