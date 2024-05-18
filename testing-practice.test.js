// function capitalize test
const capitalize = require('./capitalize');

test('returns the first letter capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
});

// function reverseString test
const reverseString = require('./reverseString');

test('returns the string reversed', () => {
    expect(reverseString('today')).toBe('yadot');
});

// calculator object test
const calculator = require('./calculator');

test('adds 1 + 1 to equal 2', () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test('substracts 3 - 1 to equal 2', () => {
    expect(calculator.substract(3, 1)).toBe(2);
});

test('divide 6 / 2 to equal 3', () => {
    expect(calculator.divide(6, 2)).toBe(3);
});

test('multiply 2 * 2 to equal 4', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});

// function caesarCipher test
const caesarCipher = require('./caesarCipher');

test('returns the string from cipher', () => {
    expect(caesarCipher('SERR YBIR?')).toBe('FREE LOVE?');
});

// function analyzeArray test
const analyzeArray = require('./analyzeArray');

test('returns an object with average, min, max and length', () => {
    expect(analyzeArray([3, 7, 1, 8, 5, 6])).toEqual({average: 5, min: 1, max: 8, length: 6});
});