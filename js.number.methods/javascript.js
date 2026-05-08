// JavaScript Number Methods (First 10)
// 1. toString()
// Short Explanation
// Converts a number into a string.
// Example
// JavaScript
let num = 100;
console.log(num.toString());
// Small Question
// What will be the output?
// JavaScript
let x = 25;
console.log(x.toString());
// Correct Solution
// JavaScript
"25"
// Explanation:
// toString() changes the number 25 into the string "25".
// 2. toFixed()
// Short Explanation
// Rounds a number and keeps a fixed number of decimal places.
// Example
// JavaScript
let num = 5.6789;
console.log(num.toFixed(2));
// Small Question
// What will be the output?
// JavaScript
let x = 3.456;
console.log(x.toFixed(1));
// Correct Solution
// JavaScript
"3.5"
// Explanation:
// toFixed(1) keeps one digit after the decimal point.
// 3. toPrecision()
// Short Explanation
// Formats a number to a specified total length.
// Example
JavaScript
let num = 12.3456;
console.log(num.toPrecision(3));
// Small Question
// What will be the output?
// JavaScript
let x = 45.678;
console.log(x.toPrecision(2));
// Correct Solution
// JavaScript
"46"
// Explanation:
// The number is rounded to 2 significant digits.
// 4. valueOf()
// Short Explanation
// Returns the primitive value of a number.
// Example
// JavaScript
let num = 500;
console.log(num.valueOf());
// Small Question
// What will be the output?
// JavaScript
let x = 99;
console.log(x.valueOf());
// Correct Solution
// JavaScript
// 99
// Explanation:
// valueOf() returns the original number value.
// 5. parseInt()
// Short Explanation
// Converts a string into an integer.
// Example
// JavaScript
console.log(parseInt("123"));
// Small Question
// What will be the output?
// JavaScript
console.log(parseInt("45.89"));
// Correct Solution
// JavaScript
45
// Explanation:
// parseInt() removes the decimal part.
// 6. parseFloat()
// Short Explanation
// Converts a string into a decimal number.
// Example
// JavaScript
console.log(parseFloat("12.34"));
// Small Question
// What will be the output?
// JavaScript
console.log(parseFloat("7.89"));
// Correct Solution
// JavaScript
7.89
// Explanation:
// parseFloat() keeps decimal values.
// 7. Number()
// Short Explanation
// Converts different data types into numbers.
// Example
// JavaScript
console.log(Number("50"));
// Small Question
// What will be the output?
// JavaScript
console.log(Number(true));
// Correct Solution
// JavaScript
// 1
// Explanation:
// true becomes 1 and false becomes 0.
// 8. isNaN()
// Short Explanation
// Checks whether a value is “Not a Number”.
// Example
// JavaScript
console.log(isNaN("Hello"));
// Small Question
// What will be the output?
// JavaScript
console.log(isNaN(123));
// Correct Solution
// JavaScript
// false
// Explanation:
// 123 is a valid number, so the result is false.
// 9. isFinite()
// Short Explanation
// Checks whether a number is finite.
// Example
// JavaScript
console.log(isFinite(100));
// Small Question
// What will be the output?
// JavaScript
console.log(isFinite(Infinity));
// Correct Solution
// JavaScript
// false
// Explanation:
// Infinity is not a finite number.
// 10. toExponential()
// Short Explanation
// Converts a number into exponential notation.
// Example
// JavaScript
let num = 12345;
console.log(num.toExponential(2));
// Small Question
// What will be the output?
// JavaScript
let x = 500;
console.log(x.toExponential(1));
// Correct Solution
// JavaScript
// "5.0e+2"
// Explanation:
// The number 500 is written in exponential form.
// Combined Example 1
// JavaScript
let num = 45.6789;

console.log(num.toFixed(2));
console.log(num.toString());
console.log(num.toExponential(2));
// Output
// JavaScript
// 45.68
// "45.6789"
// 4.57e+1
// Combined Example 2
// JavaScript
let value = "123.45";

console.log(parseInt(value));
console.log(parseFloat(value));
console.log(Number(value));
// Output
// JavaScript
// 123
// 123.45
// 123.45
// Final Small Problem
// Predict the output:
// JavaScript
let x = 78.912;

console.log(x.toFixed(1));
console.log(parseInt(x));
console.log(isNaN(x));
// Try solving it yourself first.
// Correct Answer
// JavaScript
78.9
78
false
// Explanation
// toFixed(1) keeps one decimal place → 78.9
// parseInt() removes decimals → 78
// isNaN() checks if it is not a number → false because it is a valid number