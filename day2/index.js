// let name=" premraj"
// let age = 20;                         by using let keyword value will be changed

// age=30;
// console.log(name , age);

// const account="prem";               constant value 
// // account= "raj";     error generate
// console.log(account)


//   old declaration
// var a=20;
// var a=30;
// console.log(a)



// if(true){
//     var a=20;
// }
// console.log(a)

//   Data types

// primitive and non primitive

// number, String, bollean

let a = 10              // 8byte
let b= 2.36
let c="premraj pattade"
// bollean
let login = true;
// undefine
let user;
console.log(user)
console.log(a,b)
console.log(c)
console.log(login)


const p="ok"
console.log(p)

// big int
let n=2222222222222222222222222n;
console.log(n);

//   null

// let weather=null;
// console.log(weather);

// difference

// let weather= current_weather("maharashtra");
//25
//null
//undefined

// symbol                  unique generate value

const id1 = Symbol("id");
console.log(id1);


// 2)                   Non primitive
// array
// let arr=[10,20,'rohit',true]
// console.log(arr)


// object
let obj={
    name:"rohit",
    accc:234332,
    age:12


}
console.log(obj);

// function add(){
//     console.log("hello")
// }

// add();


let s= function add(){
    console.log("hello")
}

console.log(s());