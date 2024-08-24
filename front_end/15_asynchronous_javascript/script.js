// in javascript the most of code is assumed the asynchronous so it is placed in the side stack
// - settimeout -> the code will run after few moments

// setTimeout(function(){
//     console.log("hey")
// }, 3000);




// - setinterval -> the code will run after few moments repeatdly in a pritcular interval of time 
// var count = 1;
// const repeating = setInterval(function(){
    // count++;
    // console.log(count);
    // if(count === 5){
        // clearInterval(repeating);
    // }
// }, 3000);











// - Fetch API -> it will go to other url and bring some data or it will take some data from us to that url

// fetch(`https://randomuser.me/api/`)
// .then(raw => raw.json()) - this is for humand readable formate
// .then(raw => console.log(raw)); // we use ".this()" to run this line of code after the fetch

// [ gpt -> tell me three api endpoints to practice ajx]












// - Axios (or other HTTP libraries) -> the work is same as Fetch API, but it is more developer friendly

// axios.get(`https://randomuser.me/api/`)
// .then(result => console.log(result))
// [ gpt - give me a free random user api endpoint for practice]















// - promise

// const parchi = new Promise(fucntion(resolve, reject){
//     fetch(`https://randomuser.me/api/`);
//     .then(raw => raw.json());
//     .then(result => {
//         if(result.results[0].gender === "male") resolve(); 
//         else reject();
//     });
// });

// READ IT ONCE AGAIN 
//

// we use these above codes when we know that our code will take some time















// Callbacks

// when we call a fucntion, in its parameter we use another function i.e. called callbacks in javascript
// function abcd(a, b){
//     b();
// }
// abcd(1, function(){
//     console.log("callback!");
// })

// function doSomeAsyncTask(url, callback){
//     fetch(url)
//     .then(rew => rew.json())
//     .then(result => {
//         callback()
//     })
// }
// doSomeAsyncTask("some url", function(){

// })











// Async/Await 









//Event Loop









// Generators

function* printNumbers(){
    console.log("started");
    yeild 1;
    console.log("started");
    yeild 2;
    console.log("started");
    yeild 3;
}

const ans = printNumbers();
console.log(ans.next().value);