// function orderFood(){
//     return new Promise((res, rej) =>{
//         setTimeout(() => {
//             let chance = Math.random() < .7;
//             if(chance) res();
//             else rej();
//         }, 2000);
//     })
// }

// orderFood()
// .then(function(){
//     console.log("🍕Pizza deliverd!")
// })
// .catch(function(){
//     console.log("🚫delivery failed!")
// })







// function getUser(){
//     return new Promise((res, rej) =>{
//         setTimeout(() => {
//             res({id: 1, name: "Harsh"})
//         }, 1000);
//     })
// }

// function getPosts(userId){
//     return new Promise((res, rej) =>{
//         setTimeout(() => {
//             res(["titile 1", "title 2"])
//         }, 1000);
//     })
// }

// function getComments(postId){
//     return new Promise((res, rej) =>{
//         setTimeout(() => {
//             res(["great post", "amazing content"])
//         }, 1000);
//     })
// }

// getUser()
// .then(function(data){
//     console.log(`data fetched: ${data.name}`);
//     return getPosts(data.id)
// })
// .then(function(titles){
//     console.log(titles)
//     return getComments("ahsdjfkd")
// })
// .then(function(cmts){
//     console.log(cmts)
// })
// .finally(function(){
//     console.log("all data fetched")
// })






function fakeApiCall(endpoint){
    const data ={
        users : ["harsh", "shivaam", "raghav"],
        posts : ["hey champs", " great going ", "lets build"]
    }
    
    let delay = Math.random() * 2000 + 1000;
    return new Promise(function(res, rej){
        setTimeout(() => {
            res(data[endpoint])
        }, delay);
    })
}

fakeApiCall("users")
.then(function(data){
    console.log(data)
})


fakeApiCall("posts")
.then(function(data){
    console.log(data)
})
