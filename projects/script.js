function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco()

var clutter = "";

document.querySelector("#page2>h1").textContent.split(" ").forEach(function(dets){
  clutter += `<span>${dets}</span>`
  document.querySelector("#page2>h1").innerHTML = clutter;
})

gsap.to("#page2>h1>span",{
  ScrollTrigger:{
    trigger: `#page2>h1>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5
  },
  stagger: .2,
  color: `#fff`
})















function canvas(){
  const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    ./Magma-main/frames00007.png
    ./Magma-main/frames00010.png
    ./Magma-main/frames00013.png
    ./Magma-main/frames00016.png
    ./Magma-main/frames00019.png
    ./Magma-main/frames00022.png
    ./Magma-main/frames00025.png
    ./Magma-main/frames00028.png
    ./Magma-main/frames00031.png
    ./Magma-main/frames00034.png
    ./Magma-main/frames00037.png
    ./Magma-main/frames00040.png
    ./Magma-main/frames00043.png
    ./Magma-main/frames00046.png
    ./Magma-main/frames00049.png
    ./Magma-main/frames00052.png
    ./Magma-main/frames00055.png
    ./Magma-main/frames00058.png
    ./Magma-main/frames00061.png
    ./Magma-main/frames00064.png
    ./Magma-main/frames00067.png
    ./Magma-main/frames00070.png
    ./Magma-main/frames00073.png
    ./Magma-main/frames00076.png
    ./Magma-main/frames00079.png
    ./Magma-main/frames00082.png
    ./Magma-main/frames00085.png
    ./Magma-main/frames00088.png
    ./Magma-main/frames00091.png
    ./Magma-main/frames00094.png
    ./Magma-main/frames00097.png
    ./Magma-main/frames00100.png
    ./Magma-main/frames00103.png
    ./Magma-main/frames00106.png
    ./Magma-main/frames00109.png
    ./Magma-main/frames00112.png
    ./Magma-main/frames00115.png
    ./Magma-main/frames00118.png
    ./Magma-main/frames00121.png
    ./Magma-main/frames00124.png
    ./Magma-main/frames00127.png
    ./Magma-main/frames00130.png
    ./Magma-main/frames00133.png
    ./Magma-main/frames00136.png
    ./Magma-main/frames00139.png
    ./Magma-main/frames00142.png
    ./Magma-main/frames00145.png
    ./Magma-main/frames00148.png
    ./Magma-main/frames00151.png
    ./Magma-main/frames00154.png
    ./Magma-main/frames00157.png
    ./Magma-main/frames00160.png
    ./Magma-main/frames00163.png
    ./Magma-main/frames00166.png
    ./Magma-main/frames00169.png
    ./Magma-main/frames00172.png
    ./Magma-main/frames00175.png
    ./Magma-main/frames00178.png
    ./Magma-main/frames00181.png
    ./Magma-main/frames00184.png
    ./Magma-main/frames00187.png
    ./Magma-main/frames00190.png
    ./Magma-main/frames00193.png
    ./Magma-main/frames00196.png
    ./Magma-main/frames00199.png
    ./Magma-main/frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "// object you want to pin it.",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});
}
canvas()

var clutter = "";

document.querySelector("#page4>h1").textContent.split(" ").forEach(function(dets){
  clutter += `<span>${dets}</span>`
  document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  ScrollTrigger:{
    trigger: `#page4>h1>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: .5
  },
  stagger: .2,
  color: `#fff`
})
