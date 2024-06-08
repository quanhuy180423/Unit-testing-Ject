// fibonacci.test.js
const { fibonacci, InvalidInputError } = require("./Fibonaci");

const testCases = [
  { input: -1, expected: "Input must be a non-negative integer" },
  { input: 0, expected: 0 },
  { input: 1, expected: 1 },
  { input: 2, expected: 1 },
  { input: 3, expected: 2 },
  { input: 4, expected: 3 },
  { input: 5, expected: 5 },
  { input: 10, expected: 55 },
  // Add more test cases as needed
];

testCases.forEach(({ input, expected }) => {
  if (input < 0) {
    test(`throws InvalidInputError for invalid input n = ${input}`, () => {
      expect(() => fibonacci(input)).toThrow(InvalidInputError);
      expect(() => fibonacci(input)).toThrow(expected);
    });
  } else {
    test(`calculates Fibonacci for n = ${input}`, () => {
      expect(fibonacci(input)).toBe(expected);
    });
  }
});
