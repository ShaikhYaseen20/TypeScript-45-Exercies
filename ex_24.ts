/*Assignment Number 24.  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less
than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */

// equality and inequality
// let myName = "Yaseen"
// console.log(myName == "Yaseen")   //true  equal to
// console.log(myName !== "yaseen")  //true  not equal to


// // numberics
// let myNumber = 10;
// console.log(myNumber == 10)   //True
// console.log(myNumber !== 10)  //False
// console.log(myNumber > 5)     //True    greater than
// console.log(myNumber < 5)     //False    less than
// console.log(myNumber <= 5)     //False    less than equal to
// console.log(myNumber >= 5)     //True    greater than equal to

// And && Or 

let num1 = 10
let num2 = 5

console.log(num1 > 9 && num2 < 5);   // false
console.log(num1 > 9 || num2 < 5);   // true

let myArray = [2 , 3 , "Yaseen"];
let myString = "Ali"
console.log(Array.isArray(myArray));  // true
console.log(Array.isArray(myString)); // false