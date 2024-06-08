function displayFibonacci(n) {
  const result = fibonacci(n);
  document.getElementById(
    "root"
  ).textContent = `5th Fibonacci number expected: 34. The 5th Fibonacci number is actually: ${result}`;
}

// Export for use in other scripts
window.displayFibonacci = displayFibonacci;
