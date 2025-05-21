var box = document.querySelector('#box')
box.addEventListener('dblclick', function(event){
    var img = document.createElement('img')
    img.setAttribute('src', 'heart-removebg-preview.png')
    img.classList.add('heart')
    box.appendChild(img)

    img.style.left = event.clientX + 'px'
    img.style.top = event.clientY + 'px'
})