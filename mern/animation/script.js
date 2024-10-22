//  GSAP




// var tl = gsap.timeline()

// tl.to('#box1',{
//     x: 1170,
//     duration: 2.5,
//     delay: 1.5
// })

// tl.to('#box2',{
//     x: 1170,
//     duration: 2.5,
//     rotate: 360
// })

// tl.to('#box3',{
//     x: 1170,
//     duration: 2.5,
//     rotate: -360
// })










// SCROLL TRIGGER

// gsap.from("#page1 #box",{
//     scale: 0,
//     rotate: 360,
//     duration: 1,
//     delay: 1.5
// })

// gsap.from("#page2 #box",{
//     scale: 0,
//     rotate: 360,
//     duration: 1,
//     delay: 1.5,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",       
//         markers: true,
//         start: "top 50%",
//         end: "top 30%",
//         scrub: 3
//     }
// })













//                                        LOCOMOTIVE JS


var scroll = new  LocomotiveScroll({
    el:doucument.querySelector('[data-scroll-container]'),
    smooth: true

})