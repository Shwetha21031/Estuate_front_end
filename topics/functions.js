// functions==========================
// collection of reusable code that may be invoked from anywhere in your application, breaks down large programs into small units
// function defination
function abc(){
    console.log("function defination");
}
    // abc()

// function expression
// a function can be saved to a variable , this variable can be used as a function 
let def = function(){
    console.log("function expression")
}
    // def()

// arrow function
let ghi = () => console.log("arrow function")
    // ghi()


// types of function 

// named function
// function abc(){
//     console.log("function defination");
// }

// anonymous function (nameless function)
let add = function(a, b){
  return a + b;
}
    // console.log(add(5, 4));


// nested function (function inside a fumction)
     function msg(firstName) {
      function hey() {
        console.log("Hey " + firstName);
      }
     
      return hey();
    }
    // msg("Shreekar anna");

//  Immediately invoked function expression(iife) - Thebrowser executes the invoked function expression as soonas it detects it.
// way to create a function and immedieately execute itwithout needing to call it later

// (function() {
//     console.log("Welcome to GFG!");
// })();