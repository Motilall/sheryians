// gsap.to("#page2 h1", {
//     transform: "translateX(-125%)",
//     scrollTrigger: {
//         trigger: "#page2",
//         scroller: "body",
//         markers: true,
//         scrub: 2,
//         start: "top 0",
//         end: "top -100%",
//         scrub: 2,
//         // pin: ture
//     }
// })

gsap.registerPlugin(ScrollTrigger);

gsap.to("#page2 h1", {
  x: "-125%", // Moves the h1 to the left by 125%
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers: true,
    scrub: 3,
    start: "top top", // When the top of #page2 hits the top of the viewport
    end: "+=100%", // The distance to scroll horizontally
    pin: true, // Pins the #page2 section in place during the scroll
    anticipatePin: 1 // Smooth pinning effect
  }
});
