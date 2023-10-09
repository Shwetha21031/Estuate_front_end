
/* 
Promises==================
Multiple callback functions would create callback hell that leads to unmanageable code. 
Promises are used to handle asynchronous operations in JavaScript.
eg: fetch

it will run upon success or failure of the task
working = 2 parts -> creating , consuming
- Async task (3rd party is doing this task in the bg)
let promise = new Promise(function(resolve, reject){
     //do something
});
-takes only one argument which is a callback function
-The callback function takes two arguments, resolve (if everything goes well) and reject (if something goes wrong)
states - pending , fulfilled , rejected , settled
*/
               
// let prom = new Promise((resolve,reject)=>{
//     if(false){
//         resolve("success")
//     }else{
//         // reject("failure")
//         console.error("rejected");
//     }
// })
// prom.then((msg)=>{
//     console.log(msg)
// }/* ,(msg)=>{
//     console.log(msg)
// } */).catch((err)=>{
//     console.log(err)
// })