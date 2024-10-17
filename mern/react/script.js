// var root = document.querySelector("#root")
// var h1 = document.createElement('h1') // this will create an h1 element in js
// h1.innerHTML = "hello";
// console.log(h1)
// root.appendChild(h1)

var h1 = React.createElement('h1', null, "Hello from React") // this will create an h1 element in react js
var parent = document.querySelector("#parent")
var root = ReactDOM.createRoot(parent)
root.render(h1)