const {getSolutionPart1, getSolutionPart2} = require('../index')

test('part1', ()=>{
    const input = '1\n' +
        '20\n' +
        '\n' +
        '10\n' +
        '\n' +
        '1\n' +
        '1\n' +
        '1';
    expect(getSolutionPart1(input)).toBe(21)
})

test('part2', ()=>{
    const input = '1\n' +
        '2\n' +
        '\n' +
        '20\n' +
        '20\n' +
        '\n' +
        '10\n' +
        '20\n' +
        '\n' +
        '10\n' +
        '40\n' +
        '\n' +
        '10\n' +
        '\n' +
        '1\n' +
        '1\n' +
        '1';
    expect(getSolutionPart2(input)).toBe(120)
})
