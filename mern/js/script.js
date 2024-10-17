// this is normal function
// function abc(){
//     console.log("Hello, World!");
// }

// var abc = function(){
//     console.log("this is a first class function");    --> any function which is treated like variable(take arrguments or parameters)
// }

// var abc = ()=> {
//     console.log("this is an arrow function");
// }

// var arr = [10,20,30,40,50,60]

// arr.forEach(function(i){
//     console.log("Hello", i)   --> perform action in each and every element in an array
// })

// var obj = {
//     user: 'Red',
//     age: 20
// }
// console.log(obj.user)

// function inside an object is called method;


// ------------------ DOM -----------------------

// var hi = document.querySelector('h1')
// console.log(hi)

// hi.innerHTML = "wow"
// hi.style.color = "orangered"

// hi.addEventListener("click",function(){
//     console.log("hello")
//     hi.innerHTML = "changed"
// })











// *************************** JAVA SCRIPT LOGIC *************************************
//  foreach will only loop on array
// map will creat a whole new black array

let names = ["ask", "kad", "dad", "mask", "hello"]
// let arr = names.map(function(value){
//     return value + " ji";
// })


// return the elements of the array which contain the first letter is 'a'
let arr = names.filter(function(value){
    return value.startsWith("a")
})
// console.log(arr)

// spread operator
// this will copy the array values 
let copy = [...names]


// rest operator
// this is same as spread operator and is used for function argurments






// Merging two arrays of data fetched from separate APIs into a single list
const firstName = ["Red", "Black", "Yellow"]
const lastName = ["Ji", "Kumar", "yep"]
const fullName = [...firstName, ...lastName]
// console.log(fullName)




// Filtering an array of objects to display items based on a search query (e.g., filtering products by type)
const products = [
    { id: 1, name: "Product 1", type: "Electronics"},
    { id: 2, name: "Product 2", type: "Fashion"},
    { id: 3, name: "Product 3", type: "Electronics"},
    { id: 4, name: "Product 4", type: "Fashion"},
    { id: 5, name: "Product 5", type: "Electronics"},
]
// let newarr = products.filter(function(product){
//     return product.type === "Electronics"
// })
// console.log(newarr)



// Mapping over an array of user data to create a list of user cards.
// const users =[
//     {id:1, name:"John", age:25},
//     {id:2, name:"Jane", age:30},
//     {id:3, name:"Bob", age:35},
// ]
// let newarr = users.map(function(user){
//     return `<div><h3>${user.name}</h3><h5>${user.age}</h5></div>`;
// });
// console.log(newarr)





// grouping an array of objects by a specific property (e.g., gorup users by role)
// const users =[
//     {id:1, name:"John", role:"Admin"},
//     {id:2, name:"Jane", role:"User"},
//     {id:3, name:"Bob", role:"Admin"},
// ]
// let obj = {}

// users.forEach(user => {
//     if(obj[users.role]){
//         obj[user.role].push(user);
//     }else{
//         obj[user.role] = [];
//         obj[user.role].push(user);
//     }
// });
// console.log(obj);





// Removing or updating a specific object in an array of data based on a unique ID.
// const users = [
//     { id: 1, name: "John", age: 25 },
//     { id: 2, name: "Jane", age: 30 },
//     { id: 3, name: "Bob", age: 35 },
// ]
// let newarr = users.filter(user => {
//     return user.id !== 2;
// })
// console.log(newarr);

// ------------------------------ some advacne js concepts ------------------------------------


// var is in old js (es5)
// let and const is in new js (es6)

// var is function scoped 
// it can be used only inside the parent function only

// var uses windo objec
// many things we use in js does't have in js, in var it will borrow from the windo 
// function abc(){
//     for(i = 1; i < 12; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abc()

var a = 12;
let b = 12;


// let is braced scoped 
// it can be only acessed within the block of code


// execution context -> when ever we create functino, an imaginary box is formed which will contain 3 things
//                      1> variables is that funciton
//                      2> functions in that functino
//                      3> lexical environment

// lexical environment -> it is the set of rules which will tell us who can acess the function elements