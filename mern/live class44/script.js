// getAttribute and setAttribute
// creating an element
// mouse events, keyboard events, scroll events, wheel events,etc.


// in js we can not change the id's through inner.html - for that we need getAttribute and setAttribute
// getAttribute is for getting an attribute
// setAttribute is for setting an attribute

// var h1 = document.querySelector('h1')
// var att = h1.getAttribute('id')
// console.log(att);
// h1.setAttribute('id', 'heroine')


var img1 = document.querySelector('#img1')
var img2 = document.querySelector('#img2')

var btn = document.querySelector('button')
btn.addEventListener('click', function(){
    var img1SRC = img1.getAttribute('src')
    var img2SRC = img2.getAttribute('src')

    img1.setAttribute('src', img2SRC)
    img2.setAttribute('src', img1SRC)
})
