let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();



gsap.from(".transition1", {
    y: 50,
    opacity: 0,
    duration: 2,
    ease: Power4.easeout,
})
tl.from(".stagger1", {
    opacity: 0,
    y: -50,
    stagger: .6,
    ease: Power4.easeOut,
    duration: 2
})

gsap.from(".transition2", {
    scrollTrigger: {
        trigger: ".transition2",
        start: "top bottom"
    }, 
    y: 50,
    opacity: 0,
    duration: 2,
    stagger: .6
})

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: ".transition3",
        start: "top bottom"
    }, 
    y: 50,
    opacity: 0,
    duration: 2,
    stagger: .6
})

gsap.from(".transition4", {
    scrollTrigger: {
        trigger: ".transition4",
        start: "top bottom"
    }, 
    y: 50,
    opacity: 0,
    duration: 2,
    stagger: .6
})