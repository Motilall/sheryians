// var btn  = document.querySelector('button')
// var body = document.querySelector('body')
// btn.addEventListener('click', function(){
//     var img = document.createElement('img')
//     img.setAttribute('src', 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')

//     img.style.height = '50px'

//     body.appendChild(img)

// })

// DIFFERENT TYPES OF EVENTS
// -> click
// -> dblclick
// -> mouseenter (when ever the mouse eneters to element)
// -> mouseleave (when the mouse exits the elemnt)
// -> mousemove (when ever the mouse moves inside the element)
// -> keypress (it is only applicable on document)
// -> scroll

var box = document.querySelector('#box')
box.addEventListener('mousemove', function(dets){
    console.log(dets)
})