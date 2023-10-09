// 1
let array = [[1,2],[4,5]]
let newArray = array.flat()
// console.log(newArray)
let power_2 = newArray.map((elem)=>{
    return elem = elem**2
})
// console.log(power_2) 

// /* let newArray = []
// for(let i of array){
//     for(let j of i){
//         newArray.push(j**2)
//     }
// } */
// // console.log(newArray)


// 2
array = [['string1','string2','string1'],['string2','string1','string3','string4','string4']]
newArray = array.flat()

let unique = [...new Set(newArray)]
console.log(unique)

// newArray.sort()
// console.log(newArray)
/* let len = newArray.length;
for(let i=0 ; i<len ; i++){
    if(newArray[i] === newArray[i++]){
        unique.push(newArray[i]);
    }
    if(newArray[length-1]!==newArray[length-2]){
        unique.push(newArray[length-1])
    }
} */
// console.log(unique)

// 3
let arr1 = [22,44,52,65,78]
let arr2 = [143, 456,24]
let arr3 = [...arr1,...arr2]
// Array.sort()
arr3.sort((a,b)=>{
    return a-b;
})
// console.log(arr3)



// 4
array = ["Shwetha","Darshan","Rakshitha"]
newArray = array.map((elem)=>{

    return elem = "S"+elem
})
// console.log(newArray)

// 5
array = [['string1','string2','string1'],['string2','string1','string3','string4','string4']]
b = array.flat()
// console.log(b)

// 6
array = ["Shwetha","Darshan","Rakshitha"]
let last = array.pop()
array.unshift(last);
// console.log(array)


// 9a
let data = [
    {subject:'Math',value:80},
    {subject:'Science',value:null},
    {subject:'English',value:null},
    {subject:'History',value:70},
]
let above_60 = data.filter((elem)=>{
    if(elem.value>60){
                console.log(`${elem.subject} is > 60`)
            }
})
// for(let elem of data){
// // console.log(elem.value)
//     if(elem.value>60){
//         console.log(elem.subject)
//     }
// }

// 9b
let math_value = data[0].value

newArray = data.map((elem)=>{
    if(elem.value === null){
                elem.value = math_value
            }
})
        // console.log(data)
// for(let elem of data){
//     if(elem.value === null){
//         elem.value = math_value
//     }
// }














