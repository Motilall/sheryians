// this keyword is a keyword
// keyword is something which has some meaning in it for the javascript
// this keyword value always changes to the condition

// globa -> this value is window

// {
    // insie this braces is called scope
//}
// the code which is not writen inside the scope is called global code
// console.log(this);



// function -> this value is window

// function abcd(){
//     console.log(this);
// }
// abcd();



// method -> this value is object

// var obj = {
//     name: function(){
//         console.log(this);
//     }
// }
// obj.name();




// fun(es5) -> this value is window

// var obj = {
//     sayName: function(){
//         function childfun(){
//             console.log(this);
//         }
//         childfun();
//     }
// }
// obj.sayName();





// fun(es6) -> this vlaue is object

// var obj = {
//     sayName: function(){
//         const child = ()=> {
//             console.log(this);
//         }
//         child();
//     }
// }
// obj.sayName();







// constructor -> new blank object

// function add(){
//     console.log(this);
// }
// const ans = new add();
// event listne -> the value will the item itself on which the event is applied

// document.querySelector("button");
// addEventListener("click", function(){
//     console.log(this);
// })



















// call apply bind
// this 3 are to call a function on object using this keyword

// const obj = {name: "red"}

// function abcd(a,b,c){
    // console.log(this);
// }
// abcd.call(obj,1,2,3);
// // abcd.apply(obj,[1,2,3])
// const runlaterfunc = abcd.bind(obj);




























// Prototype Inheritance

// function makeHuman(name, age){
//     this.name = name;
//     this.age = age;
// }

// const human1 = newHuman("red", 18);


// closures

// event delegation

// var parent = document.querySelector("#parent");
// parent.addEventListener("click", function(){
//     console.log("Works");
// });


// var parent = document.querySelector("#parent");
// parent.addEventListener("click", function(details){
//     if(details.target.id === "play"){
//         console.log("Play Song");
//     }else if(details.target.id === "pause"){
//         console.log("Pause Song");
//     }
// });












// higher order functions

// functino inside function is called higher order function
// var arr = [1,2,3,4,5,6];
// arr.forEach(function(){});
















// error handling like pro - try catch 

// function divide(a,b){
//     try{
//         if(b == 0){
//             throw Error("Something is wrong");
//             // as soon as this line gets exectued the next line of code will not run and directly jump to catch
//         }
//         console.log(a/b);
//     }
//     catch(err){
//         console.log(err);
//     }
// };
// divide(12,0);














// custom events

// how to make custom events
const evt = new Event("uncle");

document.querySelector("button")
.addEventListener("uncle", function(){
    alert("It is an event");
});
document.querySelector("button").dispatchEvent(evt);