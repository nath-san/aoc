const {getSolutionPart1, getSolutionPart2} = require('../index')



test('part1', ()=>{
    const input = 'vJrwpWtwJgWrhcsFMMfFFhFp\n' +
        'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\n' +
        'PmmdzqPrVvPwwTWBwg\n' +
        'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\n' +
        'ttgJtRGJQctTZtZT\n' +
        'CrZsJsPPZsGzwwsLwLmpwMDw';
    expect(getSolutionPart1(input)).toBe(157)
})

test('part2', ()=>{
    const input = 'vJrwpWtwJgWrhcsFMMfFFhFp\n' +
        'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\n' +
        'PmmdzqPrVvPwwTWBwg\n' +
        'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\n' +
        'ttgJtRGJQctTZtZT\n' +
        'CrZsJsPPZsGzwwsLwLmpwMDw';
    expect(getSolutionPart2(input)).toBe(70)
})
