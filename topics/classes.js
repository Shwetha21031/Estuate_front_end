// Use the class keyword to declare a new class.
// first letter capital
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    details(){
        console.log(`${this.name} : ${this.age}`)
    }
}

// creating an object
let p1 = new Person("riya",23)
p1.details()

// Inheritance
class Student extends Person{
    constructor(name,age,course){
        super(name,age);
        this.course = course;
    }
    Course(){
        console.log(`${this.name} is studying ${this.course}`)
    }
}

let s1 = new Student("riya",23,"Biology")
console.log(s1.name)
s1.details()
s1.Course()


// getters and setters
class Rectangle{
    constructor(w,h){
        this.w = w;
        this.h = h;
    }
    get area(){
       return this.w * this.h;
    }
    set width(val){
        if(val>0){
            this.w = val
            console.log("changing width")
        }
    }
    set height(val){
        if(val>0){
            this.h = val
            console.log("changing height")
        }
    }
}
let r1 = new Rectangle(20,10);
console.log(r1.area)
// r1.width(20)
