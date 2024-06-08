document.addEventListener("DOMContentLoaded", () => {
  try {
    // displayFibonacci(-10); // Example usage\
    displayFibonacci(5); // Example usage
    displayFibonacci(0); // Example usage
    displayFibonacci(2); // Example usage

    displayFibonacci(9); // Example usage
  } catch (error) {
    console.error(error.message);
  }
});
