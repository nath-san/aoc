const {getSolutionPart1, getSolutionPart2} = require('../index')



test('part1', ()=>{
    const input = 'A Y\n' +
        'B X\n' +
        'C Z';
    expect(getSolutionPart1(input)).toBe(15)
})

test('part2', ()=>{
    const input = 'A Y\n' +
        'B X\n' +
        'C Z';
    expect(getSolutionPart2(input)).toBe(12)
})
