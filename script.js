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

loco();

//------------------MENU-----------------------

var main = document.querySelector("#main")
var menu = document.querySelector(".menu")
var menuclose = document.querySelector(".close")
var menubar = document.querySelector("#menu-page")
var count = 0
menu.addEventListener("click", function () {
    if (count == 0) {
        menubar.style.top = "0%"
        count = 1
        main.style.opacity = 0.5
        menu.innerHTML = `<i class="ri-close-line"></i>`
      
    }
    else {
        count = 0
        menubar.style.top = "-100%"
        main.style.opacity = 1
        menu.innerHTML = `<i class="ri-menu-fill"></i>`


        
    }
})



// ---------------------LOGO----------------------

var tl = gsap.timeline(
    {
        duration: .4,
        scrollTrigger: {
            trigger: "#logo",
            scroller: "#main",
            start: "10% 0%",
            scrub: 1,
            end: "top 0%",
            // markers:true,
        }
    }
)
tl
    .to(".logo2", {
        top: "0%",
    }, "l")
    .to(".logo1", {
        y: -100
    }, "l")

var tlO = gsap.timeline(
    {
        duration: .4,
        scrollTrigger: {
            trigger: "#fc2",
            scroller: "#main",
            start: "18% 100%",
            scrub: 1,
            end: "top 100%",
            // markers:true,
        }
    }
)
tlO
    .to(".logo2", {
        top: "100%",
    }, "l")
    .to(".logo1", {

        y: 0
    }, "l")


// --------------------------PAGE1-----------------------

var tl1 = gsap.timeline()
tl1
    .from("#navbar,h3,h4", {
        y: -20,
        opacity: 0,
        stagger: .01,
    }, "a")
    .from("#intro-cont h1", {
        transform: "translatey(100%)",
        stagger: .3,
    }, "a")
    .from("#page2", {
        opacity: 0,
    })

// -------------------------PAGE2-----play-cursor------------------

var c = document.querySelector("#vid-cursor")
document.querySelector("#page2 video").addEventListener("mouseenter", function () {
    gsap.to(c, {
        opacity: 1,
        scale: 1,
    })
})
document.querySelector("#page2 video").addEventListener("mouseleave", function () {
    gsap.to(c, {
        opacity: 0,
        scale: 0,
    })
})
document.querySelector("#page2 video").addEventListener("mousemove", function (dets) {
    c.style.left = dets.x + "px"
    c.style.top = dets.y + "px"
})



// -----------------------PAGE3--------------------------

var tj = gsap.timeline()


document.querySelector("#box1 .about").addEventListener("mouseenter", function () {
    tj.to("#box1 .jadu", {
        height: "16vw",
    })
    tj.to("#box1 .jadu .img-name", {
        scale: 1,
    })
})
document.querySelector("#box1 .about").addEventListener("mouseleave", function () {
    tj.to("#box1 .jadu .img-name", {
        scale: 0,
    })
    tj.to("#box1 .jadu", {
        height: "0",
    })
})

document.querySelector("#box2 .about").addEventListener("mouseenter", function () {
    tj.to("#box2 .jadu", {
        height: "16vw",
    })
    tj.to("#box2 .jadu .img-name", {
        scale: 1,
    })
})
document.querySelector("#box2 .about").addEventListener("mouseleave", function () {
    tj.to("#box2 .jadu .img-name", {
        scale: 0,

    })
    tj.to("#box2 .jadu", {
        height: "0",
    })
})

document.querySelector("#box3 .about").addEventListener("mouseenter", function () {
    tj.to("#box3 .jadu", {
        height: "16vw",
    })
    tj.to("#box3 .jadu .img-name", {
        scale: 1,
    })
})
document.querySelector("#box3 .about").addEventListener("mouseleave", function () {
    tj.to("#box3 .jadu .img-name", {
        scale: 0,

    })
    tj.to("#box3 .jadu", {
        height: "0",
    })
})

gsap.to(".p3box .about", {
    y: 250,
    scrollTrigger: {
        trigger: "#page3-cont",
        scroller: "#main",
        start: "top 40%",
        end: "top -150%%",
        scrub: 1,
        // markers:true,
    }
}, "e")
gsap.to(".p3box img", {
    y: 50,
    scrollTrigger: {
        trigger: "#page3-cont",
        scroller: "#main",
        start: "5% 20%",
        end: "top -150%%",
        scrub: 1,
        // markers:true,
    }
}, "e")


