// var btn = document.querySelector('button')

// btn.addEventListener('click', function(){
//     location.href = '/next_page.com'
// })

// document.addEventListener("DOMContentLoaded", function(){
//     let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')

// btn1.addEventListener('click', function(){
//     history.back()
// })

// btn2.addEventListener('click', function(){
//     history.forward()
// })
// })

// make a webpage with a feature of light and dark mode with the help of classlist and localstorage

// working process: get the mode data from local storage if the mode is dark then make it light else the mode is light then make it dark


//div.classList.add('circle') -> to add a class
// div.classList.remove('circle') -> to remove a class
// localStorage.clear()
// localStorage.setItem()
// localStorage.getItem()
// localStorage.removeItem()


// localStorage.setItem()



let light = document.querySelector('#light')
let dark = document.querySelector('#dark')
let body = document.body;

let currentTheme = localStorage.getItem('theme')
if(currentTheme === 'light'){
    body.classList.add('light')
}else if(currentTheme === 'dark'){
    body.classList.add('dark');
}

light.addEventListener('click', function(){
    body.classList.remove('dark')
    body.classList.add('light')
    localStorage.setItem('theme', 'light')
})

dark.addEventListener('click', function(){
    body.classList.remove('light')
    body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
})