
// array=======================
// is used to store multiple elements in a single variable. 
let arr = [1,3,2,5,9,8]

// array methods
// length Property============================
    // console.log(arr.length)

// Array.isArray(arr_name)- ====================
// Returns true if the argument passed is an array else it returns false.
    // console.log(Array.isArray(arr))

// adding / removing elements========================
// Array.push()  - adds the element to the end
arr.push("item5") 
    // console.log(arr)

// Array.pop() - delets an elements in the end
arr.pop()
    // console.log(arr)

// Array.unshift() - adds an element in to the front of an array
arr.unshift("item0")
    // console.log(arr)

// Array.shift() - removes element in the front
arr.shift()
    // console.log(arr)

// Array.slice (startIndex , endIndex) - This method returns a new array containing a portion of the original array
let arr2 = arr.slice(2,4)
    // console.log(arr2)

// Array.splice (start, deleteCount, item 1, item 2….)  - to remove elements in the middle of an array (item1 , item2 are opt), performs on an actual array
arr.splice(1,2,"item abc")
    // console.log(arr)


// finding array elements===============
// arr.indexOf(value)
    // console.log(arr.indexOf(5))

// includes() returns boolean
    // console.log(arr.includes(4))

// find()
    // console.log(arr.find(e=>e%2!==0))

// findIndex()
    // console.log(arr.findIndex(rank => rank === 5))

// Manipulating an array ==============
let array1 = [2,3,4,6]
let array2 = [5,7,8]
let array3 = array1.concat(array2)
    // console.log(array3)

// Higher order methods =================
// map()
arr = [2,3,4,5]
let newArr = arr.map(elem=>elem*2)
    // console.log(newArr)

// filter()
newArr = arr.filter(elem => elem%2==0)
    // console.log(newArr)

// reduce()
let value = arr.reduce((acc,nxt)=>{
    acc += nxt
    return acc
})
    // console.log(value)

// every()
newArr = arr.every(elem => elem%2==0)
    // console.log(newArr)

// some()
newArr = arr.some(elem => elem%2==0)
    // console.log(newArr)

// sort()
arr = [22, 44, 144, 56, 355]
arr.sort()
    // console.log(arr)
arr.sort((a,b)=>{
    return a-b //asc
    // return b-a //desc
})
    // console.log(arr)

// forEach()
// callback takes in 3 parameter (value,index,array)
arr.forEach((val,index,arr)=>{
        console.log(`${val} is at the index: ${index} in array [${arr}]`)
})