// -----------------------PAGE5--------------------------


var c2 = document.querySelector("#merch-cursor")
document.querySelectorAll(".merch-box").forEach(function (b) {

    b.addEventListener("mousemove", function (det) {
       
        c2.style.left = `${det.x}px`
        c2.style.top = `${det.y}px`
    })
    b.addEventListener("mouseenter", function () {
        gsap.to(c2, {
            opacity: 1,
            scale: 1,
        })
    })
    b.addEventListener("mouseleave", function () {
        gsap.to(c2, {
            opacity: 0,
            scale: 0,
        })

    })
})

gsap.from("#mr1 .merch-box", {
    y: 500,
    stagger: .2,
    scrollTrigger: {
        trigger: "#mr1",
        scroller: "#main",
        start: "top 60%",
        end: "top -50%%",
        // markers:true,
    }
})
gsap.from("#mr2 .merch-box", {
    y: 500,
    stagger: .2,
    scrollTrigger: {
        trigger: "#mr2",
        scroller: "#main",
        start: "top 50%",
        end: "top -50%%",
        // markers:true,
    }
})


// -----------------------PAGE6--------------------------

var arrDrag = [
    { no: "m//00", name: "Amazon", text: '<div class="h1"><h1>GREAT CAUSE,GREAT PEOPLE</h1></div><div class="h1"><h1>AND ABSOLUTELY GREAT FOR</h1></div><div class="h1"><h1>THE ENVIRONMENT</h1></div>' },
    { no: "m//00", name: "Barbara", text: '<div class="h1"><h1>I THINK I SPEAK FOR</h1></div><div class="h1"><h1>EVERYONE WHEN I SAY WE</h1></div><div class="h1"><h1>ARE VERY GRATEFUL TO</h1></div><div class="h1"><h1>GOD</h1></div>' },
    { no: "m//00", name: "Trish", text: '<div class="h1"><h1>HEY AMIGOS WHAT`S UP.</h1></div><div class="h1"><h1>I SAY WE</h1></div><div class="h1"><h1>ARE ipsum dolor sit TO</h1></div><div class="h1"><h1>lorem anjsdn</h1></div>' },
    { no: "m//00", name: "Barbara", text: '<div class="h1"><h1>I THINK I SPEAK FOR</h1></div><div class="h1"><h1>EVERYONE WHEN I SAY WE</h1></div><div class="h1"><h1>ARE VERY GRATEFUL TO</h1></div><div class="h1"><h1>GOD</h1></div>' },
    { no: "m//00", name: "Trish", text: '<div class="h1"><h1>Lorem ipsum dolor lorem.</h1></div><div class="h1"><h1>I SAY WE</h1></div><div class="h1"><h1>ARE ipsum dolor sit TO</h1></div><div class="h1"><h1>lorem anjsdn</h1></div>' },

]
var clutr = ``
function print() {

    arrDrag.forEach(function (item, index) {
        clutr += `
        <div id ="${index}" class="drag-item">
            <div id ="${index}" class="bullet"></div>
            <h3 id ="${index}" >${item.no}</h3>
            <h3 id ="${index}" >${item.name}</h3>
        </div>    `
    });
    document.querySelector("#page6 #drag-row").innerHTML = clutr
}
print()
var flag = 0
document.querySelector("#page6 #drag-row").addEventListener("click", function (dets) {
    document.querySelector(".drag-item-text").innerHTML = `${arrDrag[dets.target.id].text} `
    gsap.from(".drag-item-text .h1 h1",{
        y:120,
        opacity:0
    })

})


// -----------------------PAGE7------------------------

gsap.from(".p7img", {
    opacity: 0,
    stagger: .2,
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        start: "top 80%",
        end: "top -50%%",
        // markers:true,
    }
})

// -------------------------FOOTER-----------------------

gsap.from("#footer", {
    opacity: 0,
    stagger: .2,
    scrollTrigger: {
        trigger: "#footer",
        scroller: "#main",
        start: "top 54%",
        end: "top -50%%",
        // markers:true,
    }
})
gsap.from("#footer svg path", {
    opacity: 0,
    stagger: .2,
    scrollTrigger: {
        trigger: "#footer",
        scroller: "#main",
        start: "5% 50%",
        end: "top 50%",
        // markers:true,
        scrub: 2
    }
})
