// fibonacci.js
class InvalidInputError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidInputError";
  }
}

function fibonacci(n) {
  if (n < 0)
    throw new InvalidInputError("Input must be a non-negative integer");
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
  fibonacci,
  InvalidInputError,
};
