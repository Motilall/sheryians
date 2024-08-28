function loadingAnimation(){
        var tl = gsap.timeline()
        tl.from(".line h1",{
            y:150,
            stagger: 0.2,
            duration: 0.6,
            delay: 0.3
        })

    tl.to("#line1-part1", {

    })

    tl.from("#line1-part1",{
    opacity: 0,
    onStart: function(){
        var h5timmer = document.querySelector("#line1-part1 h5")
        var grow = 0 
        setInterval(function(){
            if(grow < 100){
                // grow++
                // console.log(grow)
                h5timmer.innerHTML = grow++
            }else{
                // grow = 100
                // console.log(grow)
                h5timmer.innerHTML = grow
            }
            },35);
        },
    })

    tl.to('.line h2',{
        animationName: "anime",
        opacity: 1
    })

    tl.to("#loader",{
        opacity: 0,
        duration: 0.2,
        delay: 3.8
    })

    tl.from("#page1",{
        delay: 0.2,
        y: 1600,
        duration: 0.5,
        opacity: 0,
        ease: Power4
    })

    tl.to("#loader",{
        display: "none"
    })

    tl.from("#nav", {
        opacity: 0
    })

    // tl.from("#hero1 h1, #hero2 h1, #hero3 h1, #hero3 h2, #hero4 h1", {
    //     y: 120,
    //     stagger: 0.2 
    // })


    tl.from("#hero1, #hero2, #hero3, #hero4", {
        y: 120,
        stagger: 0.2
    })
    
}















function cursonAnimation(){
    
document.addEventListener("mousemove", function(dets){
    // console.log("hello")
    // console.log(dets.x)
    gsap.to("#crsr", {
        left: dets.x,
        top: dets.y
    })
})

Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
    //Parameters are optional.
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // duration: 1,
  });
}

cursonAnimation();
loadingAnimation()