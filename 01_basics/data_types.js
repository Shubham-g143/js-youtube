// primitive

// 7 types : string, Number, Boolean, null, undefined, Symbol, BinInt, 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 23454626456526565346535n

// reference (non primitive)

//  Array, Objects, Finctoins

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "shubham",
    age: 24
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof bigNumber)