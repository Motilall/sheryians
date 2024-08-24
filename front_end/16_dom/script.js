// DOM -> Document Object Model
// dom manupilation
// change the elements in the website with the javascript   

// Accessing the Elements
//      documnet.querySelector()
// selection    change      event
//      selection and save
//      -> document.getElementById - this will only select id's
//      ->document.getElementByClass - this will only select classes
//      ->document.getElementByTagName - this will only select tags
//      - there is one code which will do all of these -> document.querySelector()
    //     var btn = document.querySelector('button');
    // var secimg = document.querySelector("#abcd");
    // var firimg = document.querySelector(".abcd");

    // var firh3 = document.querySelector("#efg");
    // var sech3 = document.querySelector(".efg");
// if we have many h3's then, only first h3 will be selected
// to select all the h3 elements we will use 
// var h3 = document.querySelectorAll("h3");









// var btn = document.querySelector("button");
// btn.textContent = "Starting..";// this will print everything
// var h1 = document.querySelector("h1");
// h1.textContent += "Red";// this for after the text and not to remove the previous
// h1.innerHTML = '<i>Hello</i>';
// h1.style.color = 'lightblue'; // change the css
// h1.style.fontFamily = "gilroy";
// h1.style.fontSize = '120px';
// h1.classList.add('makeitred');











// Creating and Deleting Elements

// var h1 = document.createElement('h1');
// h1.textContent = "hello";
// h1.classList.add("makeired")
// document.querySelector("body").appendChild(h1);

// var img = document.createElement("img");
// img src = 'C:\Users\HP\Pictures\Untitled3.png';
// document.querySelector(body).appendChild(img);// to add image
// document.querySelector(body).removeChild(img); // to remove the image









var btn = document.querySelector("button");
btn.addEventListener('click', function(){
    btn.textContent = "Starting...";
    btn.style.backgroundColor = "skyblue";
    btn.style.color = 'white'
    btn.style.fontSize = '90px'
});

btn.addEventListener('dblclick', function(){
    btn.style.backgroundColor = 'red';
    btn.textContent = 'stop';
    btn.style.color = 'black';
});

btn.addEventListener('mouseover', function(){
    btn.style.backgroundColor = 'yellow';
    btn.textContent = "Waiting.."
});

// [gpt -> tell me all the js events for addEventListener]










document.querySelector("body")
.addEventListener("mousemove", function(dets){
    console.log(dets);
})