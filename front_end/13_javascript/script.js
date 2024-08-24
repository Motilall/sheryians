// js is a language
// it is managed by ecmascript(community), they bring new features, fix the bugs

// in js we mainly learn how to write the code and in js dom we learn how to use them
// js is maninly of two parts es5(var) and es6(let)

//interpreter converts fast english to machine code

//jit compiler (just in time) - takes the power of interpreter to convert code in machine language and takes the power of compiler to run the code

// data types are of two types primitive and reference data type
// reference data types are - [] {} ()
// apart from these brackets everything is primitive data types

// in primitve types the real value is copied 
// a = 12;
// b = a;
// b = b + 2;
// the value of b is 14 and the value of a is 12 because it is the real copy

// in reference types the reference value is copied
// arr = [1,2,3,4,5,6];
// brr = arr;
// brr.pop();
// now the value of brr is [1,2,3,4,5]
// and the vlaue of arr is [1,2,3,4,5]
// this is problematic because it is taking the value of reference
// brr is nothing just the arr

// spread
// var ar = [1,2,3,4,5];
// var br = [...ar]; // used to copy the value

// truthy and falsy value
// in javascript every value can be made truthy and falsy, it depends on the type of value
// if the value is truhy then it will be true and if the value is falsy then it will be false
// null, undefined, NaN, 0, "", '', document.all, false ---> all these are falsy value
// rest everything is truthy

// foreach loop only works on arrays

// how to loop array
var arr = [1,2,3,4,5];
// arr.forEach(function(val){
//     console.log(val);
// });

// how to loop an array and do something with each element
arr.forEach(function(val){
    console.log(val+1)
});



// objects

// to store many similar peoples data we use array []
// and to store one persons information we use object {} - var obj = {}; or - var obj2 = new Object();

var obj = {
    name: "Red", 
    age: 20,
    email: "red_pearl@gmali.com",
    contcat: 8239243089
}

// to access an element we will use '.' eg- obj.name;
// console.log -> console is an object



// synchronous code goes line by line
// in asynchronous the whole is started all-together and the one which is executed first we get that one first 