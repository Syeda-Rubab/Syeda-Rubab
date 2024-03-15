//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array
let num1 = 20;
let num2 = 10;
let str1 = 'hello';
let str2 = 'world';
let bool1 = true;
let bool2 = false;

console.log("Test 1: Is num1 > num2? I predict true.");
console.log(num1 > num2);

console.log("Test 2: Is num1 === num2? I predict false.");
console.log(num1 === num2);

console.log("Test 3: Is str1 + str2 === 'helloworld'? I predict true.");
console.log(str1 + str2 === 'helloworld');

console.log("Test 4: Is str1 === str2? I predict false.");
console.log(str1 === str2);

console.log("Test 5: Is bool1 !== bool2? I predict true.");
console.log(!bool1);

console.log("Test 6: Is num1 < num2 || bool1 === bool2? I predict false.");
console.log(num1 < num2 || !bool2);

console.log("Test 7: Is num1 * num2 >= 50 && bool1 === true? I predict true.");
console.log(num1 * num2 >= 50 && !bool1);

console.log("Test 8: Is bool1 && bool2 || num1 > num2? I predict true.");
console.log(bool1 && bool2 || num1 > num2);

console.log("Test 9: Is typeof str1 === 'string'? I predict true.");
console.log(typeof str1 === 'string');

console.log("Test 10: Is typeof num1 === 'string'? I predict false.");
console.log(typeof num1 === 'string');
