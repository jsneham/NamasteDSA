/*
Power of Two
Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.

Concepts
Power of Two: A number is a power of 2 if it can be divided by 2 repeatedly until it reaches 1.
Base Case: n == 1 → true
Invalid Case: n < 1 or n % 2 != 0 → false
Recursive Case: isPowerOfTwo(n / 2)
Time & Space Complexity
Time Complexity: O(log n)
Space Complexity: O(log n) (due to recursion stack)
Examples
Input: 8
Output: true (8 → 4 → 2 → 1)

Input: 18
Output: false

*/


function isPowerOfTwo(n) {
  if (n === 1) return true;
  else if (n < 1 || n % 2 !== 0) return false;
  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(18)); // false
    