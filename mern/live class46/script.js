// var arr = [ 1, 2, 4, 5, 6]
// var sum = 0;
// arr.forEach(function(elem){
//     sum += elem;
// })

// console.log(sum)

var arr = [
    {
        username: "salmon",
        age: 65,
        married: false,
        isStatus:'Stranger',
        image: 'https://images.unsplash.com/photo-1747171232839-a5fea879ca59?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        username: "shahrukh",
        age: 60,
        married: true,
        isStatus:'Stranger',
        img: 'https://plus.unsplash.com/premium_photo-1749846962175-9530c322e08f?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        username: "sathak",
        age: 40,
        married: false,
        isStatus:'Stranger',
        img: 'https://plus.unsplash.com/premium_photo-1676139292895-b55c11717819?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

function heroFunction() {
    var sum = '';
    arr.forEach(function (elem, idx) {
        let imageSrc = elem.image || elem.img;

        sum += elem + `<div class="card">
        <img src="${imageSrc}" alt="">
        <h1>${elem.username}</h1>
        <h5>${elem.age}</h5>
        <h4>Married: ${elem.married}</h4>
        <h5>${elem.isStatus}</h5>
        <button data-index = "${idx}">Add Friend</button>
    </div>`

    })

    document.body.innerHTML = sum;
}

heroFunction()

body.addEventListener('click', function(e){
    if(e.target.taName === 'BUTTON' && e.target.hasAttribute('data-index')){
        let idx = e.target.getAttribute('data-index');
        let user = arr[idx]

        if(user.isStatus === 'Stranger'){
            user.isStatus = 'Friend'
        }else{
            user.isStatus = 'Stranger'
        }
    }
    heroFunction()
})