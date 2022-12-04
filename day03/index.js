const fs = require('fs')

const points = {};
calculatePoints();

function inputDataLinesIntegers(filename="input.txt") {
    return fs.readFileSync(filename).toString().trim();
}

function calculatePoints() {
    const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    lowerCaseAlphabet.forEach((letter, i) => points[letter] = i + 1);
    const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    upperCaseAlphabet.forEach((letter, i) => points[letter] = i + 27);
};

function splitToRucksacks(input) {
    return input.split('\n').filter(r => r !== undefined);
}

function splitToGroups(rucksacks) {
    return [].concat.apply([],
        rucksacks.map(function(elem, i) {
            return i % 3 ? [] : [rucksacks.slice(i, i + 3)];
        })
    );
}

function getSolutionPart1(input) {
    const rucksacks = splitToRucksacks(input);
    const partsByRucksack = rucksacks.map(r => [r.slice(0, r.length / 2), r.slice(r.length / 2 )]);
    let prioPoints = [];
    partsByRucksack.forEach(rucksack => {
        prioPoints.push(points[(Array.from(rucksack[0]).find(item => Array.from(rucksack[1]).includes(item)))]);
    });
    return prioPoints.reduce(function(a, b){
        return a + b;
    }, 0);
}

function getSolutionPart2(input) {
    const rucksacks = splitToRucksacks(input);
    const groups = splitToGroups(rucksacks);
    let prioPoints = [];
    groups.forEach(group => {
        const commonLetters = (Array.from(group[0]).filter(item => Array.from(group[1]).includes(item)));
        prioPoints.push(points[Array.from(group[2]).filter(item => commonLetters.includes(item))[0]]);
    });
    return prioPoints.reduce(function(a, b){
        return a + b;
    }, 0);
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
