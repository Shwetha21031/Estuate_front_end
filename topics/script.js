// Hoisting===================

// a variable can be used before it has been declared.
// It allows us to call functions before even writing them in our code.

// JavaScript only hoists declarations, not initializations.


// x = 5; // Assign 5 to x
// console.log(x)
// var x; // Declare x

// //error for let and const
// carName = "Volvo";
// let carName;

// Spread vs rest operator===============

// JavaScript uses three dots (...) for both the rest and spread operators. But these two operators are not the same.
// The main difference 
// rest operator puts the rest of some specific user-supplied values(compresses) into a JavaScript array.
var array1 = [10, 20, 30, 40, 50];
var [a,b, ...c] = array1
// console.log(a)
// console.log(b)
// console.log(c)

// spread syntax expands iterables into individual elements.

var array2 = [60, 70, 80, 90, 100];
var array3 = [...array1, ...array2];
// console.log(array3)




//******************Extras******************* */

// Date ========================

// console.log(Date.now())


// Math =======================
// console.log(Math.pow(2,8))
// console.log(Math.sqrt(16))
// console.log(Math.min(7,8,6))
// console.log(Math.max(7,8,6))
// console.log(Math.floor(123.456))
// console.log(Math.round(123.456))

//  to convert a floating point number to its immediately smaller integer - Math.floor
// console.log(Math.floor(Math.random()*100))

// a random value between 3-10
// console.log(Math.floor(Math.random()*10)+3) 


// this keyword : =============

// used inside a function , reference to another object
// inside a function  - points to a global object (in browser - window object , in node - global is the global object)
// inside a method - points to the object the method is in
// run with call , apply or bind - 


// constructors =============
//  spl function which acts a mould to create a new object
// builtins - String , Numbers , Promises , Date , Array

