// gsap.to("#box", {
//     x: 1000,
//     rotate: 360,
//     backgroundColor: "blue",
//     duration: 2,
//     delay: 1
// })

gsap.from("#box", {
    X: 1000,
    rotate: 360,
    backgroundColor: "crimsion",
    duration: 3,
    delay: 2
})

var tl = gsap.timeline()

tl.to("#box1", {
    x: 1200,
    rotate: 360,
    scale: 0.5,
    duration: 2,
    delay: 1
})

tl.to("#box2", {
    x: 1200,
    rotate: 360,
    scale: 0.5,
    duration: 2,
    delay: 1
})

tl.to("#box3", {
    x: 1200,
    rotate: 360,
    scale: 0.5,
    duration: 2
})