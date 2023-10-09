// objects=============================

// Objects, in JavaScript, are the most important data type and form the building blocks for JavaScript. 
let school = {
    name: 'Vivekananda School',
    20 : 1000,
    displayInfo : function(){
        console.log(`The value of the key 20 is ${school['20']}`);
    }
}
// display object:
//  console.log(school)

// -iterating over key and values
for(let i in school){
    // console.log(i+":"+school[i])
}

// access/modify properties:
school.name = "knsit"

// deleting a property:
delete school[20];

// calling the function:
    // school.displayInfo()

// somePerson.first name // invalid
// somePerson["first name"] // valid


const car={
    name:"as",
    age:12,
    brand:function(){
        this.name + supra
    }
}


class a{
    constructor(x,y){
        this.x=x;
        this.y=y
    }
}
class b extends a{
    constructor(t,r,x,y){
        super(x,y);
        this.t=t;
        this.r=r
    }
}

const x=new a(5,6);
const y1=new b(2,5,3,6)

console.log(y1.x)