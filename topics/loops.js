// loops======================
// for, for-in, for-of, while, do-while, forEach.


// -for loop
// A for loop is used when you know how many times you need to repeat a certain block of code. 

for (let i = 0; i < 4; i++) {
//  console.log(i);
}

// -while Loop
// A while loop is used when you don’t know how many times you need to repeat a block of code, but you know thecondition that will end the loop.
let i = 0;
while (i < 6) {
//   console.log(i);
  i++;
}

// -A do-while loop is similar to a while loop, 
// but the block of code is executed at least once, even if the condition is false.
i=0
do {
//   console.log(i);
  i++;
} while (i < 6);

// -for-in Loop
// A for-in loop is used to loop through the properties of an object.
// in = indexes
const obj = {a: 1, b: 4, c: 7};
for(let key in obj){
    // console.log(key+" : "+obj[key])
}

// -A for-of loop is used to loop through the values of an iterable object (such as an array. onjects are not iterable)
array = [1, 2, 3];  
for (let val of array) {
//   console.log(val);
}
