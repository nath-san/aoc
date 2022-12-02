const fs = require('fs')

function inputDataLinesIntegers(filename="input.txt") {
    return fs.readFileSync(filename).toString().trim();
}

function splitToRounds(input) {
    return input.split('\n').filter(r => r !== undefined);
}

function getSolutionPart1(input) {
    const pointsByHand = {
        X: 1,
        Y: 2,
        Z: 3
    }
    const pointsByOutcome = {
        X: {
            C: 6,
            A: 3,
            B: 0
        },
        Y: {
            A: 6,
            B: 3,
            C: 0
        },
        Z: {
            B: 6,
            C: 3,
            A: 0
        }
    }
    const rounds = splitToRounds(input);
    let points = 0;
    rounds.forEach((round) => {
        const [opponent, me] = round.split(' ');
        points += pointsByHand[me];
        points += pointsByOutcome[me][opponent];
    });
    return points;
}

function getSolutionPart2(input) {
    const pointsByOutcome = {
        X: 0,
        Y: 3,
        Z: 6
    };
    const pointsByHand = {
        X: {
            A: 3,
            B: 1,
            C: 2
        },
        Y: {
            A: 1,
            B: 2,
            C: 3
        },
        Z: {
            A: 2,
            B: 3,
            C: 1
        }
    };
    const rounds = splitToRounds(input);
    let points = 0;
    rounds.forEach((round) => {
        const [opponent, me] = round.split(' ');
        points += pointsByOutcome[me];
        points += pointsByHand[me][opponent];
    });
    return points;
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
