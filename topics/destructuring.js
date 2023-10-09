// Destructuring ===================
// technique that allows you to neatly extract a value into new variables
// Array 
let [x,y,...z] = numbers;
// console.log(x)
// console.log(y)
// console.log(z)

// direct array destructuring 
let[fname ,  ,age] = ["meera","jain" ,24]
// console.log(age)

// in functions
let profile1 = ["Estuate" , "female",["Shwetha" ,"A"]]
function getUser([company,,[fname]]){
    console.log(`${fname} works at ${company}`)
}
// getUser(profile1)


// object 
const obje = {
    A:1,
    B:2,
    C:3,
}
const {A:X ,C:Z ,B:Y }=obje
// ABC -> key referances 
// XYZ -> var / renaming
console.log(Z)