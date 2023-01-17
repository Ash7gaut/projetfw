gsap.to(".bgblue", {
    scale:1.1,
    transition:3.5,
    scrollTrigger: {
        trigger: ".choisis",
        // markers: true,
        start: "top 75%",
        end: "bottom 90%",
    }

})

gsap.from("#star1", {
    x:-50,
    y:-50,
    scrollTrigger: {
        trigger: ".comm",
        markers: true,
        start: "top bottom",
        end: "bottom 80%",
    }
})
