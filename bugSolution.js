function foo(a, b) {
  // Type checking to ensure both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Inputs must be numbers";
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Error: Inputs must be numbers